function getComputerChoice(){
    const rnd = Math.floor(Math.random() * 3) + 1;
    if(rnd == 1)
        return "Rock";
    else if( rnd == 2)
        return "Paper";
    else
        return "Scissors";
}
function playRound(pChoice, cChoice){
    if(pChoice == "Rock" && cChoice == "Paper")
        return "You Lose! Paper beats Rock";
    else if(pChoice == "Rock" && cChoice == "Scissors")
        return "You Win! Rock breaks Scissors";
    else
        return "In a draw";
}
const playersChoice = "Rock";
const computersChoice = getComputerChoice();

console.log(playRound(playersChoice, computersChoice));