
"use strict";

let btnSend = document.querySelector('.nav-toggler');
let navOpen = document.querySelector('.navbar-nav')

btnSend.addEventListener('click', (e) => {
    navOpen.classList.toggle('navbar-open');
})