// Global navigation functions attached to window for inline onclick handlers
window.openNav = function () {
  const mySidenav = document.getElementById("mySidenav");
  if (mySidenav) {
    mySidenav.style.width = "250px";
  }
};

window.closeNav = function () {
  const mySidenav = document.getElementById("mySidenav");
  if (mySidenav) {
    mySidenav.style.width = "0";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Image Protection ---
  const protectImage = (img) => {
    if (img.dataset.protected) return;
    img.addEventListener("contextmenu", (e) => e.preventDefault());
    img.addEventListener("dragstart", (e) => e.preventDefault());
    img.dataset.protected = "true";
  };

  const protectImages = () => {
    document.querySelectorAll("img").forEach(protectImage);
  };

  protectImages();

  // Re-run protection if images are dynamically added
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          if (node.tagName === "IMG") {
            protectImage(node);
          } else {
            node.querySelectorAll("img").forEach(protectImage);
          }
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // --- 2. Scroll to Top Button ---
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (scrollToTopBtn) {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      scrollToTopBtn.style.display = scrollPosition > 300 ? "flex" : "none";
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // --- 3. Product Grid Sorting, Search & Pagination ---
  const grid = document.getElementById("productGrid");
  const sortSelect = document.getElementById("input-sort");
  const searchInput = document.getElementById("searchInput");
  const searchForm = document.getElementById("searchForm");
  const showingCount = document.getElementById("showingCount");
  
  // Target class or ID for pagination
  const paginationContainer = document.getElementById("paginationContainer") || document.querySelector(".pagination");

  if (grid) {
    const originalItems = Array.from(grid.querySelectorAll(".product-card-item"));
    let currentItems = [...originalItems];
    const itemsPerPage = 8;
    let currentPage = 1;

    // Filter by search query
    const filterItems = () => {
      const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
      
      if (!query) {
        currentItems = [...originalItems];
      } else {
        currentItems = originalItems.filter((item) => {
          const name = (item.dataset.name || item.innerText).toLowerCase();
          return name.includes(query);
        });
      }

      if (sortSelect && sortSelect.value) {
        sortItems(sortSelect.value, false);
      } else {
        currentPage = 1;
        renderProducts();
      }
    };

    // Sort items
    const sortItems = (criterion, resetPage = true) => {
      switch (criterion) {
        case "name-asc":
          currentItems.sort((a, b) =>
            (a.dataset.name || "").localeCompare(b.dataset.name || "")
          );
          break;
        case "name-desc":
          currentItems.sort((a, b) =>
            (b.dataset.name || "").localeCompare(a.dataset.name || "")
          );
          break;
        case "price-low":
          currentItems.sort((a, b) =>
            parseFloat(a.dataset.price || 0) - parseFloat(b.dataset.price || 0)
          );
          break;
        case "price-high":
          currentItems.sort((a, b) =>
            parseFloat(b.dataset.price || 0) - parseFloat(a.dataset.price || 0)
          );
          break;
        default:
          break;
      }

      if (resetPage) currentPage = 1;
      renderProducts();
    };

    // Render pagination controls
    const renderPagination = (totalPages) => {
      if (!paginationContainer) return;
      paginationContainer.innerHTML = "";

      if (totalPages <= 1) return;

      for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("a");
        pageBtn.href = "#";
        pageBtn.className = `page-numbers text-decoration-none ${i === currentPage ? "current fw-bold" : "text-dark"}`;
        pageBtn.textContent = i;

        pageBtn.addEventListener("click", (e) => {
          e.preventDefault();
          currentPage = i;
          renderProducts();

          const section = document.querySelector(".product-collection");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        });

        paginationContainer.appendChild(pageBtn);
      }
    };

    // Render active products to DOM
    const renderProducts = () => {
      const totalItems = currentItems.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      const startIdx = (currentPage - 1) * itemsPerPage;
      const endIdx = Math.min(startIdx + itemsPerPage, totalItems);

      grid.innerHTML = "";
      const visibleItems = currentItems.slice(startIdx, endIdx);
      visibleItems.forEach((item) => grid.appendChild(item));

      if (showingCount) {
        const startDisplay = totalItems === 0 ? 0 : startIdx + 1;
        showingCount.textContent = `Showing ${startDisplay}–${endIdx} of ${totalItems} Boxes`;
      }

      renderPagination(totalPages);
    };

    // Event Listeners for Filters
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => sortItems(e.target.value));
    }

    if (searchInput) {
      searchInput.addEventListener("input", filterItems);
    }

    if (searchForm) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        filterItems();
      });
    }

    // Initial Render
    renderProducts();
  }

  // --- 4. Blog Carousel ---
  const blogTrack = document.querySelector(".blog-card-grid");
  const blogPrev = document.querySelector(".blog-carousel-btn.prev");
  const blogNext = document.querySelector(".blog-carousel-btn.next");
  const blogCards = Array.from(document.querySelectorAll(".blog-card"));

  if (blogTrack && blogCards.length > 0) {
    const trackStyle = getComputedStyle(blogTrack);
    const gap = parseFloat(trackStyle.gap) || 0;
    const total = blogCards.length;

    // Duplicate initial cards for continuous looping
    blogCards.forEach((card) => blogTrack.appendChild(card.cloneNode(true)));

    let index = 0;
    let isTransitioning = false;

    const getCardWidth = () => blogCards[0].offsetWidth;

    const updateCarousel = (animate = true) => {
      const cardWidth = getCardWidth();
      const offset = index * (cardWidth + gap);

      blogTrack.style.transition = animate ? "transform 0.4s ease-in-out" : "none";
      blogTrack.style.transform = `translateX(${-offset}px)`;
    };

    blogTrack.addEventListener("transitionend", () => {
      isTransitioning = false;
      if (index >= total) {
        index = 0;
        updateCarousel(false);
      }
    });

    const next = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      index++;
      updateCarousel(true);
    };

    const prev = () => {
      if (isTransitioning) return;

      if (index === 0) {
        index = total;
        updateCarousel(false);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            isTransitioning = true;
            index--;
            updateCarousel(true);
          });
        });
      } else {
        isTransitioning = true;
        index--;
        updateCarousel(true);
      }
    };

    if (blogNext) blogNext.addEventListener("click", next);
    if (blogPrev) blogPrev.addEventListener("click", prev);

    updateCarousel(false);

    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        requestAnimationFrame(() => updateCarousel(false));
      }, 100);
    });

    let startX = 0;

    blogTrack.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    blogTrack.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          next();
        } else {
          prev();
        }
      }
    }, { passive: true });
  }
});
