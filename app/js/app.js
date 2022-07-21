import jQuery from 'jquery'

import Swiper from 'swiper/bundle'

const secondarySlider = new Swiper(".section-slider__swiper--secondary", {

    slidesPerView: "auto",
    allowTouchMove: false,

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
})

const mainSlider = new Swiper(".section-slider__swiper--main", {

    loop: true,
    speed: 700,
    slidesPerView: "auto",
    navigation: true,
    allowTouchMove: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    pagination: {
        el: ".swiper__pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper__next",
        prevEl: ".swiper__prev",
    },

    thumbs: {
        swiper: secondarySlider,
    },
})

$(".swiper__prev, .swiper__next").on("click", function(){
    $(".swiper__progress").removeClass("run")
    setTimeout(() => {
        $(".swiper__progress").addClass("run")
    }, 1);
})