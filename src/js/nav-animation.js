/*NAV-ANIMATION.JS*/


let nav = document.querySelector('#mainNav');
let ham = document.querySelector('#hamBurger');
let top = document.querySelector('#top');
let mid = document.querySelector('#middle');
let bot = document.querySelector('#bottom');
let close = document.querySelector('.nav-list');


ham.addEventListener('click', openNav);
close.addEventListener('click', menuClose);

function openNav() {
    if(nav.className === "nav-list open") {
        menuClose();

    }else{
        menuOpen(); 
    };
}
//everything that happens when the mobile menu closes
function menuClose(e) {
    nav.className = 'nav-list close';
    top.style.width = "30px";
    mid.style.width = "30px";
    bot.style.width = "30px";
    mid.style.transform = "rotate(0deg)";
    bot.style.transform = "rotate(0deg)";
    bot.style.position = "static";
}
//everything that happens when the mobile menu opens
function menuOpen(e) {
    nav.className = 'nav-list open';
    nav.classList.remove("start");
    top.style.width = "0";
    mid.style.transform = "rotate(45deg)";
    bot.style.transform = "rotate(-45deg)";
    bot.style.position = "absolute";
    bot.style.bottom = "0";
    mid.style.width = "25px";
    bot.style.width = "25px";
}
