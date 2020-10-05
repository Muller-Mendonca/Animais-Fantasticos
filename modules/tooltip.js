export default class Tooltip{
    constructor(tooltips){
        this.tooltips = document.querySelectorAll(tooltips);
    }
    
    onMouseOver(event){
        this.criarTooltipBox(event.currentTarget);
    
        event.currentTarget.addEventListener('mousemove', this.onMouseMove);
        event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
        
    
    }

    onMouseMove(event){
        this.tooltipBox.style.top = event.pageY + 20 + 'px';
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
    

    onMouseLeave(){
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
    }
    
    criarTooltipBox(element){
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('arial-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
    }

    addTooltipsEvent(){
        this.tooltips.forEach((item) =>{
            item.addEventListener('mouseover', this.onMouseOver);
        })
    }

    init(){
        if(this.tooltips.length){
            this.addTooltipsEvent();
        }
        return this;
    }

}

