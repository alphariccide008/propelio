// Navbar JS
let navMenu = document.getElementById("nav_menu"),
    navShow = document.getElementById("nav_listIcon"),
    navClose = document.getElementById("nav_close");

if (navShow) {
    navShow.addEventListener('click', () => {
        navMenu.classList.add('show-menu');  // Add class to show menu
        navShow.style.display = "none";      // Hide the list icon
        navClose.style.display = "block";    // Show the close icon
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');  // Remove class to hide menu
        navShow.style.display = "block";        // Show the list icon
        navClose.style.display = "none";        // Hide the close icon
    });
}

// Section 2 Carousel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
const carousel = document.querySelector('.carousel');
const intervalTime = 1000; // 3 seconds
let slideInterval;

// Function to show the current slide
function showSlide(index) {
    const offset = -index * 100;
    carousel.style.transition = 'transform 0.1s ease'; // Add smooth transition
    carousel.style.transform = `translateX(${offset}%)`;
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showSlide(currentIndex);
}

// Function to start the slide interval
function startSlideShow() {
    slideInterval = setInterval(nextSlide, intervalTime);
}

// Function to stop the slide interval
function stopSlideShow() {
    clearInterval(slideInterval);
}

// Initialize the carousel
showSlide(currentIndex);
startSlideShow();

// Optional: Pause the slideshow on mouse hover and resume on mouse leave
carousel.addEventListener('mouseenter', stopSlideShow);
carousel.addEventListener('mouseleave', startSlideShow);


let swiper = new Swiper(".project-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,  // Enable looping for infinite scroll
  speed: 800,  // Set speed for smooth transition
});
// Section 7 Accordion
let accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        // Toggle the active class
        this.classList.toggle('active');

        // Select the corresponding content
        let content = this.nextElementSibling;

        // Toggle between showing and hiding the content using maxHeight
        if (content.style.maxHeight) {
            content.style.maxHeight = null;  // Hide content
        } else {
            content.style.maxHeight = content.scrollHeight + "px";  // Show content
        }
    });
});

