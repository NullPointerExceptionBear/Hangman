/* eslint-env browser */
var wrdBank = ["words", "fart", "water", "fire", "dragon", "racecar", "javascript", 'beaver', 'turtle', 'bear', 'kite', 'letter', 'china', 'jeep', 'plane', 'computer'], wrongCt = 0;
function newWord() {
	var c = Math.floor(Math.random() * wrdBank.length);
	var myWord = wrdBank[c];
	return myWord;
}
function hideWord(w) {
	var x = 0, wr = '';
	
	for (x = 0; x < w.length; x++) {
		wr += '-';
	}
	return wr;
}
function rplc(w, index, str) {
	return w.substr(0, index) + str + w.substr(index + 1);
}

var wrd = newWord();
var hide = hideWord(wrd);

//img src
var imgMan = ['gallows_1.jpg', 'gallows_2.jpg', 'gallows_3.jpg', 'gallows_4.jpg', 'gallows_5.jpg', 'gallows_6.jpg', 'gallows_7.jpg', 'gallows_8.jpg', 'gallows_9.jpg'];

function clearNote() {
	document.getElementById("note").innerHTML = "";
}

function newGame(h, w) {
	document.getElementById("word").innerHTML = h;
    w = 0;
	document.getElementById('gallows').src = "gallows.jpg";
	setTimeout(clearNote, 2000);
}

window.onload = newGame(hide, wrongCt);

function checkLetter(elmt, daWord, hidden) {
	elmt = elmt.toLowerCase();
	var x = 0, clr = false;
	//if letter is right
	for (x = 0; x < daWord.length; x++) {
		if (elmt === daWord.charAt(x)) {
			hidden = rplc(hidden, x, elmt);
			document.getElementById("word").innerHTML = hidden;
			hide = hidden;
            clr = true;
		}
	}
	
	//if letter is wrong
    if (clr == false) {
        document.getElementById('gallows').src = imgMan[wrongCt];
        wrongCt++;
    }
    clr = false;
	//after x number of turns EndGame/restart
	if (wrongCt == 9) {
			wrd = newWord();
			hide = hideWord(wrd);
			wrongCt = 0;
		document.getElementById("note").innerHTML = "That Sucks";
			newGame(hide, wrongCt);
		}
	//on win
	if(hidden.valueOf() == daWord.valueOf()) {
		wrd = newWord();
		hide = hideWord(wrd);
		wrongCt = 0;
		document.getElementById("note").innerHTML = "You Win!";
		newGame(hide, wrongCt);
	}
}

//btn values
var btnVal = [document.getElementById('btnA').getAttribute('value'), document.getElementById('btnB').getAttribute('value'), document.getElementById('btnC').getAttribute('value'), document.getElementById('btnD').getAttribute('value'), document.getElementById('btnE').getAttribute('value'), document.getElementById('btnF').getAttribute('value'), document.getElementById('btnG').getAttribute('value'), document.getElementById('btnH').getAttribute('value'), document.getElementById('btnI').getAttribute('value'), document.getElementById('btnJ').getAttribute('value'), document.getElementById('btnK').getAttribute('value'), document.getElementById('btnL').getAttribute('value'), document.getElementById('btnM').getAttribute('value'), document.getElementById('btnN').getAttribute('value'), document.getElementById('btnO').getAttribute('value'), document.getElementById('btnP').getAttribute('value'), document.getElementById('btnQ').getAttribute('value'), document.getElementById('btnR').getAttribute('value'), document.getElementById('btnS').getAttribute('value'), document.getElementById('btnT').getAttribute('value'), document.getElementById('btnU').getAttribute('value'), document.getElementById('btnV').getAttribute('value'), document.getElementById('btnW').getAttribute('value'), document.getElementById('btnX').getAttribute('value'), document.getElementById('btnY').getAttribute('value'), document.getElementById('btnZ').getAttribute('value')];

//btn functions
document.getElementById('btnA').onclick = function() {checkLetter(btnVal[0], wrd, hide);}
document.getElementById('btnB').onclick = function() {checkLetter(btnVal[1], wrd, hide);}
document.getElementById('btnC').onclick = function() {checkLetter(btnVal[2], wrd, hide);}
document.getElementById('btnD').onclick = function() {checkLetter(btnVal[3], wrd, hide);}
document.getElementById('btnE').onclick = function() {checkLetter(btnVal[4], wrd, hide);}
document.getElementById('btnF').onclick = function() {checkLetter(btnVal[5], wrd, hide);}
document.getElementById('btnG').onclick = function() {checkLetter(btnVal[6], wrd, hide);}
document.getElementById('btnH').onclick = function() {checkLetter(btnVal[7], wrd, hide);}
document.getElementById('btnI').onclick = function() {checkLetter(btnVal[8], wrd, hide);}
document.getElementById('btnJ').onclick = function() {checkLetter(btnVal[9], wrd, hide);}
document.getElementById('btnK').onclick = function() {checkLetter(btnVal[10], wrd, hide);}
document.getElementById('btnL').onclick = function() {checkLetter(btnVal[11], wrd, hide);}
document.getElementById('btnM').onclick = function() {checkLetter(btnVal[12], wrd, hide);}
document.getElementById('btnN').onclick = function() {checkLetter(btnVal[13], wrd, hide);}
document.getElementById('btnO').onclick = function() {checkLetter(btnVal[14], wrd, hide);}
document.getElementById('btnP').onclick = function() {checkLetter(btnVal[15], wrd, hide);}
document.getElementById('btnQ').onclick = function() {checkLetter(btnVal[16], wrd, hide);}
document.getElementById('btnR').onclick = function() {checkLetter(btnVal[17], wrd, hide);}
document.getElementById('btnS').onclick = function() {checkLetter(btnVal[18], wrd, hide);}
document.getElementById('btnT').onclick = function() {checkLetter(btnVal[19], wrd, hide);}
document.getElementById('btnU').onclick = function() {checkLetter(btnVal[20], wrd, hide);}
document.getElementById('btnV').onclick = function() {checkLetter(btnVal[21], wrd, hide);}
document.getElementById('btnW').onclick = function() {checkLetter(btnVal[22], wrd, hide);}
document.getElementById('btnX').onclick = function() {checkLetter(btnVal[23], wrd, hide);}
document.getElementById('btnY').onclick = function() {checkLetter(btnVal[24], wrd, hide);}
document.getElementById('btnZ').onclick = function() {checkLetter(btnVal[25], wrd, hide);}