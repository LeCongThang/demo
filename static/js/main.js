function Helper(){
    var methods = this;

    methods.initSlickSlider = function(){
        $(".regular1").not('slick-initialized').slick({
            dots: false,
            infinite: true,
            speed: 900,
            prevArrow: false,
            nextArrow: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

            ]
        })

        $(".regular2").not('slick-initialized').slick({
            dots: true,
            infinite: false,
            speed: 900,
            prevArrow: false,
            nextArrow: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

            ]
        });

        $(".regular3").not('slick-initialized').slick({
            dots: true,
            infinite: false,
            speed: 900,
            prevArrow: false,
            nextArrow: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

            ]
        });

        $(".regular4").not('slick-initialized').slick({
            dots: false,
            infinite: false,
            speed: 900,
            prevArrow: false,
            nextArrow: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

            ]
        });

        $(".regular5").not('slick-initialized').slick({
            dots: false,
            infinite: false,
            speed: 900,
            prevArrow: false,
            nextArrow: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }

            ]
        });

    }
    

    methods.initToTop = function(){
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 50) {
                $('#top').fadeIn("fast");   
            } else {
                $('#top').fadeOut("fast");  
            }
        });
        $('#top').click(function() {        
            $('body,html').animate({
                scrollTop : 0               
            }, 500);
        });
    }


    methods.initFixTop = function(){
        jQuery(function($) {
            function fixDiv() {
                if($(window).width() > 992){
                    var $cache = $('#menu');
                    var $addget = $('#fixedmobile');
                    if ($(window).scrollTop() > 42)
                    {
                        // $('#fixed-mobile').removeClass('fix-mobile-ipad');
                        $cache.addClass('getFixed-1');

                    }
                    else{
                        // $('#fixedmobile').addClass('fix-mobile-ipad');
                        $cache.removeClass('getFixed-1');
                    }
                }
            }

            $(window).scroll(fixDiv);
            fixDiv();
            $(window).resize( function(){
                fixDiv();
            });
        });
    }

    methods.initMenu = function(){
        var open = false;
        $('#btn-toggle').on('click' , function(){
            if( open){
                $('#menu').removeClass('open');
                $('#btn-toggle').removeClass('active');
                $('body').removeClass('menu-open');
            }else{
                $('#menu').addClass('open');
                $('#btn-toggle').addClass('active');
                $('body').addClass('menu-open');
            }
            open = !open;
        });
        $('body, html').on('click', function(event){
            var target = $(event.target);
            if( !target.is('#menu , #menu * ,#btn-toggle ,#btn-toggle *, .header-mid, .header-mid *')){
                $('#menu').removeClass('open');
                $('#btn-toggle').removeClass('active');
                $('body').removeClass('menu-open');
                open = false;
            }
        });
        $('#menu .has-submenu .icon-first-submenu').on('click' , function(event){
            event.preventDefault();
            var parent = $(this).parents('.has-submenu');
            $('#menu .has-submenu').not(parent).removeClass('open').find('.submenu-1').slideUp()
            $('#menu .has-submenu').not(parent).find('.has-second-submenu').removeClass('open');
            $('#menu .has-submenu').not(parent).find('.second-submenu').slideUp();
            parent.toggleClass('open').find('.submenu-1').slideToggle();
        });
        $('#menu .has-second-submenu .icon-second-submenu').on('click' , function(event){
            event.preventDefault();
            var parent = $(this).parents('.has-second-submenu');
            $('#menu .has-second-submenu').not(parent).removeClass('open').find('.submenu-2').slideUp();
            parent.toggleClass('open').find('.submenu-2').slideToggle();
        });
    }

    // methods.initSocial = function(){
    //     $("#share").jsSocials({
    //         showLabel: false,
    //         showCount: false,
    //         shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest"]
    //     });
    // }

    methods.initGallery = function(){
        $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});
    }

   
    methods.init = function(){
        methods.initToTop();
        methods.initFixTop();
        methods.initMenu();
        methods.initSlickSlider();
        methods.initGallery();
    }

    return methods;
}

$(function(){
    var helper = new Helper();
    helper.init();
})