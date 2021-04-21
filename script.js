'use strict';

let secretNumber = Math.trunc(Math.random() * 20 /*0 - 19*/) + 1; // 1 - 20;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayNumber = function (value) {
    document.querySelector('.number').textContent = value;
}

const displayScore = function (value) {
    document.querySelector('.score').textContent = value;
}

const changeStyle = function (value) {
    let color = '';
    let width = '';

    switch (value) {
        case 'default':
            color = '#222';
            width = '15rem';
            break;
        case 'wins':
            color = '#60b347';
            width = '30rem';
            break;
    }

    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('.number').style.width = width;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    
    // When there is no input
    if(!guess){ 
        displayMessage('📛 No number!');

        // When player wins
    } else if (guess === secretNumber){
        displayMessage('🎊 Correct Number!');
        displayNumber(secretNumber);

        changeStyle('wins');

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if(guess !== secretNumber) {
        if (score > 1){
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            displayScore(score);
        }else {
            displayMessage('💥 You lost the game!');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function (){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    displayMessage('Start guessing...');
    displayNumber('?');
    displayScore(score);
    document.querySelector('.guess').value = '';

    changeStyle('default');
});
