'use strict';

const getRandom = function () {
    return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = getRandom(),
    score = 20,
    highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = getRandom();
    let guessedNumber = document.querySelector('.number'),
        currentScore = document.querySelector('.score');

    displayMessage('Starting guessing...');
    guessedNumber.textContent = '?';
    score = 20;
    currentScore.textContent = score;

    document.querySelector('#h1').textContent = 'Guess My Number!';
    document.querySelector('.check').disabled = false;
    document.querySelector('.check').textContent = 'Check';
    document.body.style.background = '#222';
    guessedNumber.style.background = '#eee';
    document.querySelector('.guess').value = 0;
});

document.querySelector('.check').addEventListener('click', function () {
    const numberOfGuessValue = Number(document.querySelector('.guess').value);
    let message = document.querySelector('.message'),
        guessedNumber = document.querySelector('.number'),
        currentScore = document.querySelector('.score');

    if (numberOfGuessValue <= 0 || numberOfGuessValue > 20) {
        displayMessage('⛔ Between 1 and 20 only!');
    } else if (numberOfGuessValue !== secretNumber) {
        if (score > 1) {
            displayMessage(
                numberOfGuessValue > secretNumber
                    ? '📈 Too high!'
                    : '📉 Too low!'
            );
            score--;
            currentScore.textContent = score;
        } else {
            displayMessage('😭 Game over!');
            currentScore.textContent = 0;
            document.body.style.background = '#db3135';
        }
    } else {
        guessedNumber.textContent = secretNumber;
        score++;
        currentScore.textContent = score;
        document.querySelector('#h1').textContent = 'Congratulation!!!';
        this.disabled = true;
        this.textContent = '🏆 Winner!';
        document.body.style.background = 'green';
        guessedNumber.style.background = 'white';

        if (highScore < currentScore.textContent) {
            highScore = score;
            document.querySelector('.highscore').textContent =
                currentScore.textContent;
        }
        displayMessage('🎉 Correct number!');
    }
});
