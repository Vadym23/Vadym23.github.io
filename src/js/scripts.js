/* Slider Slick initial */
$(document).ready(function() {
    $('.popup-btn').on('click', function(event) {
        event.preventDefault();
        $('.popup').fadeIn();
    });
    $('.popup-close').on('click', function(event) {
        event.preventDefault();
        $('.popup').fadeOut();
    });
    /* Slider feedback */
    $('.feedback-slider').slick({
        
    });
    /* Slider features */
    $('.features-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              prevArrow: '<button class="prev arrow"></button>',
              nextArrow: '<button class="next arrow"></button>',
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              prevArrow: '<button class="prev arrow"></button>',
              nextArrow: '<button class="next arrow"></button>',
              slidesToScroll: 1
            }
          }
        ]
      });
    });   