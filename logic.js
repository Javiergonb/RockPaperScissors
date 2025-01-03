//We want to create a simple consolo Rock Paper Scissors game
// lets start out with a simplep problem of generating the three possibilites at random

//first create a rand function that returns numbers 0 to 2
// 0 means paper, 1 means rock and 2 means scissors




function generateRandomRockPaperScissors(){
    const randomNum = Math.floor((Math.random())*3 );

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

//Rock loses against paper but wins against scissors



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let playRound = function (humanChoice,computerChoice){
        let parsedHumanChoice = humanChoice.toLowerCase();
    
        if(parsedHumanChoice === computerChoice) {
            console.log("Its a DRAW!")
        }
        else if( (parsedHumanChoice === "rock" && computerChoice === "paper") ||
            (parsedHumanChoice === "scissors" && computerChoice === "rock") ||
            (parsedHumanChoice === "paper" && computerChoice === "scissors")
        ) {
            computerScore++
            console.log("YOU LOSE! " + computerChoice + " BEATS " + parsedHumanChoice)
        } 
        else {
            humanScore++
            console.log("YOU WIN " + humanChoice + " beats " + computerChoice)
        }
        console.log("YOUR SCORE: " + humanScore +  "\n" + "THE COMPUTERS SCORE: " + computerScore)
    
    }


    let round = 0
    while(round < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection,computerSelection);
        round++
    }
}

playGame()




