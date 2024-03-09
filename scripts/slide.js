const slider = document.querySelector('.testimonial-content');
const sliderInner = document.querySelector('.slide');
const slides = document.querySelectorAll('.slide li');
const dots = document.querySelectorAll('.carousel_indicator');
const previousArrow = document.querySelector('#prevButton');
const nextArrow = document.querySelector('#nextButton');
const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

function updateSliderWidth() {
  const sliderWidth = slider.offsetWidth;
  sliderInner.style.width = `${sliderWidth * slides.length}px`;
  slides.forEach((slide) => {
    slide.style.width = `${sliderWidth}px`;
  });
  goToSlide(currentIndex);
}

function goToSlide(index) {
  if (index < 0 || index >= slides.length) {
    return;
  }
  currentIndex = index;
  const slideWidth = slides[currentIndex].offsetWidth;
  const translateX = -slideWidth * currentIndex;
  sliderInner.style.transform = `translateX(${translateX}px)`;

  // Update active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle('current-slide', i === currentIndex);
  });

  // Show/hide arrows based on current index
  previousArrow.style.display = currentIndex === 0 ? 'none' : 'block';
  nextArrow.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
}

function goToPreviousSlide() {
  goToSlide(currentIndex - 1);
}

function goToNextSlide() {
  goToSlide(currentIndex + 1);
}

previousArrow.addEventListener('click', goToPreviousSlide);
nextArrow.addEventListener('click', goToNextSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

// Touch event handling
slider.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipeGesture();
});

function handleSwipeGesture() {
  const swipeThreshold = 50;
  const deltaX = touchEndX - touchStartX;

  if (deltaX > swipeThreshold) {
    goToPreviousSlide();
  } else if (deltaX < -swipeThreshold) {
    goToNextSlide();
  }
}

// Initialize slider
updateSliderWidth();

// Update slider on window resize
window.addEventListener('resize', updateSliderWidth);
