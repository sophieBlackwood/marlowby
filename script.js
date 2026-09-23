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
  // Prevent right-click and dragging on images
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

  // Re-run image protection if images are dynamically inserted
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Element node
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

  // Scroll to Top Button
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

  // Blog Carousel Loop & Interactions
  const blogTrack = document.querySelector(".blog-card-grid");
  const blogPrev = document.querySelector(".blog-carousel-btn.prev");
  const blogNext = document.querySelector(".blog-carousel-btn.next");
  const blogCards = Array.from(document.querySelectorAll(".blog-card"));

  if (blogTrack && blogCards.length > 0) {
    const trackStyle = getComputedStyle(blogTrack);
    const gap = parseFloat(trackStyle.gap) || 0;
    const total = blogCards.length;

    // Clone initial cards to the end to allow continuous sliding forward
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

    // Seamless loop jump handling using transitionend
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
        // Snap to end clone set, then transition back one step
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

    // Responsive Window Resize Handler
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        requestAnimationFrame(() => updateCarousel(false));
      }, 100);
    });

    // Touch Controls
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
