function serve(target, url) {
    var r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        target.innerHTML = r.responseText;

        // toggle-button          
        
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
                console.log(`hello jack!`)
                this.menuList.classList.remove(`hidden`)
            }
        }

        
        let red = new MobileMenu()

    };
    r.send();

}

export default serve;