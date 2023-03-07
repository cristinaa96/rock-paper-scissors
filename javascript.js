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
function playRound(playerSelection,computerSelection) {
    let gameResult = "No one";
   let playSel = playerSelection.toUpperCase();
   let compSel = computerSelection.toUpperCase();

   if (playSel === compSel){
    gameResult = "Tie!";
   } else if (playSel === "ROCK" && compSel === "SCISSORS" || playSel === "PAPER" && compSel === "ROCK" || playSel === "SCISSORS" && compSel === "PAPER"){
    gameResult = "Player wins!"
   }   
   else {
    gameResult = "Computer wins!";
   }


    return gameResult;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));