import ScrollSuave from './scroll-suave.js';
import Accordion from './accordion.js';
import TabNav from './tab-nav.js';
import Modal from './modal.js';
import Tooltip from './tooltip.js';
import initDropdownMenu from './dropdown-menu.js';
import initMenuMobile from './menu-mobile.js';
import initAnimaNumeros from './anima-numeros.js';
import initFuncionamento from './funcionamento.js';
import initAnimationScroll from './scroll-animacao.js';
import initFechAnimais from './fetch-animais.js';


const scrollSuave = new ScrollSuave('[data-menu="smooth"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initDropdownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();
initAnimationScroll();
initFechAnimais();