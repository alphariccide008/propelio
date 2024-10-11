// Slider functionality
const track = document.querySelector('.slider-track');
const logos = document.querySelectorAll('.partner-logo');
const totalLogos = logos.length;
let scrollAmount = 0;
const slideWidth = 150; // Width of each logo
const gap = 20; // Gap between logos

// Duplicate logos for infinite effect
for (let i = 0; i < totalLogos; i++) {
  const clone = logos[i].cloneNode(true);
  track.appendChild(clone);
}

// Total width for track
const totalWidth = (totalLogos * (slideWidth + gap)) * 2; // Double for infinite scroll
track.style.width = `${totalWidth}px`;

// Function to move the slide
function moveSlide(direction) {
  scrollAmount += direction * (slideWidth + gap); // Slide full width each time

  // Reset when reaching the end
  if (scrollAmount >= totalLogos * (slideWidth + gap)) {
    scrollAmount = 0; // Loop back to start
  } else if (scrollAmount < 0) {
    scrollAmount = (totalLogos * (slideWidth + gap)) - (slideWidth + gap); // Loop back to end
  }

  track.style.transition = 'transform 0.5s ease'; // Smooth transition
  track.style.transform = `translateX(-${scrollAmount}px)`; // Apply the transform
}

// Continuous scrolling function
function slide() {
  moveSlide(1); // Continuously slide to the right
}

// Start continuous sliding
let sliderInterval = setInterval(slide,900); // Set a longer interval for smoother control

// Event listeners for slider buttons
const slideLeftButton = document.querySelector('.slider-button.prev');
const slideRightButton = document.querySelector('.slider-button.next');

slideLeftButton.addEventListener('click', () => {
  clearInterval(sliderInterval); // Pause automatic sliding
  moveSlide(-1); // Slide left
  restartSlider(); // Restart automatic sliding
});

slideRightButton.addEventListener('click', () => {
  clearInterval(sliderInterval); // Pause automatic sliding
  moveSlide(1); // Slide right
  restartSlider(); // Restart automatic sliding
});

// Function to restart automatic sliding
function restartSlider() {
  sliderInterval = setInterval(slide, 1000); // Restart automatic sliding
}

// Slider hover effect
const sliderTrack = document.querySelector('.slider-track');
sliderTrack.addEventListener('mouseenter', () => {
  clearInterval(sliderInterval); // Pause on hover
});

sliderTrack.addEventListener('mouseleave', () => {
  restartSlider(); // Resume automatic sliding
});
