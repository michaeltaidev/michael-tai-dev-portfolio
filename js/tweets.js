$('.tweets').slick({
  dots: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});