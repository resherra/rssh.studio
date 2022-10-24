class servicesPatterns {
    constructor() {
        this.ideate = document.getElementById(`ideateClick`)
        this.ideateBlock = document.getElementById(`Ideate`)
        this.prototype = document.getElementById(`prototypeClick`)
        this.prototypeBlock = document.getElementById(`Prototype`)
        this.build = document.getElementById(`buildClick`)
        this.buildBlock = document.getElementById(`Build`)
        this.event()
    }

    event() {
        this.ideate.addEventListener(`click`, () => this.scrollIntoIdeate())
        this.prototype.addEventListener(`click`, () => this.scrollIntoPrototype())
        this.build.addEventListener(`click`, () => this.scrollIntoBuild())
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
        this.buildBlock.classList.add('hidden')
    }
}

export default servicesPatterns