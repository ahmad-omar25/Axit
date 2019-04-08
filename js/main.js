$(function () {
    'use strict';
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".navbar-inverse").addClass("scrolled");
        } else {
            $(".navbar-inverse").removeClass('scrolled');
        }
    });
    

    // Tabs Section 

    $('.tab-switch li').click(function () {
        // Add Selected Class To Active Link
        $(this).addClass('selected').siblings().removeClass('selected');
        // Hide All Divs
        $('.tabs .tabs-content > div').hide();
        // Show Div Connected With This Link
        $($(this).data('class')).show();
    });

    // Smooth Scroll To Div

    $('.nav li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#'+ $(this).data('value')).offset().top - 62
        }, 1500);
    });

    $('.navbar-nav li').click(function (){
        $(this).addClass('current').siblings().removeClass('current');
    });
});

