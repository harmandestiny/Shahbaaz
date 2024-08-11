

$(document).ready(function(){
  $('.video-slider1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
    responsive: [
      {
        breakpoint: 768, // Adjust this value to the maximum width of your mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
});
$(document).ready(function(){
  $('.video-slider2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow:".prev-btn2",
  nextArrow:".next-btn2",
  responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
]
})
})
document.getElementById('hamburger').addEventListener('click', function () {
  var navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active')
});
