/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable eqeqeq */
/* eslint-disable no-redeclare */
/* eslint-disable new-cap */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */


'use strict';
function togglesidebar() {
    document.getElementById('side-bar').classList.toggle('active');
}
// declare variables
var allQustion = [];
var mathQustion = [];
var englishQustion = [];
var computerQustion = [];
var qustionCounter = 0;
var marks;

document.getElementById('end').style.display = 'none';
document.getElementById('form').style.display = 'none';
// The Constructor
function theQuestion(name, text, option, result) {
    this.name = name;
    this.text = text;
    this.options = [option[0], option[1], option[2], option[3]];
    this.result = result;
    allQustion.push(this);
    if (this.name == 'math') {
        mathQustion.push(this);
    }
    else if (this.name == 'english') {
        englishQustion.push(this);
    }
    else if (this.name == 'computer') {
        computerQustion.push(this);
    }
}
// Craete Objects and putting the data 
new theQuestion('math', 'If (X+5)*20=150 What is the X value:', [1.5, 1, 3.5, 2.5], 2.5);
new theQuestion('math', 'What is the smallest number between these:', [3, -7, -3, 0], -7);
new theQuestion('math', 'The number 60 is divisible by', [2, 3, 5, 'all of the above'], 'all of the above');
new theQuestion('math', 'what is the non-prime number between these', [23, 19, 22, 13], 22);
new theQuestion('math', 'what is the non-prime number and  non-compound at the same time', [-3, 2, 3, 1], 1);
new theQuestion('english', 'Roberta _____ from The United States.', ['are', 'is', 'am', 'be'], 'is');
new theQuestion('english', 'What’s _____ name?', ['you', 'his', 'him', 'he'], 'his');
new theQuestion('english', 'My friend _____ in London.', ['living', 'live', 'lives', 'is live'], 'lives');
new theQuestion('english', 'Where _____?', ['works Tom', 'Tom works', 'Tom does work', 'does Tom work'], 'does Tom work');
new theQuestion('english', 'I _____ coffee.', ['no like', 'not like', 'like don’t', 'don’t like'], 'don’t like');
new theQuestion('computer', ' (CPU) stands For:', ['Central Programming Unit.', 'Categorized Program Unit', 'Central Processing Unit.', 'Central Program Uniform.'], 'Central Processing Unit.');
new theQuestion('computer', 'Which of the following will have the most impact on the performance of your computer?', ['Adding more RAM', 'Adding a Hard disk', 'Disconnecting the Printer', 'Disconnecting the Internet'], 'Adding more RAM');
new theQuestion('computer', 'The advantage(s) of e-commerce:', [' It is available 24 hours 7 days a week', '. You can compare the products of many companies', 'It saves time of receiving the product', 'All of the answers'], 'All of the answers');
new theQuestion('computer', 'What is a URL?', ['An email address', 'The title of a web site', 'The address of a page on the World Wide Web', 'A communication method between computers and printers'], 'The address of a page on the World Wide Web');
new theQuestion('computer', 'Which of the following network connects usually the computers in one building or in a single room?', ['WAN', 'LAN', 'FAN', 'MAN'], 'LAN');

// The Button Of Majors
var btn = document.getElementById('math');
btn.addEventListener('click', forMath);
function forMath(event) {
    event.preventDefault();
    document.getElementById('form').style.display = '';
    document.getElementById('math').style.display = 'none';
    document.getElementById('english').style.display = 'none';
    document.getElementById('computer').style.display = 'none';
    qustionCounter = 0;
    addQustion(mathQustion[qustionCounter]);
    applyQustion(mathQustion, 'math');
    btn.removeEventListener('click', forMath);
}
var btn = document.getElementById('english');
btn.addEventListener('click', forEnglish);
function forEnglish(event) {
    event.preventDefault();
    document.getElementById('form').style.display = '';
    document.getElementById('math').style.display = 'none';
    document.getElementById('english').style.display = 'none';
    document.getElementById('computer').style.display = 'none';
    qustionCounter = 0;
    addQustion(englishQustion[qustionCounter]);
    applyQustion(englishQustion, 'english');
    btn.removeEventListener('click', forEnglish);
}
var btn = document.getElementById('computer');
btn.addEventListener('click', forComputer);
function forComputer(event) {
    event.preventDefault();
    document.getElementById('form').style.display = '';
    document.getElementById('math').style.display = 'none';
    document.getElementById('english').style.display = 'none';
    document.getElementById('computer').style.display = 'none';
    qustionCounter = 0;
    addQustion(computerQustion[qustionCounter]);
    applyQustion(computerQustion, 'computer');
    btn.removeEventListener('click', forComputer);
}
// add Question to the HTML
function addQustion(qustion) { 
    var text = document.getElementById('text');
    text.textContent = qustion.text;
    var label;
    var radio;
    for (var i = 1; i < 5; i++) {
        label = document.getElementById('label' + i);
        label.textContent = qustion.options[i - 1];
        radio = document.getElementById('option' + i);
        radio.value = label.textContent;
    }
    document.getElementById('option1').checked = true;
}
// the calculation for the exam
function applyQustion(qustions, key) {
    var form = document.getElementById('form');
    form.addEventListener('submit', next);
    function next(event) {
        event.preventDefault();
        for (var i = 1; i < 5; i++) {
            if (document.getElementById('option' + i).checked) {
                localStorage.setItem(key + ' : ' + qustionCounter, JSON.stringify(document.getElementById('option' + i).value));
            }
        }
        qustionCounter = qustionCounter + 1;
        if (qustionCounter === qustions.length) {
            document.getElementById('next').style.display = 'none';
            document.getElementById('end').style.display = '';
            form.addEventListener('submit', theResult);
            form.removeEventListener('submit', next);


        } else if (qustionCounter === qustions.length - 1) {
            addQustion(qustions[qustionCounter]);
            document.getElementById('next').style.display = 'none';
            document.getElementById('end').style.display = '';
        }
        else if (qustionCounter < qustions.length - 1) {
            addQustion(qustions[qustionCounter]);
        }
    }
    function theResult(event) {
        event.preventDefault();
        var results;
        var mark = 0;
        var result = document.getElementById('theResult');
        var line;
        for (var i = 0; i < qustions.length; i++) {
            results = JSON.parse(localStorage.getItem(key + ' : ' + i));
            line = document.createElement('li');
            line.textContent = qustions[i].text + '  Your answer is: ' + results + ' The Correct is: ' + qustions[i].result.toString();
            if (results.toString() == qustions[i].result.toString()) {
                mark++;
            }
            result.appendChild(line);
        }
        line = document.createElement('li');
        line.textContent = 'Your Result in ' + key + ' is : ' + mark;
        result.appendChild(line);
        form.removeEventListener('submit', theResult);
    }
}

var slideIndex = 0;
showSlides();
function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
 displayNone();
    slides[slideIndex].style.display = "block";
    slideIndex++;
    if (slideIndex == slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 3000); // Change image every 1 seconds
}

function displayNone() {
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
} 

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

  