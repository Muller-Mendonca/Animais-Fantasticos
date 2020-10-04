export default class ScrollSuave{
    constructor(links, options){
        this.linksInternos = document.querySelectorAll(links);
    }
    
    
    scrollToSection(event){
         event.preventDefault();
         const href = event.currentTarget.getAttribute('href');
         const section = document.querySelector(href);
         section.scrollIntoView({
             behavior: 'smooth',
             block: 'start',
         });

    addLinkEvent(){
        this.linksInternos.forEach((link) => {
            link.addEventListener('click', this.scrollToSection);
        });
    }
     
    init(){
        this.addLinkEvent();
    }
     
         //FORMA ALTERNATIVA
     //    const topo = section.offsetTop;
     //    window.scrollTo({
     //        top: topo,
     //        behavior: 'smooth',
     //    });
     
    
     
     
    }
    