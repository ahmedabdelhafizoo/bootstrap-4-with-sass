$(document).ready(function () {
    // ============================================  Navbar ====================================
    var menuClickd = false,
        menu = $(".nav"),
        menuIcon = $(".menu-icon");

    function menuToggle() {
        menuIcon.toggleClass("open");
        menu.toggleClass("open");
    }
    menuIcon.click(function () {
        if (menuClickd == false) {
            menuClickd = true;
            menuToggle();
            setTimeout(function () {
                menuClickd = false;
            }, 600);
        }
    });
    //close menu if the click not closest to header
    $(document).click(function (e) {
        if (menu.hasClass("open") & !e.target.closest("header")) {
            menuToggle();
        }
    });
    //close menu if esc button clicked
    $(document).keydown(function (e) {
        if (menu.hasClass("open") & e.keyCode == 27) {
            menuToggle();
        }
    });

    //sticky header
    $(window).on("scroll", function () {
        var header = $("header");
        if ($(this).scrollTop() > header.outerHeight() * 3) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    });
    //add active class to nav links
    menu.find("li > a").click(function () {
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
        $("body, html").animate({
            scrollTop: $($(this).attr("href")).offset().top - 50
        }, 700);
    });
    $(window).on("scroll", function () {
        $(".section").each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 80) { // -80 section padding
                //find link that href == the section id
                menu.find("li > a[href=\"#" + $(this).attr("id") + "\"" + "]").addClass("active").parent().siblings().find("a").removeClass("active");
            }
        });
    });

    // ============================================  search box ====================================
    $("header .fa-search").click(function (e) {
        e.preventDefault();
        $(".search-box").toggleClass("open");
    });
    $(".search-box").click(function () {
        $(this).toggleClass("open");
    });
    $(".search-box form").click(function (e) {
        e.stopPropagation();
    });

    // ============================================ animated sections ====================================
    $(window).on("scroll", function () {
        $(".animated").each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - $(this).parent().outerHeight()) {
                $(this).addClass("fadeInUp");
            }
        });
    });
});
// ==================================== loading screen ====================================
window.onload = () => {
    "use strict";
    $(".filter-buttons button.active").click();
    $(".double-bounce1").fadeOut(1000, function () {
        $(this).parent().parent().fadeOut(500).toggleClass("d-flex");
    });
};