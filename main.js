'use script'

const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-bnt');
const clue = document.querySelector('.js-clue');
const trys = document.querySelector('.js-div');
const numberScore = document.querySelector('.js-span');
let score = 0;
const resultNumber = getRandomNumber(100);

function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}

function game (){
    
    const valueInput = input.value;
    console.log ('Mi número aleatorio es',resultNumber)
   
    if ((valueInput === "") || (valueInput > 100) || (valueInput < 0)){
      clue.innerHTML = 'Pista: El numero debe estar entre 1 y 100'
    }else if (valueInput > resultNumber){
      clue.innerHTML = 'Pista: Demasiado alto';
    }else if (valueInput < resultNumber){
      clue.innerHTML = 'Pista: Demasiado bajo';
    }else if (valueInput == resultNumber){
      clue.innerHTML = 'Has ganado!!  :)'
    }
    numberScore.innerHTML = score;
    
}



function handleClick (event){
  event.preventDefault();
  game() 
  score++
    
}

btn.addEventListener ('click', handleClick);