
"use strict";

const btnOpen = document.querySelector('.toggle-open');
const btnClose = document.querySelector('.toggle-close');
let menu = document.getElementById('navbar');
let navLink = document.querySelectorAll('.nav-link');

btnOpen.addEventListener('click', () => {    
    menu.classList.remove('none');
    menu.style.animation = 'slide-in ease 600ms forwards';
    menu.style.right = '-100%';
})

btnClose.addEventListener('click', () => { 
    menu.style.animation = 'slide-out ease 600ms forwards';
    menu.style.right = '0';
})

navLink.forEach(n => n.addEventListener('click', () => {
    menu.style.animation = 'slide-out ease 600ms forwards';
    menu.style.right = '0';
}))


// Form Controller
const msgForm = document.getElementById("sendMessage");
const msg = document.getElementById('msg');
const url = "https://formspree.io/f/xbjvgadn";

const handleSubmit = async (e) => {
    e.preventDefault();    
    const formData = new FormData(e.target);
    fetch(url, {method: msgForm.method, body: formData, headers: {'Accept': 'Application/json'}})
    .then(response => {
        if(response.ok){
            msg.innerHTML = 'Thanks for contacting me. I\'ll get in touch with you ASAP.';
            msg.style.padding = "1rem";
            msg.style.color = "#00cc8f";
            msgForm.reset();
        } else{
            response.json().then(data => {
                if(Object.hasOwn(data, 'errors')){
                    msg.innerHTML = data['errors'].map(error => error['message']).json(', ');
                    msg.style.padding = "1rem";
                    msg.style.color = "red";
                }else{
                    msg.innerHTML = 'Ooops! There was a problem submitting your form.'
                }
            })
        }
    }).catch(error => {
        msg.innerHTML = 'Ooops! There was a problem submitting your form.';
        msg.style.padding = "1rem";
        msg.style.color = "red";
    })    
}

msgForm.addEventListener("submit", handleSubmit);


// resumeModal
const btn = document.getElementById('open-modal');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('resumeModal');
const body = document.getElementById('body');

btn.addEventListener('click', () => {
    modal.style.display = 'block';
    modal.style.animation = 'slide-down ease 600ms forwards';
    modal.style.top = '-100%';
    body.style.overflow = 'hidden';
    
})
closeBtn.addEventListener('click', () => {    
    modal.style.animation = 'slide-up ease 600ms forwards';
    modal.style.top = '0';
    body.style.overflow = 'auto';    
})

// Close modal when clicked outside modal content
window.addEventListener('click', (e) => {
    if(e.target == modal){
    modal.style.animation = 'slide-up ease 600ms forwards';
    modal.style.top = '0';
    body.style.overflow = 'auto';
    }
})