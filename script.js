'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/
// creating a random number between 1 and 20
let randomNumber = Math.floor(Math.random() * 20 + 1);
document.querySelector('.number').textContent = randomNumber;
let score = 20;

// first alternative
let checkGuess = function () {
    // console.log(document.querySelector('.guess').value);
    let guess = Number(document.querySelector('.guess').value);
    // document.querySelector('.score').textContent = score;
    if (score < 1) {
        document.querySelector('.message').textContent = '⛔You lose';
    }
    else {
        if (!guess) {
            document.querySelector('.message').textContent = '⚠ No Number ⚠';
        }
        else if (guess > randomNumber) {
            document.querySelector('.message').textContent = 'Too high';
            score -= 1;
            document.querySelector('.score').textContent = score;    
        }
        else if (guess < randomNumber) {
            document.querySelector('.message').textContent = 'Too low';
            score -= 1;
            document.querySelector('.score').textContent = score; 
        }
        else if (guess === randomNumber) {
            document.querySelector('.message').textContent = 'Bingo!';
        }
    }
}

// Second Alternative
let checkGuess2 = function () {
    // console.log(document.querySelector('.guess').value);
    let guess = Number(document.querySelector('.guess').value);
    // document.querySelector('.score').textContent = score;
    if (score > 1) {
        if (!guess) {
            document.querySelector('.message').textContent = '⚠ No Number ⚠';
        }
        else if (guess > randomNumber) {
            document.querySelector('.message').textContent = 'Too high';
            score -= 1;
            document.querySelector('.score').textContent = score;    
        }
        else if (guess < randomNumber) {
            document.querySelector('.message').textContent = 'Too low';
            score -= 1;
            document.querySelector('.score').textContent = score; 
        }
        else if (guess === randomNumber) {
            document.querySelector('.message').textContent = 'Bingo!';
        }
    }
    else {
        document.querySelector('.message').textContent = '⛔You lose';
    }
}

document.querySelector('.check').addEventListener('click', checkGuess2);

/*
document.querySelector('.check').addEventListener('click', function () {
    // console.log(document.querySelector('.guess').value);
    let guess = Number(document.querySelector('.guess').value);
    // document.querySelector('.score').textContent = score;
    if (score < 1) {
        document.querySelector('.message').textContent = '⛔You lose';
    }
    else {
        if (!guess) {
            document.querySelector('.message').textContent = '⚠ No Number ⚠';
        }
        else if (guess > randomNumber) {
            document.querySelector('.message').textContent = 'Too high';
            score -= 1;
            document.querySelector('.score').textContent = score;    
        }
        else if (guess < randomNumber) {
            document.querySelector('.message').textContent = 'Too low';
            score -= 1;
            document.querySelector('.score').textContent = score; 
        }
        else if (guess === randomNumber) {
            document.querySelector('.message').textContent = 'Bingo!';
        }
    }    
});
*/


