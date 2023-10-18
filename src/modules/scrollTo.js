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
      
        if (scrollTarget.classList.contains('hero')) {
            topOffset = 180;
          }  else if (scrollTarget.classList.contains('rocket')) {
            let mql = window.matchMedia("(max-width: 700px)");
            if(mql.matches != true) {
              topOffset = -70;
            } else {
              topOffset = 70;
            }
            
          }  
          else if (scrollTarget.classList.contains('how')) {
            topOffset = 60; 
          } 
          else if (scrollTarget.classList.contains('results')) {
            topOffset = 0;
          } 
          else {
            topOffset = 100;
          }
       

          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;

          window.scrollBy({
              top: offsetPosition,
              behavior: 'smooth'
          });
      });
    })


const header = document.querySelector('.header');

const headerHeight = header.offsetHeight;


window.addEventListener('scroll', () => {

  const scrollY = window.scrollY;
  const hideThreshold = 0.2 * headerHeight;

  if (scrollY > hideThreshold) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}); 

  },
}
