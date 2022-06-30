 console.log(`halo`)


        function load(target, url) {
            var r = new XMLHttpRequest();
            r.open("GET", url, true);
            r.onreadystatechange = function () {
                if (r.readyState != 4 || r.status != 200) return;
                target.innerHTML = r.responseText;
            };
            r.send();
        }

        let includes = Array.from(document.querySelectorAll('[data-include]'));
        includes.map(include => {
            let file = include.dataset['include'] + '.html';
            load(include, file);
        });


// callback function

        function whenReady(name, callback){
            var interval = 1000; // ms
            window/setTimeout(function(){
                if (window[name]) {
                    callback(window[name]);
                } else {
                    whenReady(name, callback)
                }

            }, interval)
        }

        
        whenReady("load", toggle)

        
        
        // toggle-menu
            
            function toggle() {
            const toggleBtn = document.querySelector(`.toggle-menu`)
            const li = document.getElementById(`links`)
                
                // stop propagation on menu

            li.onclick = function (e) {
                e.stopPropagation();
            }

            toggleBtn.onclick = function (e) {

                // stop propagation on <span>
                e.stopPropagation();

                // toggle class open on links
                li.classList.toggle(`open`)
            }
            
            document.addEventListener(`click`, (e) => {
                if (e.target !== toggleBtn && e.target !== li) {
                    //check if menu is open
                    if (li.classList.contains(`open`)) {
                        
                        li.classList.toggle(`open`)

                    }

                }
                
            })
        }


