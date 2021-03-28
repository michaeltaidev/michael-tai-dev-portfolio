$(document).ready(function () {
  // Open menu
  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  // Close menu
  $('.top-nav .nav-link').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  // Close menu on mouse wheel scroll down
  $(window).bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta < 0) {
      $('.menu-toggler').removeClass('open');
      $('.top-nav').removeClass('open');
    }
  });

  // Close menu on down arrow or esc key
  $(document).keydown(function (e) {
    if (e.keyCode == 40 || e.keyCode == 27) {
      $('.menu-toggler').removeClass('open');
      $('.top-nav').removeClass('open');
    }
  });

  // Page scroll navigation
  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 800);
  });
});
