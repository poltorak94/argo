$(function () {
    new WOW().init();
});
$(document).ready(function () {
    //main slider
    const heroSwiper = new Swiper(".hero__swiper", {
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            clickable: true,
            el: ".hero .slider-pagination__items",
        },
    });

    //слайдер проектов
    const projectsSwiper = new Swiper(".projects__slider", {
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            clickable: true,
            el: ".projects .swiper__pagination",
        },
    });

    //слайдер товаров
    const productsSwiper = new Swiper(".production__swiper", {
        loop: true,
        navigation: {
            nextEl: ".production__right",
            prevEl: ".production__left",
        },
    });

    //слайдер клиентов
    const clientsSwiper = new Swiper(".clients__swiper", {
        observer: true,
        observeParents: true,
        spaceBetween: 48,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        speed: 3500,
        autoplay: {
            delay: 10,
            disableOnInteraction: false,
        },
    });

    //счетчик
    const about = $(".about");
    if (about.length) {
        let countsBox = $(".about").offset().top;

        $(window).on("scroll", function () {
            if ($(window).scrollTop() >= countsBox / 2) {
                $(".about__advantages-item-value").each(function () {
                    $(this)
                        .prop("Counter", 0)
                        .animate(
                            {
                                Counter: $(this).attr("data-num"),
                            },
                            {
                                duration: 4000,
                                easing: "swing",
                                step: function (now) {
                                    $(this).text(
                                        Math.ceil(now).toLocaleString()
                                    );
                                },
                            }
                        );
                });
            }
        });
    }

    //хедер
    let header = $(".header");
    let headerHeight = header.height() + 20;
    if ($(window).scrollTop() >= headerHeight) {
        header.addClass("header--scroll");
    }
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= headerHeight) {
            header.addClass("header--scroll");
        } else {
            header.removeClass("header--scroll");
        }
    });

    $(".header__nav-item--dropdown").on("mouseenter", function () {
        let dropDown = $(this).find(".header__dropdown-menu");
        dropDown.fadeIn("fast");
    });

    $(".header__nav-item--dropdown").on("mouseleave", function () {
        let dropDown = $(this).find(".header__dropdown-menu");
        dropDown.fadeOut("fast");
    });

    //modal
    $(
        ".header__nav-callback, .production__order, .mob-block__callback, .consult-modal"
    ).on("click", function (e) {
        e.preventDefault();
        $("body").trigger("open.modal");
    });

    $("body").on("open.modal", function () {
        $(".modal").removeClass("modal--hidden");
        $(".modal").arcticmodal({
            afterClose: function (data, el) {
                $(".modal").addClass("modal--hidden");
            },
        });
    });

    //Маска телефон
    $(".input-tel").mask("+7 (999) 999-99-99");

    //mobile menu
    $(".header__burger").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".header").toggleClass("header--opened");
        $(this).closest(".header").addClass("header--scroll");
        $(".mob-overlay").fadeToggle();
    });

    if ($(window).width() < 1366) {
        $(".map__container").scrollbar().parent().addClass("scrollbar-inner");
    }

    //шаги
    $(".steps__link").on("click", function (e) {
        e.preventDefault();
        let item = $(this).closest(".steps__item");
        let nextItem = item.next();
        nextItem.addClass("steps__item--active");
        nextItem.find(".steps__inner").slideDown();
        $(this).remove();
        nextItem.removeClass("steps__item--next");
        nextItem.next().addClass("steps__item--next");
    });
    $("body").on("click", ".steps__item--next .steps__title", function (e) {
        e.preventDefault();
        let item = $(this).closest(".steps__item");
        let nextItem = item.next();
        item.removeClass("steps__item--next");
        item.addClass("steps__item--active");
        nextItem.addClass("steps__item--next");
        item.find(".steps__inner").slideDown();
        $(this).find(".steps__link-holder").remove();
        item.prev().find(".steps__link-holder").remove();
    });

    $(".geography__btn").on("mouseover", function () {
        $(this).closest(".geography").addClass("geography--active");
    });
    $(".geography__btn").on("mouseleave", function () {
        $(this).closest(".geography").removeClass("geography--active");
    });

    //табы проектирование
    $(".step-tabs__nav-item").on("click", function (e) {
        e.preventDefault();
        let container = $(this).closest(".step-tabs__nav");
        container
            .find(".step-tabs__nav-item")
            .removeClass("step-tabs__nav-item--active");

        $(this).addClass("step-tabs__nav-item--active");

        let navId = $(this).attr("data-id");

        let tabs = container.closest(".step-tabs");
        tabs.find(".step-tabs__item").each(function () {
            $(this).fadeOut();
            let tabId = $(this).attr("data-id");

            if (tabId == navId) {
                $(this).fadeIn();
            }
        });
    });

    const design = $(".design");
    if (design.length) {
        $(".design__images").twentytwenty();
    }

    //seo-text

    $(".seo-text__btn").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".seo-text").find(".seo-text__hidden").slideToggle();

        $(this).toggleClass("seo-text__btn--active");
        if ($(this).hasClass("seo-text__btn--active")) {
            $(this).text("Скрыть");
        } else {
            $(this).text("Читать далее");
        }
    });
});
