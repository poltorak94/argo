$(document).ready(function () {
    $(".catalog-tabs__nav-item").on("click", function (e) {
        e.preventDefault();

        let navId = $(this).attr("data-id");

        $(".catalog-tabs__nav-item").removeClass(
            "catalog-tabs__nav-item--active"
        );

        $(this).addClass("catalog-tabs__nav-item--active");

        $(".catalog-tabs__group").addClass("catalog-tabs__group--hidden");
        $(".catalog-tabs__group").each(function () {
            let tabId = $(this).attr("data-id");

            if (tabId == navId) {
                $(this).removeClass("catalog-tabs__group--hidden");
            }
        });
    });

    //форма
    $(".catalog-form__file-button, .change-file").on("click", function (e) {
        e.preventDefault();
        $(".catalog-form__file-input").click();
    });

    $(".catalog-form__file-input").change(function () {
        var filename = $(this).val().split("\\").pop();

        $(this).closest(".catalog-form").addClass("catalog-form--change");
        $(this).closest(".modal__form").addClass("modal__form--change");
        $(".catalog-form__files-select span").text(filename);
    });

    $(".remove-file").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".catalog-form").removeClass("catalog-form--change");
        $(this).closest(".modal__form").removeClass("modal__form--change");
    });

    $(".catalog-form__submit").on("click", function (e) {
        e.preventDefault();
    });

    $(".catalog-form__submit").on("click", function (e) {
        e.preventDefault();
        $(".modal--thanks").removeClass("modal--hidden");
        $(".modal--thanks").arcticmodal({
            afterClose: function (data, el) {
                $(".modal--thanks").addClass("modal--hidden");
            },
        });
    });

    const categorySlider = new Swiper(".category-projects__slider", {
        spaceBetween: 16,
        slidesPerView: 2,
        pagination: {
            clickable: true,
            el: ".category-projects .swiper__pagination",
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            // when window width is >= 990
            990: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });

    $(".category-tags__show-more").on("click", function () {
        $(this)
            .closest(".category-tags__group")
            .addClass("category-tags__group--show");
    });

    $(".category-tags__hide").on("click", function () {
        $(this)
            .closest(".category-tags__group")
            .removeClass("category-tags__group--show");
    });

    $(".category-tags__title--mob").on("click", function () {
        $(this)
            .closest(".category-tags__group")
            .find(".category-tags__holder")
            .slideToggle();

        $(this).toggleClass("category-tags__title--mob--active");
    });

    const productSlider = new Swiper(".product-slider", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".product-slider__nav--next",
            prevEl: ".product-slider__nav--prev",
        },
        pagination: {
            clickable: true,
            el: ".product .swiper__pagination",
        },
    });

    document.querySelectorAll(".tip").forEach(function (el) {
        tippy(el, {
            content: el.getAttribute("data-template"),
            interactive: true,
            placement: "bottom",
        });
    });

    $(".product-table__nav-item").on("click", function (e) {
        e.preventDefault();

        let navId = $(this).attr("data-id");

        $(".product-table__nav-item").removeClass(
            "product-table__nav-item--active"
        );

        $(this).addClass("product-table__nav-item--active");

        $(".product-table__inner").addClass("product-table__inner--hidden");
        $(".product-table__inner").each(function () {
            let tabId = $(this).attr("data-id");

            if (tabId == navId) {
                $(this).removeClass("product-table__inner--hidden");
            }
        });
    });

    $(".product-main-button").on("click", function (e) {
        e.preventDefault();
        $(".modal--product").removeClass("modal--hidden");
        $(".modal--product").arcticmodal({
            afterClose: function (data, el) {
                $(".modal--product").addClass("modal--hidden");
            },
        });
    });

    const furniture = $(".furniture");
    if (furniture.length || $(".own-production").length) {
        const furnitureSlider = new Swiper(".furniture-slider", {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".furniture__right",
                prevEl: ".furniture__left",
            },
            pagination: {
                clickable: true,
                el: ".furniture-slider .swiper__pagination",
            },
        });

        const swipers = document.querySelectorAll(
            ".furniture-gallery__box-slider"
        );
        for (let i = 0; i < swipers.length; i++) {
            const swiper = swipers[i];
            new Swiper(swiper, {
                loop: true,
                pagination: {
                    clickable: true,
                    el: swiper.querySelector(".swiper__pagination"),
                },
            });
        }
    }

    $(".furniture-video__play").on("click", function (e) {
        e.preventDefault();
        let container = $(this).closest(".furniture-video");
        container.find(".furniture-video__cover").hide();
        container.find("iframe").show();
    });

    $(".furniture-gallery__item").on("click", function (e) {
        e.preventDefault();
        $(".furniture-gallery__item").removeClass(
            "furniture-gallery__item--active"
        );
        $(this).addClass("furniture-gallery__item--active");
        let navId = $(this).attr("data-id");
        $(".furniture-gallery__tab").hide();

        $(".furniture-gallery__tab").each(function () {
            let tabId = $(this).attr("data-id");
            if (tabId == navId) {
                $(this).show();
            }
        });
    });

    if ($(".product").length) {
        Fancybox.bind("[data-fancybox]", {});
    }

    if ($(".furniture").length) {
        Fancybox.bind("[data-fancybox]", {
            Thumbs: false,
        });
    }

    if ($(".project-page").length) {
        Fancybox.bind("[data-fancybox]", {
            Thumbs: false,
        });
    }
    $(".services-nav__item").on("click", function (e) {
        e.preventDefault();
        $(".services-nav__item").removeClass("services-nav__item--active");
        $(this).addClass("services-nav__item--active");

        let navId = $(this).attr("data-id");
        $(".services-tab").removeClass("services-tab--visible");

        $(".services-tab").each(function () {
            let tabId = $(this).attr("data-id");
            if (tabId == navId) {
                $(this).addClass("services-tab--visible");
            }
        });
    });

    $(".production-slider").each(function (i) {
        i++;
        var i = new Swiper(this, {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: $(this).parent().find(".furniture__right")[0],
                prevEl: $(this).parent().find(".furniture__left")[0],
            },
            breakpoints: {
                320: {
                    pagination: {
                        clickable: true,
                        el: $(this).parent().find(".swiper__pagination")[0],
                    },
                },
                768: {
                    pagination: false,
                },
            },
        });
    });
});
