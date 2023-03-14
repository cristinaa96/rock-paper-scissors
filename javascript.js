function getComputerChoice(){
    let i = Math.floor(Math.random() * 3);
    let outcome = i;

    if (i === 0) {
        outcome = "Rock";
    } else if (i === 1){
        outcome = "Paper";
    }
    else if(i === 2){
        outcome = "Scissors";
    } else{
        outcome = "Invalid";
    }
    return outcome;
}

function getPlayerChoice(){
    let playerInput = window.prompt();
    return playerInput;
}

var playerScore = 0;
var compScore = 0;

function playRound(playerSelection,computerSelection) {
    let roundResult = "None.";
   let playSel = playerSelection.toUpperCase();
   let compSel = computerSelection.toUpperCase();

    if (playSel === "ROCK" && compSel === "SCISSORS" || playSel === "PAPER" && compSel === "ROCK" || playSel === "SCISSORS" && compSel === "PAPER"){
        roundResult = playerScore += 1;
   } else if (playSel === "ROCK" && compSel === "PAPER" || playSel === "PAPER" && compSel === "SCISSORS" || playSel === "SCISSORS" && compSel === "ROCK"){
        roundResult = compScore += 1;  
   } else if (playSel === compSel){
    roundResult = "Tie";
   }
    else {
        console.log("Player entered invalid input!");
   }
   return roundResult;
}



function game(){
        for (let i = 0; i < 5; i++){

            let playerSelection = getPlayerChoice();
            let computerSelection = getComputerChoice();
            playRound(playerSelection,computerSelection);

            console.log("Player selected: " + playerSelection);
            console.log("Computer Selected: " + computerSelection);
            console.log("Player score: " + playerScore);
            console.log("Computer score: " + compScore);
    }
}


function scoreResults(){
    
                
        let winner = "No one.";
        if (playerScore > compScore){
            winner = "Player wins!";
        } else if (compScore > playerScore){
            winner = "Computer wins!";
        }
        else{
            winner = "It's a tie!"            
        }
        return winner;

    }
    
game();
console.log("End results: " + scoreResults());