
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var imageName = "Dice/" + randomNumber1 + '.png';
document.querySelectorAll('img')[0].setAttribute('src', imageName);


var randomNumber2 = Math.floor(Math.random()*6) + 1;
var imageName1 = "Dice/" + randomNumber2 + '.png';
document.querySelectorAll('img')[1].setAttribute('src', imageName1);


if (randomNumber1 > randomNumber2 ) {
	document.querySelectorAll('h1')[1].innerHTML = "Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
	document.querySelectorAll('h1')[1].innerHTML="Player 2 wins"
}
else {
	document.querySelectorAll('h1')[1].innerHTML="Match Draw !!!"
}

