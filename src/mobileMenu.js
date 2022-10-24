class MobileMenu {
    constructor () {
        this.button = document.querySelector(`.toggle-button`)
        this.menuList = document.getElementById(`menu-list`)
        this.event()
    }

    
    event() {
        this.button.addEventListener(`click`, () => this.toggleTheMenu())
        this.menuList.addEventListener(`click`, () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        console.log(`hello jack!`)
         this.menuList.classList.toggle('hidden')
         this.menuList.classList.toggle('flex')
    }
}

export default MobileMenu