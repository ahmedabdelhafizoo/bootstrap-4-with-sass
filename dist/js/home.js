$(document).ready(function () {
    // ============================================  main slider ====================================
    $('.main-slider').slick({
        autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        nextArrow: "<div class='next-arrow d-none d-md-block'><i class='fa fa-chevron-right'></i></div>",
        prevArrow: "<div class='pev-arrow d-none d-md-block'><i class='fa fa-chevron-left'></i></div>",
    }).slickAnimation();

    // ==================================== testimonials slider ====================================
    $('.testimonials-slider').slick({
        arrows: false,
        dots: true,
    });
    // ==================================== portfolio  filter ====================================
    // init Isotope portfolio filter
    var $grid = $('.portfolio-content').isotope();

    // bind filter button click
    $('.filter-buttons').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    //add class active
    $(".filter-buttons button").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    // ==================================== magnific popup ====================================
    $('.portfolio .work').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        }
    });
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        fixedContentPos: true
    });
});