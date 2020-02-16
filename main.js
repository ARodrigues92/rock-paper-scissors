let playerScore = 0;
let computerScore = 0;


function computerPlay () {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


function play (playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection !== computerSelection){
        if(
            playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper"
        ){
            playerScore ++;
            if(playerScore<5){
                document.getElementById("result-message").innerHTML=`You win! ${playerSelection} beats ${computerSelection}.`;
                document.getElementById("scores").innerHTML=`Player ${playerScore} - ${computerScore} Computer`;
            }else{
                document.getElementById("result-message").innerHTML=`You win! ${playerSelection} beats ${computerSelection}.`;
                document.getElementById("scores").innerHTML=`Player wins ${playerScore} - ${computerScore}`;
                playerScore = 0;
                computerScore = 0;
            }
        }
        else{
            computerScore ++;
            if(computerScore<5){
                document.getElementById("result-message").innerHTML=`You lose! ${computerSelection} beats ${playerSelection}.`;
                document.getElementById("scores").innerHTML=`Player ${playerScore} - ${computerScore} Computer`;
            }else{
                document.getElementById("result-message").innerHTML=`You lose! ${computerSelection} beats ${playerSelection}.`;
                document.getElementById("scores").innerHTML=`Computer wins ${computerScore} - ${playerScore}`;
                playerScore = 0;
                computerScore = 0;
            }
        }
    }else{
        document.getElementById("result-message").innerHTML="Its a tie";
    }

}

const buttons = document.querySelectorAll("button");

buttons.forEach (function (button){
    button.addEventListener("click", function(){
        play(button.innerHTML, computerPlay());
    });
});
