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

let round = 0;
let playerScore = 0;
let compScore = 0;

function playRound(playerSelection,computerSelection) {
    let roundResult = "No one";
   let playSel = playerSelection.toUpperCase();
   let compSel = computerSelection.toUpperCase();
   if (playSel === "ROCK" && compSel === "SCISSORS"){
        playerScore += 1;
        roundResult = "Player wins! Rock beats scissors!";
   } else if (playSel === "ROCK" && compSel === "PAPER"){
        compScore += 1;
        roundResult = "Computer wins! Paper beats rock!"
   } else if (playSel === "PAPER" && compSel === "ROCK"){
        playerScore += 1;
        roundResult = "Player wins! Paper beats rock!";
   } else if (playSel === "PAPER" && compSel === "SCISSORS") {
        compScore += 1;
        roundResult = "Computer wins! Scissors beats paper";
   } else if (playSel === "SCISSORS" && compSel === "PAPER"){
        playerScore += 1;
        roundResult = "Player wins! Scissors beats paper";
   } else if (playSel === "SCISSORS" && compSel === "ROCK"){
        compScore += 1;
        roundResult = "Computer wins! Rock beats scissors!";
   } else if (playSel === compSel){
        roundResult = "Tie!";
   } else {
        roundResult = "Invalid input!";
   }
    return roundResult;
}

function game(){
    playRound(playerSelection,computerSelection);
    let roundNumber = 0;
    for (let i = 0; i < 5; i++){
        roundNumber++;
        console.log('Player picked: ' + getPlayerChoice());
        console.log('Computer picked: ' + getComputerChoice());
    }
    console.log("Player score is now: " + playerScore);
    console.log("Computer score is now: " + compScore);
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
    



//const playerSelection = "rock";
//let inputPrompt = prompt("Please enter rock, paper, or scissors");
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

//console.log("Round number: " + round);
//console.log("Player score: " + playerScore);
//console.log("Computer score: " + compScore);
//console.log("Player selected: " + playerSelection);
//console.log("Computer selected: " + computerSelection);
//console.log(playRound(playerSelection,computerSelection)); 

game();
console.log("End results: " + scoreResults());