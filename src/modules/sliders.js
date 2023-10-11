import Swiper, { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
export default {
  initReviews() {
    const swiper = new Swiper('.swiper.reviews__slider', {
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      speed: 900,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 5,
      spaceBetween: 38,
      loop: true,
      /* loopedSlides: 10, */
      centeredSlides: true, 
      centeredSlidesBounds: true, 
      initialSlide: 3,
      watchSlidesProgress: true,
      autoHeight: true,
    });
  }
}