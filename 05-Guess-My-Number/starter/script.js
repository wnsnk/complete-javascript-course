'use strict';


let randomNum = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
let score = 20;
const scoreLabel = document.querySelector('.score');
const body = document.querySelector('body');
const numberLabel = document.querySelector('.number');
const highscoreLabel = document.querySelector('.highscore')
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    
    if (score > 0) {
        if (!guess) {
            message.textContent = 'No Number';
        } else if (guess === randomNum) {
            message.textContent = 'Correct';
            numberLabel.textContent = randomNum
            body.style.backgroundColor = 'green'

            if (score > highscoreLabel.textContent) {
                highscoreLabel.textContent = score;
            }
            
        } else if (guess < randomNum) {
            message.textContent = 'Too low';
            score --;
            scoreLabel.textContent = score;
        } else {
            message.textContent = 'Too high';
            score --;
            scoreLabel.textContent = score;
        }
    } else {
        message.textContent = 'You lost!'
    }})

document.querySelector('.again').addEventListener('click', function() {
    randomNum = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    scoreLabel.textContent = score;
    body.style.backgroundColor = '#222';
    message.textContent = 'Start guessing...';
    numberLabel.textContent = '?';
    document.querySelector('.guess').value = ''
    



})