function serve(target, url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    
    req.onreadystatechange = function () {
        if (req.readyState != 4 || req.status != 200) return;

        target.innerHTML = req.responseText;
    };
    req.send();
}

export default serve;