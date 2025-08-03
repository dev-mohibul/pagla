// ----- PORTFOLIO FILTER ----- //
$(window).on('load', function() {
    // Filter 
    //PORTFOLIO FILTER 
    var $container = $('.projects-wrapper');
    var $filter = $('#filter');
    // Initialize isotope 
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    // Filter items when filter link is clicked
    $filter.find('a').click(function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
    
});