$(function() {

    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggel = $("#navToggel");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    }) 
    
    function checkScroll(scrollPos, introH) { 

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elemetOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate( {
            scrollTop: elemetOffset - 65
        }, 700);
    });

    // Nav Toggel
    navToggel.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");


    });

    // Reviwes: https://kenwheeler.github.io/slick/
    let slider = $("#reviewSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots:true
    });




});