// When document is ready
$(document).ready(function() {
// Shrink/collapse Navbar when scrolling down scroll-function
  $(document).scroll(function() {
// if user has scrolled down greater than 100 pixels, then
    if ($("#mainNav").offset().top > 100) {
// Add the .navbar-shrinnk class
      $("#mainNav").addClass("navbar-shrink");
// If user is 100 pixels or less from the top of the page, then
    } else {
// Remove the .navbar-shrink class
      $("#mainNav").removeClass("navbar-shrink");
    }
  });


});
