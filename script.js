// Responsive toggle manu

function menu(e) {
    const menuList = document.getElementById("menuList");
    menuList.classList.toggle("opacity-100");
    menuList.classList.toggle("top-[80px]");
    menuList.classList.toggle("max-h-[500px]");
}


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    const img = slide.querySelector('img');
    if (i === index) {
      slide.classList.remove('hidden');
      // Trigger animation
      img.classList.add('scroll-animation');
      setTimeout(() => img.classList.remove('scroll-animation'), 1000); // reset after 1s
    } else {
      slide.classList.add('hidden');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Init
showSlide(currentSlide);
setInterval(nextSlide, 3000);