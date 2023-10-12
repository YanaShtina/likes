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
    // если тру - значит мобилка
    let mql = window.matchMedia("(max-width: 700px)");
    console.log('mql', mql.matches)
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

    if (mql.matches != true) {
      const tl = gsap.timeline({
        repeat: -1, // Repeat the animation infinitely
      });
      
      tl.to(".rocket__item._1 .icon, .rocket__item._1 .text", { scale: 1.2 })
        .to(".rocket__item._1 .arrow", { opacity: 1 })
        .to(".rocket__item._1 .icon, .rocket__item._1 .text", { scale: 1 })
        .to(".rocket__item._1 .arrow", { opacity: 0 });

        tl.to(".rocket__item._2 .icon, .rocket__item._2 .text", { scale: 1.2 })
        .to(".rocket__item._2 .arrow", { opacity: 1 })
        .to(".rocket__item._2 .icon, .rocket__item._2 .text", { scale: 1 })
        .to(".rocket__item._2 .arrow", { opacity: 0 });

        tl.to(".rocket__item._3 .icon, .rocket__item._3 .text", { scale: 1.2 })
        .to(".rocket__item._3 .arrow", { opacity: 1 })
        .to(".rocket__item._3 .icon, .rocket__item._3 .text", { scale: 1 })
        .to(".rocket__item._3 .arrow", { opacity: 0 });


        tl.to(".rocket__item._4 .icon, .rocket__item._4 .text", { scale: 1.2 })
        .to(".rocket__item._4 .arrow", { opacity: 1 })
        .to(".rocket__item._4 .icon, .rocket__item._4 .text", { scale: 1 })
        .to(".rocket__item._4 .arrow", { opacity: 0 });


        tl.to(".rocket__item._5 .icon, .rocket__item._5 .text", { scale: 1.2 })
        .to(".rocket__item._5 .arrow", { opacity: 1 })
        .to(".rocket__item._5 .icon, .rocket__item._5 .text", { scale: 1 })
        .to(".rocket__item._5 .arrow", { opacity: 0 });
    } else if (mql.matches == true) {
      const tl = gsap.timeline({
        repeat: -1, // Repeat the animation infinitely
      });
      
      tl
        .to(".rocket__item._1 .icon, .rocket__item._1 .text", 
          { opacity: 0 })
      
        .to(".rocket__item._1 .icon, .rocket__item._1 .text", { opacity: 1 })
      

        tl .to(".rocket__item._2 .icon, .rocket__item._2 .text", 
        { opacity: 0 })
    
      .to(".rocket__item._2 .icon, .rocket__item._2 .text", { opacity: 1 })

        tl .to(".rocket__item._3 .icon, .rocket__item._3 .text", 
        { opacity: 0 })
    
      .to(".rocket__item._3 .icon, .rocket__item._3 .text", { opacity: 1 })


        tl .to(".rocket__item._4 .icon, .rocket__item._4 .text", 
        { opacity: 0 })
    
      .to(".rocket__item._4 .icon, .rocket__item._4 .text", { opacity: 1 })


        tl .to(".rocket__item._5 .icon, .rocket__item._5 .text", 
        { opacity: 0 })
    
      .to(".rocket__item._5 .icon, .rocket__item._5 .text", { opacity: 1 })
    }



    // ракета
    const rocket = document.querySelector('.rocket__img');

    const tlRocket = gsap.timeline({
      repeat: -1, // Repeat the animation infinitely
    });

    const rainItems = document.querySelectorAll(".rain-item-svg");



    if (mql.matches != true) {
      tlRocket
      .to(rocket, {
        y: -70,
        opacity:0.4,
   
      })
      .to(rocket, {
        opacity:1,
        y: 0,
   
      })

      rainItems.forEach((rainItem, index) => {
        const tlItem = gsap.timeline({
          repeat: -1,
        });
      
        tlItem
          .fromTo(rainItem, {
            y: -400,
            ease: "power1.in",
            duration: 2,
            delay: index * 0.1,
          },
          {
            y: 700,
            ease: "power1.in",
            duration: 2,
            delay: index * 0.1,
          })
     /*      .set(rainItem, { y: "-120%" });
      
        tlRain.add(tlItem, 0); // Ensure that each item starts at the same time */
      });
    } else if (mql.matches == true) {
      tlRocket
      .to(rocket, {
        y: -20,
        duration: 2,
      })
      .to(rocket, {
        y: 0,
        duration: 2,
      })

      rainItems.forEach((rainItem, index) => {
        const tlItem = gsap.timeline({
          repeat: -1,
        });
      
        tlItem
          .fromTo(rainItem, {
            y: -300,
            ease: "power1.in",
            duration: 2,
 
            delay: index * 0.1,
          },
          {
            y: 400,
            ease: "power1.in",
            opacity:1,
            duration: 2,
            delay: index * 0.1,
          })
     /*      .set(rainItem, { y: "-120%" });
      
        tlRain.add(tlItem, 0); // Ensure that each item starts at the same time */
      });
    }



    
  },

  scrollCards() {
    let mql = window.matchMedia("(max-width: 700px)");
    console.log('mql', mql.matches);

    if (mql.matches != true) {
      console.log('desk')
    } else if (mql.matches == true) {
      const section = document.querySelector('.hashtags');
      const title = document.querySelector('.hashtags__list');
      const card2 = document.querySelector('.hashtags__item._2');
      const card3 = document.querySelector('.hashtags__item._3');

      console.log('card3', card3)

      const tl = gsap.timeline();

      tl.to(card2, {
        top: 0,
        duration:3,
      })
      .to(card3, {
        top: 0,
        duration:3,
      }) 
     
      ScrollTrigger.create({
        trigger: section,
        start: '-50px',
        end: '2000 top',
        animation: tl,
        markers: true,
        pin: true,
        scrub: true,
      });
    }
  },

  scrollResults() {

    let mql = window.matchMedia("(max-width: 700px)");
    console.log('mql', mql.matches);

    if (mql.matches != true) {
      console.log('desk')
    } else if (mql.matches == true) {
      const section = document.querySelector('.results');
      const scroll1 = document.querySelector('.scroll-1');
      const scroll2 = document.querySelector('.scroll-2');
      const scroll3 = document.querySelector('.scroll-3');
      const scroll4 = document.querySelector('.scroll-4');
      const scroll5 = document.querySelector('.scroll-5');


      const tl = gsap.timeline();

      tl.to(scroll2, {
        top: 0,
        duration:3,
      })
      .to(scroll3, {
        top: 0,
        duration:3,
      }) 
      .to(scroll4, {
        top: 0,
        duration:3,
      }) 
      .to(scroll5, {
        top: 0,
        duration:3,
      }) 
     
      ScrollTrigger.create({
        trigger: section,
        start: '-50px',
        end: '1500 top',
        animation: tl,
        markers: true,
        pin: true,
        scrub: true,
      });
    }

  },

  more() {
    const moreOut = document.querySelectorAll('.out');
    const moreOut1 = document.querySelector('.inner-wrap-svg');

    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.to(moreOut1, {
      rotate: 360,
      duration: 3,
      bezier: {
        type: "quadratic",
        values:[
          /*p1*/{ x: 0, y: 0 }, { x: 200, y: 0 }, { x: 200, y: 200 },
          /*p2*/{ x: 200, y: 400 }, { x: 0, y: 400 },
          /*p3*/{ x: -200, y: 400 }, { x: -200, y: 200 },
          /*p4*/{ x: -200, y: 0 }, { x: 0, y: 0 }],
        autoRotate: false
      },
    }
    )


/*     moreOut.forEach(el => {
      const tl = gsap.timeline({
        repeat: -1,
      });

      tl.to(el, {
        rotationZ: 10,
        duration: 3,
      }
      )
    })
 */
    console.log('moreOut', moreOut)
  }
}