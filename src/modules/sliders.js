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
      initialSlide: 17,
      loop: false, 
      breakpoints: {
        700: {     
          slidesPerView: 5,
          spaceBetween: 28,
          centeredSlides: true,
          initialSlide: 13,
          loop: true,
        }
      }
    });


   swiper.on('click', function (e) {
    const clickedIndex = swiper.clickedIndex;
    swiper.slideTo(clickedIndex);
    
    const clickedSlide = swiper.clickedSlide;
    const videInner = clickedSlide.querySelector('video');
  
    const videos = document.querySelectorAll('video');
    videos.forEach((v) => {
      const slide = v.closest('.slider__item');
      const vid = v.closest('.slider__item-video');
    if(slide != null && slide.classList.contains('swiper-slide-active') === false) {
        v.pause();
        vid.classList.add('pause')
      /*   videInner.controls = false; */
      }  

 

      if(slide != null && slide.classList.contains('swiper-slide-active') && v.paused == true) {
        vid.classList.remove('pause')
        v.play();
   
      } else if (slide != null && slide.classList.contains('swiper-slide-active') && v.paused == false) {
        vid.classList.add('pause')
        v.pause();
   
      }
    }) 
  
  
    
    }); 

    const btns = document.querySelectorAll('.swiper-button');

    btns.forEach((b) => {
      b.addEventListener('click', () => {
        const videos = document.querySelectorAll('video');
        videos.forEach((v) => {
          const slide = v.closest('.slider__item');
          const vid = v.closest('.slider__item-video');
        if(slide != null && slide.classList.contains('swiper-slide-active') === false) {
            v.pause();
            vid.classList.add('pause')
          /*   videInner.controls = false; */
          }  
    
     
    
          if(slide != null && slide.classList.contains('swiper-slide-active') && v.paused == true) {
            vid.classList.remove('pause')
            v.play();
          } else if (slide != null && slide.classList.contains('swiper-slide-active') && v.paused == false) {
            vid.classList.add('pause')
            v.pause();
          }
          
        }) 
      })
    })
 
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