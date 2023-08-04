import './index.html';
import Swiper from 'swiper';
import {Autoplay, Navigation} from "swiper/modules";
// new modules
import 'swiper/scss';
import './index.scss';

// use modules
 new Swiper('.slider__container', {
   loop: true,
   modules: [Navigation],
   slidesPerView: 2,
   centeredSlides: true,
   spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const reviewsSlider = new Swiper('.reviews__container', {
  loop: true,
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.reviews__btn-next',
    prevEl: '.reviews__btn-prev',
  },

})

const openingBtn = document.querySelector(".navigation__button");
const closingBtn = document.querySelector(".mobal-menu__close");
const mobalMenu = document.querySelector(".mobal-menu--wrapper");

openingBtn.addEventListener("click", e => {
  e.preventDefault();
  mobalMenu.classList.add("mobal-menu--opened");
});

closingBtn.addEventListener("click",  e => {
  e.preventDefault();
  mobalMenu.classList.remove("mobal-menu--opened");
});


