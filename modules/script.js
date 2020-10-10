import ScrollSuave from './scroll-suave.js';
import Accordion from './accordion.js';
import TabNav from './tab-nav.js';
import Modal from './modal.js';
import Tooltip from './tooltip.js';
import DropdownMenu from './dropdown-menu.js';
import initMenuMobile from './menu-mobile.js';
import initFuncionamento from './funcionamento.js';
import fetchAnimais from './fetch-animais.js';
import fetchBitcoin from './fetch-bitcoin.js';
import ScrollAnima from './scroll-anima.js';


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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();


initMenuMobile();
initFuncionamento();

fetchAnimais('../animaisapi.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');