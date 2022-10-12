let open = document.getElementById('bar');
let nav = document.getElementById('navbar');
let close = document.getElementById('close');

open.addEventListener('click', openNav);
close.addEventListener('click', closeNav);

function openNav() {
    nav.classList.toggle('active');
}

function closeNav() {
    nav.classList.remove('active');
}