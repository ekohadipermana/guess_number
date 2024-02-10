


// alternatives
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
        document.querySelector('.score').textContent = score;
    }
}

// Third alternative
let checkGuess3 = function () {
    let guess = Number(document.querySelector('.guess').value);
    while (score > 0) {
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
    document.querySelector('.message').textContent = '⛔You lose';
}

document.querySelector('.check').addEventListener('click', checkGuess3);

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