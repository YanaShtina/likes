const img = require("../modules/more-anim.json");;
export default {
  init() {

    const anim = document.querySelector('.lottie');

    bodymovin.loadAnimation({
      container:anim,
      renderer: 'svg',
     path: img,
     /* speed:2, */
    })
  }
}