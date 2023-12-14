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

    //cлайдер страница дизайн
    const designSlider = new Swiper(".design-step__group-slider", {
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        loop: true,
        navigation: {
            nextEl: ".design-right",
            prevEl: ".design-left",
        },
        pagination: {
            clickable: true,
            el: ".design-step__group-slider .swiper__pagination",
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
    $(".header__nav-callback, .production__order, .mob-block__callback").on(
        "click",
        function (e) {
            e.preventDefault();
            $(".modal--main").removeClass("modal--hidden");
            $(".modal--main").arcticmodal({
                afterClose: function (data, el) {
                    $(".modal--main").addClass("modal--hidden");
                },
            });
        }
    );

    $(".plan-modal").on("click", function (e) {
        e.preventDefault();
        $(".modal--plan").removeClass("modal--hidden");
        $(".modal--plan").arcticmodal({
            afterClose: function (data, el) {
                $(".modal--plan").addClass("modal--hidden");
            },
        });
    });
    $(".matrix-modal").on("click", function (e) {
        e.preventDefault();
        $(".modal--matrix").removeClass("modal--hidden");
        $(".modal--matrix").arcticmodal({
            afterClose: function (data, el) {
                $(".modal--matrix").addClass("modal--hidden");
            },
        });
    });
    $(".marketing-modal").on("click", function (e) {
        e.preventDefault();
        $(".modal--marketing").removeClass("modal--hidden");
        $(".modal--marketing").arcticmodal({
            afterClose: function (data, el) {
                $(".modal--marketing").addClass("modal--hidden");
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
        item.closest(".steps")
            .find(".steps__item")
            .removeClass("steps__item--active");
        item.find(".steps__inner").slideUp();
        let nextItem = item.next();
        nextItem.addClass("steps__item--active");
        nextItem.find(".steps__inner").slideDown();
        $(this).hide();
        nextItem.removeClass("steps__item--next");
        nextItem.next().addClass("steps__item--next");
        nextItem.find(".steps__link").show();
    });

    $(".steps__title, .steps__num").on("click", function (e) {
        e.preventDefault();
        let item = $(this).closest(".steps__item");

        if (item.hasClass("steps__item--active")) {
            return;
        } else {
            item.closest(".steps")
                .find(".steps__item")
                .removeClass("steps__item--active");
            item.addClass("steps__item--active");
            item.closest(".steps").find(".steps__inner").slideUp();
            item.find(".steps__inner").slideDown();
            item.find(".steps__link").show();
        }
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
            $(this).hide();
            let tabId = $(this).attr("data-id");

            if (tabId == navId) {
                $(this).show();
            }
        });
    });

    $(".step-tabs__mob-item-title").on("click", function () {
        let item = $(this).closest(".step-tabs__mob-item");
        let container = $(this).closest(".step-tabs__mob");

        if (!item.hasClass("step-tabs__mob-item--active")) {
            container
                .find(".step-tabs__mob-item")
                .removeClass("step-tabs__mob-item--active");

            item.addClass("step-tabs__mob-item--active");
            container.find(".step-tabs__mob-item-inner").slideUp();
            item.find(".step-tabs__mob-item-inner").slideDown();
        }
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
