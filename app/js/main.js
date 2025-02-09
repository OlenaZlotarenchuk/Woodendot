$(document).ready((function() {
    $(".reviews__slider").slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        easing: 'easy-out',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '168px'
                }
        },
        {
            breakpoint: 648,
                settings: {
                    slidesToShow: 1,
                    // variableWidth: true
                }
        }
        ]
    
    });

    $(".header__burger").click(function(event) {
        $(".header__burger,.nav").toggleClass("active");
        $('body').toggleClass('lock');
   
      });

}
));

var typed = new Typed (".type-text", {
    strings: ["The team from Woodendot has displayed utmost professionalism from order to deliver and customer support. We placed an order to the UK and would definitely recommend friends to order from Woodendot!", "Everything is designed. Few things are designed well."],
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 1000,
    loop: true
});


