export default class ScrollAnima{
    constructor(sections){
        this.sections = document.querySelectorAll(sections);
        this.windowMetade = window.innerHeight * 0.6;

        this.checkDistance = this.checkDistance.bind(this);
    }

    getDistance(){
        this.distance = [...this.sections].map((section) =>{
            const offset = section.offsetTop;
            return{
                element: section,
                offset,
            };
        });
    }

    //PAREI 15:30 AULA 10

    checkDistance(){
        this.distance.forEach((item) =>{
            if(window.pageYOffset > item.offset){
                item.element.classList.add('setativo');
            }else if(item.element.classList.contains('setativo')){
                item.element.classList.remove('setativo');
            }
        });
    }

     animaScroll(){
         console.log('ativou')
         this.sections.forEach((section) => {
             const sectionTop = section.getBoundingClientRect().top;
             const isSectionVisible = (sectionTop - this.windowMetade) < 0
             if(isSectionVisible){
                 
         });
     }

     init(){
         this.animaScroll();
        window.addEventListener('scroll', this.checkDistance);
     }
};
  
  