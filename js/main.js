$(document).ready(function() {
    "use strict";

    $(".header_block_burger").click(function() {
        $(this).toggleClass("active");
        $(".dropdown").toggleClass("active");
    });

    $(".accordion_list_item_head").click(function() {
        $(this).parent().toggleClass("active");
        $(this).parent().find(".accordion_list_item_body").slideToggle();
    });

    $(".footer_btn").click(function() {
        $('html,body').animate({scrollTop:0}, 1000);
    });

    $('.main_mob_wrap_slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    let rotationAngle = 0;
    
    $('.main_desktop_mid_slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    }).on('beforeChange', function() {
        rotationAngle += 90;
        $('.main_preloader').css({
            'transform': `rotate(${rotationAngle}deg)`,
            'transition': 'transform 0.5s ease'
        });
    });

    $(".instruction_wrap_title").click(function() {
        $(".instruction_wrap").toggleClass("active");
        $(".instruction_wrap_body").slideToggle();
    });

    $('.advantage').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        centerMode: true,
        variableWidth: true
    });

    $('.home_review_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        centerMode: true,
        variableWidth: true
    });
 
});