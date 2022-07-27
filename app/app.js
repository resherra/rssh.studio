import "../assets/scss/style.scss"
import serve from "./script"


    let includes = Array.from(document.querySelectorAll('[data-include]'));
    includes.map(include => {
        let file = include.dataset['include'] + '.html';
        serve(include, file);
    });


// enabling hot modules replacement

if (module.hot) {
    module.hot.accept()
}
