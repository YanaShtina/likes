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
          slidesPerView: 5,
          spaceBetween: 28,
          centeredSlides: true,
          initialSlide: 3,
        }
      }
    });


   swiper.on('click', function (e) {
    const clickedIndex = swiper.clickedIndex;
    swiper.slideTo(clickedIndex);
    
    const clickedSlide = swiper.clickedSlide;
    const videInner = clickedSlide.querySelector('video');
    console.log('click1')
/*     const videos = document.querySelectorAll('video');
    videos.forEach((v) => {
      if(v.paused != true) {
        v.pause();
      }
    }) 
 */
    if(clickedSlide.classList.contains('swiper-slide-active')) {
      videInner.play();
    } else {
      videInner.pause();
    }
    console.log('click2')
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