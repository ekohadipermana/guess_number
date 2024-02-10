'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value);
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = '⚠ No Number ⚠';
    };
});
