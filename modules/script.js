import ScrollSuave from './scroll-suave.js';
import Accordion from './accordion.js';
import initTabNav from './tab-nav.js';
import initModal from './modal.js';
import initTooltip from './tooltip.js';
import initDropdownMenu from './dropdown-menu.js';
import initMenuMobile from './menu-mobile.js';
import initAnimaNumeros from './anima-numeros.js';
import initFuncionamento from './funcionamento.js';
import initAnimationScroll from './scroll-animacao.js';


const scrollSuave = new ScrollSuave('[data-menu="smooth"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();
initAnimationScroll();