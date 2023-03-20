$(".header__rateYo").rateYo({
  rating: 3.5,
  precision:2,
  spacing: "5px",
  starSvg: '<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3662 1.82936C13.5032 -0.255461 16.4968 -0.255466 17.6338 1.82936L19.9256 6.03174C20.3571 6.82292 21.1214 7.37822 22.0072 7.5441L26.7121 8.42517C29.0463 8.86228 29.9713 11.7093 28.3399 13.4349L25.0514 16.9132C24.4323 17.5681 24.1404 18.4666 24.2563 19.3603L24.8723 24.1072C25.1779 26.4621 22.756 28.2217 20.6107 27.2034L16.2865 25.1507C15.4724 24.7642 14.5276 24.7642 13.7135 25.1507L9.38927 27.2034C7.24399 28.2217 4.82214 26.4621 5.12772 24.1072L5.74367 19.3603C5.85964 18.4666 5.5677 17.5681 4.94858 16.9132L1.66009 13.4349C0.0286615 11.7093 0.953722 8.86228 3.28786 8.42517L7.99278 7.5441C8.87858 7.37822 9.64288 6.82293 10.0744 6.03174L12.3662 1.82936Z"/></svg>'
  
});
$(".header__rateYo").rateYo("option", "normalFill", "#D7D1C7");
  $(".header__rateYo").rateYo("option", "ratedFill", "#FFB648");
  var normalFill = $(".header__rateYo").rateYo("option", "precision");
  $(".header__rateYo").rateYo("option", "precision", 3);


  $(function () {
    var mixer = mixitup('.blog__list');
  })

  $('.customers__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    appendDots: $('.customers__dots'),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          
          slidesToShow: 1
        }
      }
    ]
  })
 $('.customers__arrow-prew').on('click', function(e) {
    e.preventDefault()
    $('.customers__slider').slick('slickPrev')
  })
  $('.customers__arrow-next').on('click', function(e) {
    e.preventDefault()
    $('.customers__slider').slick('slickNext')
  });
  // $('.questions__item-link').on('click', function(e){
  //   e.preventDefault()
  //   $(this).toggleClass('questions__item-link--active')
  //   $(this).children('.questions__item-text').slideToggle()
  // }
  // )
  $('.questions__item-link').on('click', function(e) {
    e.preventDefault()
    if ($(this).hasClass('questions__item-link--active')) {
      $(this).removeClass('questions__item-link--active')
      $(this).children('.questions__item-text').slideUp()
    } else {
      $('.questions__item-link').removeClass('questions__item-link--active')
      $('.questions__item-text').slideUp()
      $(this).addClass('questions__item-link--active')
      $(this).children('.questions__item-text').slideDown()
    }
  })
 
  let map;

  function init() {var myMap = new ymaps.Map("map", {center: [40.714606, -74.002800], zoom: 12})}

  
  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0);
  $('.burger, .overlay').on('click', function(e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top-open')
    $('.overlay').toggleClass('overlay--show')
   
  })
  $(".header__nav a").on("click", function(e) {
    e.preventDefault()
    var id  = $(this).attr('href'),
    top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })
  
