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
 
});