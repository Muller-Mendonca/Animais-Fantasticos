export default function initAnimationScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    
    if(sections.length){
     const windowMetade = window.innerHeight * 0.6;
    
     function animaScroll(){
         sections.forEach((section) => {
             const sectionTop = section.getBoundingClientRect().top;
             const isSectionVisible = (sectionTop - windowMetade) < 0
             if(isSectionVisible){
                 section.classList.add('setativo');
             }else if(section.classList.contains('setativo')){
                section.classList.remove('setativo');
             }
         });
     }
     
     animaScroll();
     
     window.addEventListener('scroll', animaScroll);
    };
  };
  
  