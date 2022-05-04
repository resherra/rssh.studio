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

    const red = window.location.href = "Blog.html";

  },
})

