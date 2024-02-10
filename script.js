'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/
// creating a random number between 1 and 20
let theNumber = Math.floor(Math.random() * 20 + 1);
document.querySelector('.number').textContent = randomNumber;
let score = 20;

console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.guess').value);
let clicked = function() {
    console.log(document.querySelector('.message').textContent = 'clicked');
}
// document.querySelector('.check').addEventListener('click', clicked);
console.log(document.querySelector('.score').textContent)

// let theNumber = 10;
// let score = 5;
let checkGuess = function() {
    theGuess = Number(document.querySelector('.guess').value);
    if (score > 1) {
        if (theGuess > theNumber) {
            document.querySelector('.message').textContent = 'Too high';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if (theGuess < theNumber) {
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if (theGuess === theNumber) {
            document.querySelector('.message').textContent = 'Correct!';
        }
    }
    else {
        document.querySelector('.message').textContent = 'Lose!';
    }
  

}
document.querySelector('.check').addEventListener('click', checkGuess);


