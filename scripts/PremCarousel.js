$(document).ready(function () {
  let currentSlideIndex = 0;
  let intervalId; // Variable to store the interval ID for later clearing

  function showSlides() {
    let slides = $(".carousel-item");
    let indicators = $(".indicator");

    slides.hide();
    indicators.removeClass("active");

    currentSlideIndex++;

    if (currentSlideIndex > slides.length) {
      currentSlideIndex = 1;
    }

    $(slides[currentSlideIndex - 1]).show();
    $(indicators[currentSlideIndex - 1]).addClass("active");
  }

  function startSlideShow() {
    intervalId = setInterval(function () {
      showSlides();
    }, 3000); // Change slide every 3 seconds
  }

  function stopSlideShow() {
    clearInterval(intervalId);
  }

  window.changeSlide = function (direction) {
    stopSlideShow();

    let slides = $(".carousel-item");
    let indicators = $(".indicator");

    slides.hide();
    indicators.removeClass("active");

    if (direction === "prev") {
      currentSlideIndex = currentSlideIndex === 1 ? slides.length : currentSlideIndex - 1;
    } else {
      currentSlideIndex = currentSlideIndex === slides.length ? 1 : currentSlideIndex + 1;
    }

    $(slides[currentSlideIndex - 1]).show();
    $(indicators[currentSlideIndex - 1]).addClass("active");

    startSlideShow(); // Restart automatic slideshow after manual change
  };

  window.currentSlide = function (index) {
    stopSlideShow();

    currentSlideIndex = index - 1; // Adjust the index to match array indexing (starting from 0)
    showSlides();

    startSlideShow(); // Restart automatic slideshow after manual change
  };

  // Initial call to start the slideshow
  startSlideShow();

  // Enable carousel indicators to navigate to specific slides
  $(".indicator").on("click", function () {
    let slideIndex = $(this).index() + 1;
    currentSlide(slideIndex);
  });
});
