import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  initHero() {

    const tlDots = gsap.timeline({
      repeat: -1,
    });

    tlDots
     .to('._bg-dots', {
      rotationZ: -10,
      duration:3,
   
    }
    )
   .to('._bg-dots', {
      rotationZ: 0,
      duration:3,

    }
    ) 

    const tlBG = gsap.timeline({
      repeat: -1,
    });
    tlBG
    .to('._bg-main', {
      rotationZ: 10,
      duration:3, 

    })
    .to('._bg-main', {
      rotationZ: 0,
      duration:3,

    })
    
    // анимация эмоджи 
    const leftItem1 = document.querySelector('._left-1');
    const tlLeft1 = gsap.timeline({
      repeat: -1,
    });

    tlLeft1
    .to(leftItem1, {
      y:-10,
      duration:4,
      scale: 0.7,
    },)
    .to(leftItem1, {
      y:0,
      duration:4,
      scale: 1,
    },)
    //2
    const leftItem2 = document.querySelector('._left-2');

    const tlLeft2 = gsap.timeline({
      repeat: -1,
    });

    tlLeft2
    .to(leftItem2, {
      y:10,
      x:10,
      duration:4,
      scale: 1.2,
    },)
    .to(leftItem2, {
      y:0,
      x:0,
      duration:4,
      scale: 1,
    },)


    //3
    const leftItem3 = document.querySelector('._left-3');

    const tlLeft3 = gsap.timeline({
      repeat: -1,
    });

    tlLeft3
    .to(leftItem3, {
      y:-20,
      x:-20,
      duration:4,
      scale: 1.2,
      rotateZ: -20,
    },)
    .to(leftItem3, {
      y:0,
      x:0,
      duration:4,
      scale: 1,
      rotateZ: 0,
    },)


    //3
    const leftItem4 = document.querySelector('._left-4');

    const tlLeft4 = gsap.timeline({
      repeat: -1,
    });

    tlLeft4
    .to(leftItem4, {
      y:10,
      x:10,
      duration:4,
      scale: 0.7,
      rotateZ: 20,
    },)
    .to(leftItem4, {
      y:0,
      x:0,
      duration:4,
      scale: 1,
      rotateZ: 0,
    },)


    const rightItem1 = document.querySelector('._right-1');
    const tlright1 = gsap.timeline({
      repeat: -1,
    });

    tlright1
    .to(rightItem1, {
      y:-10,
      duration:4,
      scale: 0.7,
    },)
    .to(rightItem1, {
      y:0,
      duration:4,
      scale: 1,
    },)

    const rightItem2 = document.querySelector('._right-2');
    const tlright2 = gsap.timeline({
      repeat: -1,
    });

    tlright2
    .to(rightItem2, {
      y:-10,
      duration:4,
      scale: 0.7,
    },)
    .to(rightItem2, {
      y:0,
      duration:4,
      scale: 1,
    },)

    const rightItem3 = document.querySelector('._right-3');
    const tlright3 = gsap.timeline({
      repeat: -1,
    });

    tlright3
    .to(rightItem3, {
      y:-10,
      duration:4,
      scale: 0.7,
    },)
    .to(rightItem3, {
      y:0,
      duration:4,
      scale: 1,
    },)

    const rightItem4 = document.querySelector('._right-4');
    const tlright4 = gsap.timeline({
      repeat: -1,
    });

    tlright4
    .to(rightItem4, {
      y:-10,
      duration:4,
      scale: 0.7,
    },)
    .to(rightItem4, {
      y:0,
      duration:4,
      scale: 1,
    },)

    

    

    
  },

  initRocket() {
    const text = gsap.timeline({
      repeat: -1,
    });

    // анимация текста 
    const changeColor = document.querySelector('.rocket__info-inner .animated');

    const tlchangeColor = gsap.timeline({
      repeat: -1,
    });

    tlchangeColor
    .to(changeColor, {
        color:'#ffffff',
        backgroundColor: '#FC0091',
        duration: 3,
    },)
    .to(changeColor, {
      color:'#202020',
      backgroundColor: '#F9BB19',
      duration: 3,
  
    },)

    //список
    const list = document.querySelectorAll('.rocket__item');
    console.log('list', list)

    list.forEach((element) => {
      console.log(element);

      const arrow = element.querySelector('.arrow')

      const tlchangeSize = gsap.timeline({
        repeat: -1,
      }); 

      tlchangeSize
      .to(arrow, {
        opacity:1,
        duration: 3,
    },)
    });

/*     list.forEach(item, ()=> {
      console.log('i', item)
      const tlchangeSize = gsap.timeline({
        repeat: -1,
      }); */
/* 
      tlchangeSize
      .to(i, {
        color:'#ffffff',
        backgroundColor: '#FC0091',
        duration: 3,
    },) */


  }
}