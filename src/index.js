import './index.scss';
import scroll  from './modules/scrollTo';
import popup  from './modules/popup';
import burger  from './modules/burger';
import gsap  from './modules/gsap';
import sliders  from './modules/sliders';
import counter  from './modules/counter';
import lottie  from './modules/lottie';



scroll.scroll();
popup.init();
burger.init();
lottie.init();
counter.init();
gsap.initHero();
gsap.initRocket(); 
gsap.scrollCards();
gsap.scrollResults();
gsap.more();
gsap.why(); 
gsap.how();
sliders.initReviews();
sliders.initTop();













