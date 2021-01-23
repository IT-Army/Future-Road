'use strict';

var engineerDiv = document.getElementById ('engineer') ; 
var medicalDiv = document.getElementById ('medical') ; 
var itDiv = document.getElementById ('IT') ; 
var lawDiv = document.getElementById ('law') ; 

var video = document.getElementById('video') ;


engineerDiv.addEventListener ('click' , userClick1) ;
medicalDiv.addEventListener ('click' , userClick2) ;
itDiv.addEventListener ('click' , userClick3) ;
lawDiv.addEventListener ('click' , userClick4) ;



function userClick1 (event) {
    event.preventDefault() ; 
    
    video.setAttribute('src', 'https://www.youtube.com/embed/bipTWWHya8A'); 
    
}

function userClick2 (event) {
    event.preventDefault() ; 
    
    video.setAttribute('src', 'https://www.youtube.com/embed/FCAU4D-uG8Q'); 
    
}

function userClick3 (event) {
    event.preventDefault() ; 
    
    video.setAttribute('src', 'https://www.youtube.com/embed/Gt8xiJyJ2Sc'); 
    
}

function userClick4 (event) {
    event.preventDefault() ; 
    
    video.setAttribute('src', 'https://www.youtube.com/embed/HpBIv-3ou0E'); 
    
}




