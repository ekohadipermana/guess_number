'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/
// creating a random number between 1 and 20
let randomNumber = Math.random().20 + 1;


document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value);
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = '⚠ No Number ⚠';
    };
});
