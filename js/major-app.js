'use strict';

var engineer = document.getElementById('engineer');
var medical = document.getElementById('medical');
var it = document.getElementById('IT');
var law = document.getElementById('law');
var sport = document.getElementById('sport');
var lan = document.getElementById('lan');
var acc = document.getElementById('acc');
var geo = document.getElementById('geo');

var video = document.getElementById('video');


engineer.addEventListener('click', userClick1);
medical.addEventListener('click', userClick2);
it.addEventListener('click', userClick3);
law.addEventListener('click', userClick4);
sport.addEventListener('click', userClick5);
lan.addEventListener('click', userClick6);
acc.addEventListener('click', userClick7);
geo.addEventListener('click', userClick8);



function userClick1(event) {
    event.preventDefault();
    video.setAttribute('src', 'https://www.youtube.com/embed/bipTWWHya8A');
}

function userClick2(event) {
    event.preventDefault();
    video.setAttribute('src', 'https://www.youtube.com/embed/FCAU4D-uG8Q');
}

function userClick3(event) {
    event.preventDefault();
    video.setAttribute('src', 'https://www.youtube.com/embed/Gt8xiJyJ2Sc');
}

function userClick4(event) {
    event.preventDefault();
    video.setAttribute('src', 'https://www.youtube.com/embed/HpBIv-3ou0E');
}

function userClick5(event) {
    event.preventDefault();
    video.setAttribute('src', 'https://www.youtube.com/embed/2Hj6snCdIy0');
}

function userClick6(event) {
    event.preventDefault();
    video.setAttribute('src', 'https://www.youtube.com/embed/LwG9SNeCof8');
}

function userClick7(event) {
    event.preventDefault();

    video.setAttribute('src', 'https://www.youtube.com/embed/MI9b6CMNgRY');

}
function userClick8(event) {
    event.preventDefault();
    video.setAttribute('src', 'https://www.youtube.com/embed/sgGb8BM2TBk');
}



