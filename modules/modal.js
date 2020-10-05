export default class initModal{
  constructor(botaoAbrir, botaoFechar, containerModal){
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(botaoFechar);
  }


  toggleModal(){
      this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal();
  }
  
  clickForaDoModal(event){
      if(event.target === this)
        this.toggleModal(event);
      
  }

  addModalEvents(){
    this.botaoAbrir.addEventListener('click', this.toggleModal);
    this.botaoFechar.addEventListener('click', this.toggleModal);
    this.containerModal.addEventListener('click', this.clickForaDoModal);
  }

  init(){
    if(this.botaoAbrir && this.botaoFechar && this.containerModal){
      this.addModalEvents();
    }
  }
};



