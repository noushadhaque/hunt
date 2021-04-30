// ===================banner slick====================
$('.banner-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
      
// ===================banner slick====================

// ===================port venobox======================
$(document).ready(function(){
  $('.venobox').venobox(); 
});
// ===================port venobox======================

// ===================service slick=====================
$('.service-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: 0,
  prevArrow: '<i class="fa fa-chevron-up up" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-chevron-down down" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        vertical: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
      }
    }
  ]
});
// ===================service slick=====================
// ===================team slick one=====================
$('.image-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: 0,
  prevArrow: '<i class="fa fa-chevron-up up" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-chevron-down down" aria-hidden="true"></i>',
  asNavFor: '.text-slider',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        vertical: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // centerMode: false,
        // vertical: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        // dots: false,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // vertical: false,
      }
    }
  ]
  
});
// ===================team slick one=====================
// ===================team slick two=====================
$('.text-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.image-slider',
  fade: false,
  vertical: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        vertical: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // centerMode: false,
        // vertical: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        // dots: false,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // vertical: false,
      }
    }
  ]

});
// ===================team slick two=====================

// ===================counter up=========================
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// ===================counter up=========================
// ===================member part slick=========================
$('.member-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
      }
    }
  ]
});
// ===================member part slick=========================
// ===================market part slick=========================
$('.market-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
// ===================market part slick=========================









