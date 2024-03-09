$(document).ready(function () {
  // Run this code when the document is ready

  // Store the header in a variable
  var header = $('header');

  // Run this function on scroll
  $(window).scroll(function () {
    // Check the scroll position
    var scrollPosition = $(window).scrollTop();

    // Add or remove the 'scrolled' class based on the scroll position
    if (scrollPosition > 50) {
      header.addClass('scrolled');
    } else {
      header.removeClass('scrolled');
    }
  });
});
