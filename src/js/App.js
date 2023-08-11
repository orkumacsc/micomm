
"use strict";

const btnOpen = document.querySelector('.toggle-open');
const btnClose = document.querySelector('.toggle-close');
let menu = document.querySelector('.navbar');

btnOpen.addEventListener('click', () => {
    menu.classList.remove('none');
})

btnClose.addEventListener('click', () => {
    menu.classList.add('none');
})
