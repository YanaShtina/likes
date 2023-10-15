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
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      initialSlide: 3,



      breakpoints: {
        700: {     
          slidesPerView: 4,
          spaceBetween: 30,
          centeredSlides: true,
          initialSlide: 3,

   /*        freeMode: true, */
/*           centeredSlidesBounds: true,  */
    /*       loop: true,  */
        }
      }
    });
  },
  initTop() {
		const swiper = new Swiper('.swiper.top', {
      modules: [Navigation, Pagination, Autoplay, EffectFade],
			loop: true,
			speed: 500,
			spaceBetween: 12,
			slidesPerView: 1,
			direction: 'vertical',
			allowTouchMove: true,
      centeredSlides: true, 
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
		})
  }
}