import outSideClick from './outsideclick.js';
import outsideClick from './outsideclick.js';

export default class MenuMobile{
    constructor(){
        const menuButton = document.querySelector('[data-menu="button"]');
        const menuList = document.querySelector('[data-menu="list"]');
        const eventos = ['click', 'touchstart'];
    }
    
    
    if(menuButton){
    function openMenu(event){
        menuList.classList.add('active');
        menuButton.classList.add('active');
        outsideClick(menuList, eventos , () =>{
            menuList.classList.remove('active');
            menuButton.classList.remove('active');
        })
    }
    
    eventos.forEach( evento => menuButton.addEventListener(evento, openMenu));
} 
}



