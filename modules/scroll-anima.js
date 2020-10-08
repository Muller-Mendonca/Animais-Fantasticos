export default class ScrollAnima{
    constructor(sections){
        this.sections = document.querySelectorAll(sections);
        this.windowMetade = window.innerHeight * 0.6;

        this.animaScroll = this.animaScroll.bind(this);
    }

     animaScroll(){
         this.sections.forEach((section) => {
             const sectionTop = section.getBoundingClientRect().top;
             const isSectionVisible = (sectionTop - this.windowMetade) < 0
             if(isSectionVisible){
                 section.classList.add('setativo');
             }else if(section.classList.contains('setativo')){
                section.classList.remove('setativo');
             }
         });
     }

     init(){
        window.addEventListener('scroll', this.animaScroll);
     }
};
  
  