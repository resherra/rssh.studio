import "./style.css"
import serve from "./requestFunction"
import MobileMenu from "./mobileMenu"
import servicesPatterns from "./servicesPatterns";
import wait from "waait";

//serve content.
let includes = Array.from(document.querySelectorAll('[data-include]'));
includes.map(include => {
    let file = include.dataset['include'] + '.html';
    serve(include, file);
});


async function toggleFunciton() {
    await wait(1000)
    new MobileMenu()
}

toggleFunciton()


// enabling hot modules replacement

if (module.hot) {
    module.hot.accept()
}
