document.addEventListener("DOMContentLoaded", () => {
  // Mobile Side Navigation Menu
  const openNavBtn = document.getElementById("openNavBtn");
  const closeNavBtn = document.getElementById("closeNavBtn");
  const mySidenav = document.getElementById("mySidenav");

  if (openNavBtn && closeNavBtn && mySidenav) {
    openNavBtn.addEventListener("click", () => {
      mySidenav.style.width = "250px";
    });

    closeNavBtn.addEventListener("click", () => {
      mySidenav.style.width = "0";
    });
  }

  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "flex";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });

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
    const transitionDuration = parseFloat(trackStyle.transitionDuration) * 1000 || 500;
    const total = blogCards.length;

    // Clone cards to allow infinite looping
    blogCards.forEach(card => blogTrack.appendChild(card.cloneNode(true)));

    let index = 0;
    let isTransitioning = false;

    const updateCarousel = (animate = true) => {
      if (isTransitioning && animate) return;
      isTransitioning = animate;

      const cardWidth = blogCards[0].offsetWidth;
      const offset = index * (cardWidth + gap);

      blogTrack.style.transition = animate ? `transform ${transitionDuration / 1000}s ease` : "none";
      blogTrack.style.transform = `translateX(${-offset}px)`;

      if (animate) {
        setTimeout(() => {
          isTransitioning = false;
        }, transitionDuration);
      } else {
        isTransitioning = false;
      }
    };

    const jumpToStart = () => {
      index = 0;
      updateCarousel(false);
    };

    const next = () => {
      if (isTransitioning) return;
      index++;
      updateCarousel(true);
      if (index >= total) {
        setTimeout(jumpToStart, transitionDuration + 10);
      }
    };

    const prev = () => {
      if (isTransitioning) return;
      if (index === 0) {
        index = total;
        updateCarousel(false);
        requestAnimationFrame(() => {
          index--;
          updateCarousel(true);
        });
      } else {
        index--;
        updateCarousel(true);
      }
    };

    blogNext?.addEventListener("click", next);
    blogPrev?.addEventListener("click", prev);

    updateCarousel(false);

    // Responsive Window Resize Handler
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        requestAnimationFrame(() => updateCarousel(false));
      }, 100);
    });

    // Touch & Swipe Controls for Mobile
    let startX = 0;
    let endX = 0;

    blogTrack.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    blogTrack.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          next();
        } else {
          prev();
        }
      }
    }, { passive: true });
  }
});
