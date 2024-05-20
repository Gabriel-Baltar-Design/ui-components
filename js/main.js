import { toggleMenu } from './menu-mobile.js';
import hiddenMenu from './scroll-menu-view.js';
import imagesLoop from './images-loop.js';

imagesLoop();
hiddenMenu();
toggleMenu();



(function () {
    var scroll = new LocomotiveScroll();
})();