class MobileMenu {
    constructor () {
        this.button = document.querySelector(`.toggle-button`)
        this.menuList = document.getElementById(`menu-list`)
        this.event()
    }

    event() {
        this.button.addEventListener(`click`, () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        console.log(`jack`)
        this.menuList.classList.toggle('hidden')
    }
}

export default MobileMenu