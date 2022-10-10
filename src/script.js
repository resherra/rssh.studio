function serve(target, url) {
    var r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        target.innerHTML = r.responseText;

        // toggle-button

        let toggleBtn = document.querySelector(`.toggle-button`)
        let li = document.getElementById(`links`)

        li.addEventListener(`click`, function() {
            stopPropagation();
        })


        toggleBtn.addEventListener(`click`, function() {
            // button bars transition
            toggleBtn.classList.toggle(`active`)
            
            // toggle class open on links
            li.classList.toggle(`open`)
        })
                
    };
    r.send();
    
}

export default serve;