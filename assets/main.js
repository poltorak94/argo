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
  let countsBox = $(".about").offset().top;

  //хедер
  let header = $(".header");
  let headerHeight = header.height() + 20;
  if ($(window).scrollTop() >= headerHeight) {
    header.addClass("header--scroll");
  }
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
                $(this).text(Math.ceil(now).toLocaleString());
              },
            }
          );
      });
    }

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
      $("body").trigger("open.modal");
    }
  );
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
});
