import ScrollSuave from './scroll-suave.js';
import initAnimationScroll from './scroll-animacao.js';
import initAccordion from './accordion.js';
import initTabNav from './tab-nav.js';
import initModal from './modal.js';
import initTooltip from './tooltip.js';
import initDropdownMenu from './dropdown-menu.js';
import initMenuMobile from './menu-mobile.js';
import initAnimaNumeros from './anima-numeros.js';
import initFuncionamento from './funcionamento.js';


const scrollSuave = new ScrollSuave('[data-menu="smooth"] a[href^="#"]');
scrollSuave.init();

initAnimationScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();