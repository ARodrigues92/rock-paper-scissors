playerScore = 0;
computerScore = 0;


function computerPlay () {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


function play (playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors"){
        if(playerSelection !== computerSelection){
            if(
                playerSelection === "rock" && computerSelection === "scissors" ||
                playerSelection === "paper" && computerSelection === "rock" ||
                playerSelection === "scissors" && computerSelection === "paper"
            ){
                playerScore ++;
                if(playerScore<3){
                    return "You win!\n"+playerSelection+" beats "+computerSelection+"\nPlayer-"+playerScore+" Computer-"+computerScore;
                }else{
                    return "Player wins "+playerScore+"-"+computerScore;
                }
            }
            else{
                computerScore ++;
                if(computerScore<3){
                    return "You lose!\n"+computerSelection+" beats "+playerSelection+"\nPlayer-"+playerScore+" Computer-"+computerScore;
                }else{
                    return "Computer wins "+computerScore+"-"+playerScore;
                }
            }
        }else{
            return "It's a tie!\nPlayer-"+playerScore+" Computer-"+computerScore;
        }
    }else{
        return "Your selection is not valid"
    }

}

function game (){
    while(playerScore<3 && computerScore<3){
            alert(play(prompt("Please make your choice (Rock, Paper or Scissors)"), computerPlay()));
    }
}


game();