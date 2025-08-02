
  // ===== Mobile Menu Toggle =====
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // ===== Carousel =====
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  document.querySelectorAll('.btn.btn-circle').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.innerText.includes('❮')) {
        prevSlide();
      } else {
        nextSlide();
      }
    });
  });

  setInterval(nextSlide, 4000); // auto-slide every 4 seconds

  // ===== Sticky Header Shadow on Scroll =====
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-lg');
    } else {
      header.classList.remove('shadow-lg');
    }
  });

  // ===== Scroll Reveal Animation =====
  const revealElements = document.querySelectorAll('.reveal-hidden');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach((el) => {
    observer.observe(el);
  });



   window.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("animatedImage");
    setTimeout(() => {
      img.classList.remove("opacity-0", "translate-x-[-50px]");
      img.classList.add("opacity-100", "translate-x-0");
    }, 300); // slight delay to feel smooth
  });




   document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          cards.forEach((card, index) => {
            const delay = index * 1000; // 1 second = 1000ms

            setTimeout(() => {
              card.classList.remove("opacity-0", "translate-y-10");
              card.classList.add("opacity-100", "translate-y-0");
            }, delay);
          });

          cards.forEach(card => observer.unobserve(card));
        }
      });
    }, {
      threshold: 0.4
    });

    if (cards[0]) observer.observe(cards[0]);
  });