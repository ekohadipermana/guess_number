'use strict';
let score = 20;
document.querySelector('.score').textContent = score;
let theNumber = 5;
let theGuess = Number(document.querySelector('.guess').value);
// console.log(theGuess);

let checkGuess = function () {
    while (score > 0) {
        // console.log(score);
        // score--;
        if (theGuess > theNumber) {
            console.log('too high');
            score--;
        } 
    }

}
document.querySelector('.check').addEventListener('click', checkGuess);


// document.querySelector('.score').textContent;

// document.querySelector('.number').textContent = theNumber;






/*
while (score > 0) {
    if (theGuess > theNumber) {
        document.querySelector('.message').textContent = 'Too High';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if (theGuess < theNumber) {
        document.querySelector('.message').textContent = 'Too Low';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if (theGuess === theNumber) {
        document.querySelector('.message').textContent = 'Bingo';
    }
}
document.querySelector('.message').textContent = 'You lose';
*/
