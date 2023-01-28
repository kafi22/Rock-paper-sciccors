
 let showScore = document.querySelector('.scores');
 let showDisplay = document.querySelector('.display');
 let showResult = document.querySelector('.show-result');

let totalScore = {playerScore : 0, computerScore : 0}

function getComputerChoice() {
      let randomText = ['Rock', 'Paper', 'Scissors']

      let randomNum = Math.floor(Math.random() * randomText.length)
     
      return randomText[randomNum]
}



function getResult (playerChoice, computerChoice) {
      let score = 0

      if(playerChoice == computerChoice) {
            score = 0
      } else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
            score = 1
      } else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
            score = 1
      } else if( playerChoice == 'Scissors' && computerChoice == "Paper" ){
            score = 1
      } else {
            score = -1
      }

      return score;
}

function playGame() {
      

let btns = document.querySelectorAll('.btn');

btns.forEach( btn => {
      btn.addEventListener('click', () => {
            
            let computerChoice = getComputerChoice()
            
            let playerChoice = btn.value;

            let scores = getResult(playerChoice,computerChoice);
            totalScore.playerScore += scores

            showGame(scores,playerChoice,computerChoice)

      })
})


}

playGame()


function showGame(score, playerChoice,computerChoice) {

     
      if(score === -1) {
           
            showScore.innerHTML = `You lose!`
           
      } else if(score === 0) {
      
            showScore.innerHTML = `It's a tie!`
      } else {
            
            showScore.innerHTML = `You Won!`
      }

      showDisplay.innerHTML = `👨 ${playerChoice} vs  ${computerChoice}` 
      showResult.innerHTML = ` Your Scores: ${totalScore['playerScore']}`
}

document.getElementsByClassName('playBtn')[0].addEventListener('click', () => {

      totalScore['playerScore'] = 0
      totalScore['computerScore'] = 0
      showScore.innerHTML = '';
      showDisplay.innerHTML  = '';
      showResult.innerHTML = '';  
})


