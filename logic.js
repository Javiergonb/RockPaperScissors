//We want to create a simple consolo Rock Paper Scissors game
// lets start out with a simplep problem of generating the three possibilites at random

//first create a rand function that returns numbers 0 to 2
// 0 means paper, 1 means rock and 2 means scissors







function generateRandomRockPaperScissors(){
    const randomNum = Math.floor((Math.random())*3);

    switch(randomNum){
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissors";       
    }
}

function getComputerChoice(){
    return generateRandomRockPaperScissors();
}

function getHumanChoice(){
    return prompt("Choose between Rock, Paper and Scissors");
}

const playRound = function (humanChoice,computerChoice) {
    const parsedHumanChoice = humanChoice.toLowerCase();
    const resultDiv = document.querySelector("#results");

    if(parsedHumanChoice === computerChoice) {
        resultDiv.textContent = "ITS A DRAW!"
    }
    else if( (parsedHumanChoice === "rock" && computerChoice === "paper") ||
        (parsedHumanChoice === "scissors" && computerChoice === "rock") ||
        (parsedHumanChoice === "paper" && computerChoice === "scissors")
    ) {
        
        resultDiv.textContent = "YOU LOSE! " + computerChoice + " BEATS " + parsedHumanChoice;
        return "Computer";
        
    } 
    else {
        
        resultDiv.textContent ="YOU WIN " + humanChoice + " beats " + computerChoice;
        return "Human";
    }
    
}
function checkGameState(round,display){
    if(round === 5){
        
    }
}

const buttonCleanUp = function(buttons){
    buttons.forEach((button) => {
        button.disabled = true;
    });
}


const playGame = function () {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;
    const scoreDisplay = document.querySelector("#Score");
    const roundDisplay = document.querySelector("#Round");
    const buttons = document.querySelector("#playerChoiceContainer").childNodes;
    
    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        let result = playRound(button.textContent,getComputerChoice());
        if (result === "Human"){
            humanScore++;
            
        }
        else {
            computerScore++;
        }
        scoreDisplay.textContent = "YOU: " + humanScore + " COMPUTER: " + computerScore;
        rounds++;
        roundDisplay.textContent = "Round: " + rounds;
        if(rounds === 5){
            if(computerScore > humanScore){
                roundDisplay.textContent = "YOU LOSE HAHA"
            }
            else{
                roundDisplay.textContent = "YOU WON!"
            }
            buttonCleanUp(buttons);
        }
        
    });
  });


}

playGame();



