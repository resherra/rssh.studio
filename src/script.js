function serve(target, url) {
    var r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onreadystatechange = function () {
        if (r.readyState != 3 || r.status != 200) return;
        target.innerHTML = r.responseText;

        // toggle-button                
    };
    r.send();

}

export default serve;