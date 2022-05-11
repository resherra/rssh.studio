const humb = document.querySelector(`.humb`)
const navMenu = document.querySelector(`.nav-menu`)


humb.addEventListener(`click`, () => {
    humb.classList.toggle(`active`)
    navMenu.classList.toggle(`active`)
})

document.querySelectorAll(`.nav-link`).forEach(n => n.addEventListener(`click`, () =>
{
    humb.classList.remove(`active`)
    navMenu.classList.remove(`active`)
} ))


console.log(`${document.title}`)


var form = document.querySelector('.pageclip-form')
Pageclip.form(form, {
  onSubmit: function (event) { },
  onResponse: function () { 
    window.location.href = "Blog.html";
  },
})

function myFunctionDark() {
  var x = document.getElementById("night");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function myFunctionLight() {
  var x = document.getElementById("day");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}