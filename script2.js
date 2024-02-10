'use strict';
let score = 20;
let theNumber = 5;
// document.querySelector('.score').textContent;
theGuess = Number(document.querySelector('.guess').textContent);

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