class servicesPatterns {
    constructor() {
        this.ideate = document.getElementById(`ideateClick`)
        this.ideateBlock = document.getElementById(`Ideate`)
        this.proto = document.getElementById(`prototypeClick`)
        this.prototypeBlock = document.getElementById(`Prototype`)
        this.build = document.getElementById(`buildClick`)
        this.buildBlock = document.getElementById(`Build`)
        this.event()
    }

    event() {
        this.ideate.addEventListener(`click`, () => this.scrollIntoIdeate())
        this.proto.addEventListener(`click`, () => this.scrollIntoPrototype())
        this.build.addEventListener(`click`, () => this.scrollIntoBuild())
    }

    scrollIntoIdeate() {
        this.ideateBlock.scrollIntoView({behavior: 'smooth', block: 'center'}),
        this.ideateBlock.classList.add("text-red-300"),
        this.prototypeBlock.classList.remove("text-red-300"),
        this.buildBlock.classList.remove("text-red-300")
    }
    
    scrollIntoPrototype() {
        this.prototypeBlock.scrollIntoView({behavior: 'smooth', block: 'center'}),
        this.prototypeBlock.classList.add("text-red-300"),
        this.ideateBlock.classList.remove("text-red-300"),
        this.buildBlock.classList.remove("text-red-300")
    }
    
    scrollIntoBuild() {
        this.buildBlock.scrollIntoView({behavior: 'smooth', block: 'center'}),
        this.buildBlock.classList.add("text-red-300"),
        this.prototypeBlock.classList.remove("text-red-300"),
        this.ideateBlock.classList.remove("text-red-300")
    }
}

export default servicesPatterns
