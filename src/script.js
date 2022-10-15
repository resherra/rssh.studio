function serve(target, url) {
    var r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        target.innerHTML = r.responseText;

        // toggle-button

        document.querySelector(`.toggleButton`).addEventListener(`click`, function push(){
            console.log(`welcome back jack!`)
        })
        
    };
    r.send();
    
}

export default serve;