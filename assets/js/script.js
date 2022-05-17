$(document).ready(function() {
    //nav bar
    $(".mobile-nav-btn").click(function() {
        $(".nav-links-mobile").toggle(200);
    })

    // main slider
    var MainSlider = $('.main-slider');

    MainSlider.owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.btn-main-slider-next').click(function() {
        MainSlider.trigger('next.owl.carousel');
    })
    $('.btn-main-slider-prev').click(function() {
        MainSlider.trigger('prev.owl.carousel');
    })


    // Product Slider
    $('.product-slider').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // Brand Slider

    var SliderBrand = $('.slider-brand');
    SliderBrand.owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    $('.btn-brand-next').click(function() {
        SliderBrand.trigger('next.owl.carousel');
    })
    $('.btn-brand-prev').click(function() {
        SliderBrand.trigger('prev.owl.carousel');
    })

    // counter 

    let counter = document.querySelector('.counter-content');

    window.onscroll = function() {
            if (window.scrollY >= counter.offsetTop) {
                $('.count').countTo({
                    from: 0,
                    speed: 2000,
                });
            }
        }
        // Products Page Content

    // $('.menu-title').click(function() {
    //     // if (this.) {
    //     //     $('.menu-title i').removeClass('fa-angle-double-right');
    //     //     $('.menu-title i').addClass('fa-angle-double-down');
    //     // } else {
    //     //     $('.menu-title i').removeClass('fa-angle-double-down');
    //     //     $('.menu-title i').addClass('fa-angle-double-right');
    //     // }
    // })

});