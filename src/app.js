import "./style.css"
import serve from "./script"
import MobileMenu from "./mobileMenu"
import servicesPatterns from "./servicesPatterns";

// inject pages to the browser

let includes = Array.from(document.querySelectorAll('[data-include]'));
includes.map(include => {
    let file = include.dataset['include'] + '.html';
    serve(include, file);
});

// toggle button callback function

setTimeout(function() {
    new MobileMenu()
}, 1000);

setTimeout(function() {
    new servicesPatterns()
}, 1000);

// enabling hot modules replacement

if (module.hot) {
    module.hot.accept()
}
