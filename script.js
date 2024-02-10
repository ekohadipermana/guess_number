'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
