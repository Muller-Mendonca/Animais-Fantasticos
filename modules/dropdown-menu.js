import outsideClick from './outsideclick.js';

export default class DropdownMenu{
    constructor(dropdownMenus){
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    }

    


  dropdownMenus.forEach(menu =>{
      ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
      });
  });

  function handleClick(event){
      event.preventDefault();
      this.classList.add('active');
      outsideClick(this, ['touchstart', 'click'], () =>{
          this.classList.remove('active');
      });
  }

}



