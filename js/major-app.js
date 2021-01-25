'use strict';

var engineerDiv = document.getElementById('engineerDiv');
var medicineDiv = document.getElementById('medicineDiv');
var itDiv = document.getElementById('itDiv');
var lawDiv = document.getElementById('lawDiv');
var sportDiv = document.getElementById('sportDiv');
var lanDiv = document.getElementById('lanDiv');
var accDiv = document.getElementById('accDiv');
var geoDiv = document.getElementById('geoDiv');

var video = document.getElementById('video');


engineerDiv.addEventListener('click', userClick1);
medicineDiv.addEventListener('click', userClick2);
itDiv.addEventListener('click', userClick3);
lawDiv.addEventListener('click', userClick4);
sportDiv.addEventListener('click', userClick5);
lanDiv.addEventListener('click', userClick6);
accDiv.addEventListener('click', userClick7);
geoDiv.addEventListener('click', userClick8);



function userClick1(event) {
    event.preventDefault();
    video.removeAttribute('src', 'https://www.youtube.com/embed/MSjPW4ZMtus');
    video.setAttribute('src', 'https://www.youtube.com/embed/bipTWWHya8A');
}

function userClick2(event) {
    event.preventDefault();
    video.removeAttribute('src', 'https://www.youtube.com/embed/MSjPW4ZMtus');
    video.setAttribute('src', 'https://www.youtube.com/embed/FCAU4D-uG8Q');
}

function userClick3(event) {
    event.preventDefault();
    video.removeAttribute('src', 'https://www.youtube.com/embed/MSjPW4ZMtus');
    video.setAttribute('src', 'https://www.youtube.com/embed/Gt8xiJyJ2Sc');
}

function userClick4(event) {
    event.preventDefault();
    video.removeAttribute('src', 'https://www.youtube.com/embed/MSjPW4ZMtus');
    video.setAttribute('src', 'https://www.youtube.com/embed/HpBIv-3ou0E');
}

function userClick5(event) {
    event.preventDefault();
    video.removeAttribute('src', 'https://www.youtube.com/embed/MSjPW4ZMtus');
    video.setAttribute('src', 'https://www.youtube.com/embed/2Hj6snCdIy0');
}

function userClick6(event) {
    event.preventDefault();
    video.removeAttribute('src', 'https://www.youtube.com/embed/MSjPW4ZMtus');
    video.setAttribute('src', 'https://www.youtube.com/embed/LwG9SNeCof8');
}

function userClick7(event) {
    event.preventDefault();
    video.removeAttribute('src', 'https://www.youtube.com/embed/MSjPW4ZMtus');
    video.setAttribute('src', 'https://www.youtube.com/embed/MI9b6CMNgRY');

}

function userClick8(event) {
    event.preventDefault();
    video.removeAttribute('src', 'https://www.youtube.com/embed/MSjPW4ZMtus');
    video.setAttribute('src', 'https://www.youtube.com/embed/sgGb8BM2TBk');
} 
