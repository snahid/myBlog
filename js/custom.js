const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}


$(document).ready(function () {

    //Owl Carousel //
    jQuery('.owl-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [jQuery('.owl-navigation .owl-nav-prev'), jQuery('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // Scroll Top //
    jQuery('.scroll-up').click(function () {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 2000);
    });

    // AOS Instance //
    AOS.init();
});