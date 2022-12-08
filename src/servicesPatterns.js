class servicesPatterns {
    constructor() {
        this.patt = document.querySelector('.patterns')
        this.event()
    }

    event() {
        this.patt.addEventListener('click', (e) => this.light(e))
    }

    light(e) {
        let jk = document.getElementById(`services[data-link='${e.explicitOriginalTarget.attributes[0].nodeValue}']`)
        let key = document.getElementById(`key[data-link='${e.explicitOriginalTarget.attributes[0].nodeValue}']`)
        if(!jk) return;
        this.key.classList.add("text-red-400")
    }
}

export default servicesPatterns