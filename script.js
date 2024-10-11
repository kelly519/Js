'use strict';

//document.querySelector('.message').textContent = 'Correct Number 👌';
//document.querySelector('.number').textContent = 23;
//document.querySelector('.guess').value = 6; 

//document.querySelector('.check').addEventListener('click', function(){
//    console.log(document.querySelector('.guess').value);
//    console.log(guess, typeof guess);
//})

let score =20;
let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // support for not entering a number by the player
    if(!guess){
        document.querySelector('.message').textContent = '🤚 Please input valid';
    }

    // check value
    //else if (guess > number){
    //    document.querySelector('.message').textContent = '😒 It is too high !'
    //}

    else if(guess > number){
        if(score>1){
            document.querySelector('.message').textContent = '😒 It is too high !'
            score--;
            document.querySelector(".score").textContent = score;
        }
        else{
            document.querySelector('.message').textContent = ' ☹️ You lost the game !';
            document.querySelector('.score').textContent = 0; 
        }
    }
    else if (guess < number){
        document.querySelector('.message').textContent = '😒 It is too low !'
    }
    else if (guess == number){
        document.querySelector('.message').textContent = '😊 It is correct number !'
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.border = '7px solid black';
        document.querySelector('.number').textContent = number;   
    }
})
