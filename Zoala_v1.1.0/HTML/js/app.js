/* Template Name: Zoala - One Page HTML5 Template
   Author: Themesdesign
   Version: 1.0.0
   Created: Oct 2019
   File Description: Main JS file of the template
*/

(function ($) {

    'use strict';

    // STICKY
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });

    // SmoothLink
    $('.navbar-nav a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // scrollspy
    $("#navbarCollapse").scrollspy({
        offset: 70
    });

    // Carousel
    $("#owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 3,
        itemsDesktop: [1199, 3],
        itemstablet: [768, 1],
        itemsDesktopSmall: [768, 1],
        stopOnHover: true,
        navigation: true,
    });

    // video
    $('.video-play-icon, .video-play-icon-trigger').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // magnificPopup
    $('.mfp-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
                // Will preload 0 - before current, and 1 after the current image 
        }
    });

    // typid
    $(".element").each(function() {
        var $this = $(this);
        $this.typed({
            strings: $this.attr('data-elements').split(','),
            typeSpeed: 100, // typing speed
            backDelay: 3000 // pause before backspacing
        });
    });
})(jQuery)