const btn = document.querySelectorAll(`.red`)




btn.forEach(function(darkon){
    // console.log(darkon)
    darkon.addEventListener(`click`, darkhoo)
    

})


function darkhoo(){
    document.body.classList.toggle(`dark-theme`)
    console.log(`hello`)
}

