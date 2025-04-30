const aboutImages = document.querySelectorAll('.about-img img');
  let currentIndex = 0;

  function showNextAboutImage() {
    aboutImages.forEach((img) => img.classList.remove('active'));
    aboutImages[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % aboutImages.length;
  }

  showNextAboutImage(); // Show the first image
  setInterval(showNextAboutImage, 3000); // Change every 3 seconds




  let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dots span');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  // Update dot navigation
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(index);
}

// Add event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => goToSlide(index));
});

// Auto-slide functionality (optional)
let slideInterval = setInterval(nextSlide, 3000);

// Pause and resume auto-slide on hover
const slider = document.querySelector('.slider-container');
slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 4000));




document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  const body = document.body;
  
  hamburger.addEventListener('click', function() {
      // Toggle active state
      hamburger.classList.toggle('active');
      navbar.classList.toggle('active');
      
      // Toggle body overflow
      if (navbar.classList.contains('active')) {
          body.style.overflow = 'hidden';
          hamburger.setAttribute('aria-expanded', 'true');
      } else {
          body.style.overflow = '';
          hamburger.setAttribute('aria-expanded', 'false');
      }
  });
  
  // Close menu when clicking on links
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
          if (navbar.classList.contains('active')) {
              hamburger.classList.remove('active');
              navbar.classList.remove('active');
              body.style.overflow = '';
              hamburger.setAttribute('aria-expanded', 'false');
          }
      });
  });
});
  






const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('open');

  // Update ARIA
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
});





document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
});





const navList = document.querySelector('.nav-list');
const body = document.body;

hamburger.addEventListener('click', () => {
  navList.classList.toggle('open');
  body.classList.toggle('no-scroll');
});


navList.classList.remove('open');
body.classList.remove('no-scroll');
