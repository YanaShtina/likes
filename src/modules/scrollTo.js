const bodyScrollLock = require('body-scroll-lock');
// const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
export default {
  scroll() {
    const links = document.querySelectorAll('.js-scroll');
    const targetElement = document.querySelector('.nav__wrap');
    links.forEach(link => {

      link.addEventListener('click', function(e) {
          e.preventDefault();
          const target = this.dataset.target;
          const scrollTarget = document.querySelector(`.${target}`);
          const burger = document.querySelector('.burger');
          const nav = document.querySelector('.nav__wrap');
          const body = document.querySelector('body');
          let topOffset;
         
          burger.classList.remove('active');
          nav.classList.remove('active');
          body.classList.remove('active');
          enableBodyScroll(targetElement);
          topOffset = 0;

          // const topOffset = 0; // если не нужен отступ сверху 
          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;

          window.scrollBy({
              top: offsetPosition,
              behavior: 'smooth'
          });
      });
    })
  },
}
