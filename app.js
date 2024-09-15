//navbar js
let navMenu = document.getElementById("nav_menu"),
      navShow = document.getElementById("nav_listIcon"),
      navClose = document.getElementById("nav_close")
 
if(navShow){
    navShow.addEventListener('click',() =>{
        navMenu.classList.toggle.display = "none"
        navClose.classList.toggle.display = "block"
        navMenu.classList.add('show-menu')
    })
} 
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
        console.log(navClose)
    })
}  
/* section_2 carousel */
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
const carousel = document.querySelector('.carousel');
const intervalTime = 3000; // 3 seconds
let slideInterval;

// Function to show the current slide
function showSlide(index) {
  const offset = -index * 100;
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



/* section_4 image slider */
let scrollContainer = document.querySelectorAll(".project_box .project");

/* scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.computedStyleMap.scrollBehavior = "smooth";
}); */

/* section 7 */
// Select all accordion headers
let accordionHeaders = document.querySelectorAll('.accordion-header');

// Add click event listener to each header
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    // Toggle the active class
    this.classList.toggle('active');

    // Select the corresponding content
    let content = this.nextElementSibling;

    // Toggle between showing and hiding the content
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});