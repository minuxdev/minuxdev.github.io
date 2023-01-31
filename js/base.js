



// Show and hide menu 
const form = document.querySelector('.search__form');
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.main__menu');

toggle.classList.remove('active');

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active')
    menu.classList.toggle('active')
})

// header form control
form.addEventListener('click', ()=>{
    form.classList.toggle('active');
})

