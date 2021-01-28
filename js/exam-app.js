'use strict';
// declare variables
var allQustion = [];
var qustionCounter = 0;

// The Constructor
function theQuestion(name, text, option, result) {
    this.name = name;
    this.text = text;
    this.options = [option[0], option[1], option[2], option[3]];
    this.result = result;
    allQustion.push(this);
}
// Craete Objects and putting the data
new theQuestion('IQ', 'Which is the odd one out?', ['ROOSTER', 'BUCK', 'GANDER', 'PEN'], 'PEN');
new theQuestion('IQ', 'What is the value of x? 64 – 12 × 2 + 6 ÷ 3 = x', [50, 40, 42, 52], 42);
new theQuestion('memorize', 'When did World War 1 end?', [1917, 1923, 1918, 1920], 1918);
new theQuestion('memorize', 'What is the capital of Vietnam?', ['Buenos Aires', 'Addis Ababa', 'Kabul', 'Hanoi'], 'Hanoi');
/*

new theQuestion('IQ', 'What word means the same as the word in capitals? FORTE', ['endowment', 'conduct', 'talent', 'redoubt', 'style'], 'Talent');
new theQuestion('IQ', 'What number comes next in this sequence: 25, 32, 27, 36?', [7, 17, 37, 27], 27);
new theQuestion('IQ', 'What number should replace the question mark? 926 : 24 / 799 : 72 / 956 : ?', [60, 51, 81, 20], 51);
new theQuestion('IQ', 'Which word means the same as ANCHORITE?', ['recluse', 'hieroglyphics', 'trammel', 'lackey'], 'recluse');
new theQuestion('IQ', 'What is the value of x? 64 – 12 × 2 + 6 ÷ 3 = x', [50, 40, 42, 52], 42);
new theQuestion('IQ', 'What is the name given to a group of ROOKS?', ['murmuration', 'park', 'building', 'set'], 'building');
new theQuestion('IQ', 'FELINE: CAT  //  VULPINE:?', ['deer', ' sheep', 'wolf', 'fox'], 'fox');
new theQuestion('IQ', 'Which two numbers come next in this sequence? 38, 24, 62, 12, 74, ?', ['20, 100', '28,100', '15, 102', '28, 102'], '28, 102');
new theQuestion('IQ', 'Which is the odd one out?', ['ROOSTER', 'BUCK', 'GANDER', 'PEN'], 'PEN');
new theQuestion('IQ', 'What is always associated with a CARBOY?', ['a mechanic', 'a bell boy', 'basketwork', 'a valet'], 'basketwork');
new theQuestion('IQ', 'What number should replace the question mark?61, 54, 62, ?, 63, 56, 64', [48, 55, 102, 50], 55);
new theQuestion('IQ', 'What is the name given to a group of HERRINGS?', ['caste', 'quiver', 'glean', ' sedge'], 'glean');
new theQuestion('IQ', 'What is the value of x? 7 × 9 – 3 × 4 + 10 = x', [55, 50, 66, 61], 61);
new theQuestion('IQ', 'What is a BURGEE a type of?', ['elastic', 'food', 'flag', 'rope'], 'flag');
new theQuestion('IQ', 'Which number comes next in this sequence?1, 2, 0, 3, –1, 4, ?', [-2, -3, 0, -5], -2);
new theQuestion('IQ', 'What, with reference to this question, is the next number in the sequence? 3, 3, 5, 1, 3, 4, 1, 2, 3, 4, 1, 2, ?', [0, 3, 4, 5], 4);
new theQuestion('IQ', 'What is always associated with DOLMEN?', ['clothes', 'ironwork', ' a statue', 'stone'], 'stone');
new theQuestion('IQ', 'What is the name given to a group of FINCHES?', ['a pace', 'a nest', 'a cluster', 'a charm'], 'a charm');
new theQuestion('IQ', 'What is the value of x? –8 + 6 × 8 – 2 × 5 = x', [28, 20, 30, 28], 30);
new theQuestion('IQ', 'What number should replace the question mark? 27, 31, ?, 32, 29, 33, 30', [27, 28, 30, 31], 28);
new theQuestion('memorize', 'When did World War 1 happened?', [1920, 1918, 1905, 1914], 1914);
new theQuestion('memorize', 'When did Cold War happen?', [1947, 1945, 1950, 1952], 1947);
new theQuestion('memorize', 'When did Oslo Accord?', [1990, 1989, 1996, 1993], 1993);
new theQuestion('memorize', 'What is the capital of Vietnam?', ['Buenos Aires', 'Addis Ababa', 'Kabul', 'Hanoi'], 'Hanoi');
new theQuestion('memorize', 'When did World War 2 happened?', [1945, 1940, 1930, 1939], 1939);
new theQuestion('memorize', 'Where is the Hanging Gardens of Babylon located?', ['Egypt', 'Iraq', 'Jordan', 'Lebanon'], 'Iraq');
new theQuestion('memorize', 'When did World War 2 end?', [1935, 1945, 1950, 1940], 1945);
new theQuestion('memorize', 'Where is Petra located?', ['Egypt', 'Iraq', 'Jordan', 'Lebanon'], 'Jordan');
new theQuestion('memorize', 'When did Cold War end?', [1990, 1970, 1980, 1991], 1991);
new theQuestion('memorize', 'Where is the Statue of Zeus located?', ['Tokyo', 'Addis Ababa', 'Lima', 'Olympia'], 'Olympia');
new theQuestion('memorize', 'When did the Second Intifada happen?', [1997, 2000, 2001, 1998], 2000);
new theQuestion('memorize', 'What is the capital of China?', ['Lima', 'Tokyo', 'Beijing', 'Kabul'], 'Beijing');
new theQuestion('memorize', 'When did Camp David Accord?', [1978, 1980, 1982, 1984], 1978);
new theQuestion('memorize', 'What is the capital of Japan?', ['Tokyo', 'Addis Ababa', 'Lima', 'Moscow'], 'Tokyo');
new theQuestion('memorize', 'Where are the pyramids located?', ['Egypt', 'Iraq', 'Jordan', 'Lebanon'], 'Egypt');
new theQuestion('memorize', 'Where is the Taj Mahal located?', ['India', 'Lima', 'Moscow', 'Olympia'], 'India');
new theQuestion('memorize', 'When did the Arab Revolt happen?', [1922, 1920, 1916, 1918], 1916);
new theQuestion('memorize', 'What is the capital of Russia?', ['Buenos Aires', 'Addis Ababa', 'Lima', 'Moscow'], 'Moscow');
new theQuestion('memorize', 'When did World War 1 end?', [1917, 1923, 1918, 1920], 1918);
new theQuestion('memorize', 'What is the capital of Iran?', ['Addis Ababa', 'Kabul', 'Hanoi', 'Tehran'], 'Tehran');*/

var doc=document.getElementById("container");
// add Question to the HTML
function addQustion(qustion) {
    var theName=document.getElementById("name");
    theName.textContent="This Qustion From Section: "+qustion.name;
    var num = document.getElementById('num');
    num.textContent ='The Counter '+ (qustionCounter + 1);
    var text = document.getElementById('text');
    text.textContent = 'Q. ' + qustion.text;
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

var form = document.getElementById('form');
form.style.display = 'none';
var btn = document.getElementById('start');
btn.addEventListener('click', theExam);

function theExam(event) {
    event.preventDefault();
    doc.style.display='';
    btn.removeEventListener('click', theExam);
    btn.style.display = 'none';
    var qustion = allQustion[qustionCounter];
    addQustion(qustion);
    form.style.display = '';
    form.addEventListener('submit', next);
    function next(event) {
        event.preventDefault();
        if (qustionCounter < allQustion.length) {
            for (var i = 1; i < 5; i++) {
                if (document.getElementById('option' + i).checked) {
                    localStorage.setItem(qustion.name + ' : ' + qustionCounter, JSON.stringify(document.getElementById('option' + i).value));
                }
            }
        }
        if (qustionCounter == allQustion.length) {
            document.getElementById('next').value = 'Result';
            form.addEventListener('submit', theResult);
            form.removeEventListener('submit', next);
        }
        qustionCounter = qustionCounter + 1;
        if (qustionCounter < allQustion.length) {
            qustion = allQustion[qustionCounter];
            addQustion(qustion);
        }
        if (qustionCounter == allQustion.length - 1) {
            document.getElementById('next').value = 'End';
        }
    }

    function theResult(event) {
        event.preventDefault();
        var results;
        var iq = 0;
        var mem = 0;
        for (var i = 0; i < allQustion.length / 2; i++) {
            results = JSON.parse(localStorage.getItem('IQ' + ' : ' + i));
            if (results == allQustion[i].result) {
                iq = iq + 1;
            }
        }
        for (var i = allQustion.length / 2; i < allQustion.length; i++) {
            results = JSON.parse(localStorage.getItem('memorize' + ' : ' + i));
            if (results == allQustion[i].result) {
                mem = mem + 1;
            }
        }
        var re=document.getElementById('result');
        if(12 <=iq){
            re.textContent='The Result: You have a special way of thinking and analyzing, we advise you to choose a major that needs a lot of logic. For example, Engineer, Mathematical, and IT. Wish you the best of luck!.';
        }
        else if(12 <= mem){
            re.textContent='The Result: You have a special way to keep memorize things, impressive! we advise you to choose one of these: literature, history, and Geography.Wish you the best of luck!.';
        }
        else{
            re.textContent='The Result: Good job, we advise you to try the Fine arts, press, and media.';
        }
    }

}
