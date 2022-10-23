class MobileMenu {
    constructor () {
        this.button = document.querySelector(`.toggle-button`)
        this.menuList = document.getElementById(`menu-list`)
        this.ideate = document.getElementById(`ideateClick`)
        this.ideateBlock = document.getElementById(`Ideate`)
        this.prototype = document.getElementById(`prototypeClick`)
        this.prototypeBlock = document.getElementById(`Prototype`)
        this.build = document.getElementById(`buildClick`)
        this.buildBlock = document.getElementById(`Build`)
        this.event()
    }

    
    event() {
        this.button.addEventListener(`click`, () => this.toggleTheMenu())
        this.menuList.addEventListener(`click`, () => this.toggleTheMenu())
        this.ideate.addEventListener(`click`, () => this.scrollIntoIdeate())
        this.prototype.addEventListener(`click`, () => this.scrollIntoPrototype())
        this.build.addEventListener(`click`, () => this.scrollIntoBuild())
    }

    toggleTheMenu() {
        console.log(`hello jack!`)
         this.menuList.classList.toggle('hidden')
         this.menuList.classList.toggle('flex')
    }

    scrollIntoIdeate() {
        this.ideateBlock.scrollIntoView({behavior: 'smooth'})
        this.ideateBlock.classList.add('text-red-400')

    }
    
    scrollIntoPrototype() {
        this.prototypeBlock.scrollIntoView({behavior: 'smooth'})
        this.prototypeBlock.classList.add('text-red-400')

    }
    
    scrollIntoBuild() {
        this.buildBlock.scrollIntoView({behavior: 'smooth'})
        this.buildBlock.classList.add('text-red-400')

    }
}

export default MobileMenu