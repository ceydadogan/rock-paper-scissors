var pCount=0, cCount=0;

function getComputerChoice(){
    const rnd = Math.floor(Math.random() * 3) + 1;
    if(rnd == 1)
        return "ROCK";
    else if( rnd == 2)
        return "PAPER";
    else
        return "SCISSORS";
}
function playRound(pChoice, cChoice){
    if(pChoice == "ROCK" && cChoice == "PAPER"){
        cCount++;
        console.log("You:" + pCount);
        console.log("Computer:" + cCount);
    }
    else if(pChoice == "ROCK" && cChoice == "SCISSORS"){
        pCount++;
        console.log("You:" + pCount);
        console.log("Computer:" + cCount);
    }
    else if(pChoice == "ROCK" && cChoice == "ROCK"){
        console.log("You:" + pCount);
        console.log("Computer:" + cCount);
    }
    else if(pChoice == "PAPER" && pChoice == "ROCK"){
        pCount++;
        console.log("You:" + pCount);
        console.log("Computer:" + cCount);
    }
    else if(pChoice == "PAPER" && cChoice == "SCISSORS"){
        cCount++;
        console.log("You:" + pCount);
        console.log("Computer:" + cCount);
        return "You Lose! Scissors cut paper";
    }
    else if(pChoice == "PAPER" && cChoice == "PAPER"){
        console.log("You:" + pCount);
        console.log("Computer:" + cCount);
    }
    else if(pChoice == "SCISSORS" && cChoice == "ROCK"){
        cCount++;
        console.log("You:" + pCount);
        console.log("Computer:" + cCount);
        return "You Lose! Rock breaks Scissors";
    }
    else if(pChoice == "SCISSORS" && cChoice == "PAPER"){
        pCount++;
        console.log("You:" + pCount);
        console.log("Computer:" + cCount);
        return "You Lose! Scissors cut paper";
    }
    else if(pChoice == "SCISSORS" && cChoice == "SCISSORS"){
        console.log("You:" + pCount);
        console.log("Computer:" + cCount);
    }
    else{
        cCount++;
        console.log("You:" + pCount);
        console.log("Computer:" + cCount);
        return "Wrong word!";
    }
}
function game(){
    var playersChoice, computersChoice;
    for (let i = 0; i < 5; i++)
    {
        playersChoice = prompt("Guess  Paper, Rock or Scissors").toUpperCase();
        console.log("********************************************");
        console.log("********************************************");
        console.log(i+1 + ". round");
        computersChoice = getComputerChoice();
        console.log("You:" + playersChoice);
        console.log("Computer:" + computersChoice);
        playRound(playersChoice, computersChoice);
    }
}
game();
console.log("********************************************");
console.log("********************************************");
if(pCount > cCount)
    console.log("GAME OVER! Winner is YOU");
else if(pCount < cCount)
    console.log("GAME OVER! Winner is Computer!");
else
    console.log("GAME OVER! In a draw!");

