// Global navigation functions called by inline HTML onclick handlers
function openNav() {
  const mySidenav = document.getElementById("mySidenav");
  if (mySidenav) {
    mySidenav.style.width = "250px";
  }
}

function closeNav() {
  const mySidenav = document.getElementById("mySidenav");
  if (mySidenav) {
    mySidenav.style.width = "0";
  }
}

document.addEventListener("DOMContentLoaded", () => {
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
    const total = blogCards.length;

    // Clone initial cards to the end to allow continuous sliding forward
    blogCards.forEach((card) => blogTrack.appendChild(card.cloneNode(true)));

    let index = 0;
    let isTransitioning = false;

    const getCardWidth = () => {
      return blogCards[0].offsetWidth;
    };

    const updateCarousel = (animate = true) => {
      const cardWidth = getCardWidth();
      const offset = index * (cardWidth + gap);

      blogTrack.style.transition = animate ? "transform 0.4s ease-in-out" : "none";
      blogTrack.style.transform = `translateX(${-offset}px)`;
    };

    // Seamless loop jump handling using transitionend instead of fixed setTimeouts
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
        // Instant snap to end clone set, then transition back one step
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
