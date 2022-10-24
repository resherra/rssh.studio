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
        this.ideateBlock.classList.add("bg-clip-text", "text-transparent", "bg-gradient-to-r", "from-gradientFrom", "to-gradientTo"),
        this.prototypeBlock.classList.remove("bg-clip-text", "text-transparent", "bg-gradient-to-r", "from-gradientFrom", "to-gradientTo"),
        this.buildBlock.classList.remove("bg-clip-text", "text-transparent", "bg-gradient-to-r", "from-gradientFrom", "to-gradientTo")
    }
    
    scrollIntoPrototype() {
        this.prototypeBlock.scrollIntoView({behavior: 'smooth', block: 'center'}),
        this.prototypeBlock.classList.add("bg-clip-text", "text-transparent", "bg-gradient-to-r", "from-gradientFrom", "to-gradientTo"),
        this.ideateBlock.classList.remove("bg-clip-text", "text-transparent", "bg-gradient-to-r", "from-gradientFrom", "to-gradientTo"),
        this.buildBlock.classList.remove("bg-clip-text", "text-transparent", "bg-gradient-to-r", "from-gradientFrom", "to-gradientTo")
    }
    
    scrollIntoBuild() {
        this.buildBlock.scrollIntoView({behavior: 'smooth', block: 'center'}),
        this.buildBlock.classList.add("bg-clip-text", "text-transparent", "bg-gradient-to-r", "from-gradientFrom", "to-gradientTo"),
        this.prototypeBlock.classList.remove("bg-clip-text", "text-transparent", "bg-gradient-to-r", "from-gradientFrom", "to-gradientTo"),
        this.ideateBlock.classList.remove("bg-clip-text", "text-transparent", "bg-gradient-to-r", "from-gradientFrom", "to-gradientTo")
    }
}

export default servicesPatterns