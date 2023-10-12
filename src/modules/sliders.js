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
      spaceBetween: 10,
      loop: true, 
      initialSlide: 1,
      slidesPerView: 1.2,
   /*    centeredSlides: true,  */
      freeMode: true,
      centeredSlidesBounds: true,
/*       centeredSlidesBounds: true,  */

      breakpoints: {
        700: {
          slidesPerView: 3,
          spaceBetween: 38,
          initialSlide: 1,
          centeredSlides: true, 
          freeMode: true,
/*           centeredSlidesBounds: true,  */
          loop: true, 
        }
      }
    });
  }
}