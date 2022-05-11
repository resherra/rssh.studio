const btn = document.querySelectorAll(`.red`)
console.log(btn)

function darkhoo(){
    document.body.classList.toggle(`dark-theme`)
}

btn.forEach(function(darkon){
    darkon.addEventListener(`click`, darkhoo)

})




