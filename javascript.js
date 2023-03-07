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
    let roundResult = "No one";
   let playSel = playerSelection.toUpperCase();
   let compSel = computerSelection.toUpperCase();

   if (playSel === "ROCK" && compSel === "SCISSORS"){
        roundResult = "Player wins! Rock beats scissors!";
   } else if (playSel === "ROCK" && compSel === "PAPER"){
        roundResult = "Computer wins! Paper beats rock!"
   } else if (playSel === "PAPER" && compSel === "ROCK"){
        roundResult = "Player wins! Paper beats rock!";
   } else if (playSel === "PAPER" && compSel === "SCISSORS") {
        roundResult = "Computer wins! Scissors beats paper";
   } else if (playSel === "SCISSORS" && compSel === "PAPER"){
        roundResult = "Player wins! Scissors beats paper";
   } else if (playSel === "SCISSORS" && compSel === "ROCK"){
        roundResult = "Computer wins! Rock beats scissors!"
   } else if (playSel === compSel){
        roundResult = "Tie!";
   } else {
        roundResult = "Invalid input!";
   }
    return roundResult;
}


function game(gameResult){
    let round = playRound(playerSelection,computerSelection);
    for (let i = 0; i < 5; i++){
        round;
        //console.log("This has been looped " + round + " times.");
    }
    return "The result is: " + round;
}



//const playerSelection = "rock";
let inputPrompt = prompt("Please enter rock, paper, or scissors");
let playerSelection = inputPrompt;

const computerSelection = getComputerChoice();
console.log(game());

console.log("Player selected: " + playerSelection);
console.log("Computer selected: " + computerSelection);
console.log(playRound(playerSelection,computerSelection)); 