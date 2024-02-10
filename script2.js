console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.guess').value);
let clicked = function() {
    console.log(document.querySelector('.message').textContent = 'clicked');
}
// document.querySelector('.check').addEventListener('click', clicked);
console.log(document.querySelector('.score').textContent)

let theNumber = 10;
let score = 5;
let checkGuess = function() {
    
    while (score > 0) {
        document.querySelector('.score').textContent = score;
        theGuess = Number(document.querySelector('.guess').value);
        if (theGuess > theNumber) {
            document.querySelector('.message').textContent = 'Too high';
            
        }
        score--;
    }

}
document.querySelector('.check').addEventListener('click', checkGuess);