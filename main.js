class Scroll{
    constructor({ element, top, unit })  {
        if(typeof element == 'string') {
            this.item = document.querySelector(element)
        }else if (element instanceof HTMLElement) {
            this.item = element
        }

        this.range = top
        this.unit = unit
        this.item.style.position = 'fixed'
        this.item.style.top = this.checkUnit() + "px"
        
        window.addEventListener('scroll', () => this.move())
    }
    
    move() {
        // scrollY - отдает расстояние в px пройденное сверху от нашего scrolla
        
        this.size = this.checkUnit()
        
        
        if(this.size - scrollY > 0) {
            this.item.style.top = this.size - scrollY + 'px'
        }else {
            this.item.style.top = 0
        }
    }
    
    checkUnit() {
        if(this.unit == 'px') {
            return this.range > 0 ? this.range : 0
        }else if(this.unit == '%' || this.unit == undefined) {
            return window.innerHeight / 100 * this.range - this.item.clientHeight
        }
    }
    
    
}


let asd = document.querySelector('.header__nav');


let myScroll = new Scroll({
    element: '.header__nav',
    top: 100,
     
})



class Run{
    constructor(item) {
        this.item = document.querySelector(item)
        this.item.addEventListener('mouseover', () => this.run())
    }
    run() {
      this.item.style.position = 'absolute' 
      this.item.style.top = this.random(0,window.innerHeight - this.item.clientHeight) + 'px'
      this.item.style.left =  this.random(0,window.innerWidth - this.item.clientWidth) + 'px'

    }
 


 random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}



}

let element = new  Run('.header__content')

console.log(element);