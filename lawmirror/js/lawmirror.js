$(document).ready(function(){

  // navbar mobile menu
  var navbar = $('#js-navbar');
  var navbarOpen = $('#hamburger');
  var navbarOverlay = $('.navbar-bgoverlay');
  var navbarClose = $('#navbar-close');

  // open navbar
  navbarOpen.on("click", function(){
    navbar.addClass('is-open');
    navbarOverlay.show().animate({opacity: 1}, 350);
  });

  // close navbar
  navbarClose.on("click", function(){
    navbar.removeClass('is-open');
    navbarOverlay.animate({opacity: 0}, 350);
  });

});