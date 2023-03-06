function getComputerChoice(number){
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
    number = outcome;
    return number;
}
console.log(getComputerChoice());