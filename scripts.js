const rockPaperScissorsButton = document.getElementById("button")
function getcomputerchoice() {
    let a = Math.random()
    if (a <= 0.33) {
        let pcChoice = 'rock';
        return pcChoice;
    }
    else if (a > 0.33 && a <= 0.66) {
        let pcChoice = 'paper';
        return pcChoice;
    }
    else {
        let pcChoice = 'scissors';
        return pcChoice;
    }
}

function buttonPressed() {
    let input = prompt('Choose between rock, paper or scissors:');
    let playerChoice = input.toLowerCase();
    let pcChoice = getcomputerchoice()
    console.log(pcChoice)
    console.log(playerChoice)
    if (playerChoice == pcChoice) {
        alert("It's a tie!")
    }
    else if (playerChoice == "rock" && pcChoice == "scissors") {
        alert("The player wins! Rock beats Scissors.")
    }
    else if (playerChoice == "rock" && pcChoice == "paper") {
        alert("The PC wins! Paper beats Rock")
    }
    else if (playerChoice == 'paper' && pcChoice == 'rock') {
        alert("The player wins! Paper beats Rock")
    }
    else if (playerChoice == 'paper' && pcChoice == 'scissors') {
        alert("The PC wins! Scissors beat Paper")
    }
    else if (playerChoice == 'scissors' && pcChoice == 'paper') {
        alert("The player wins! Scissors beat Paper")
    }
    else if (playerChoice == 'scissors' && pcChoice == 'rock') {
        alert("The PC wins! Rock beats Scissors")
    }
    else {
        alert('You may only type "rock", "paper" or "scissors". No typos allowed')
    }
}
rockPaperScissorsButton.addEventListener("click", buttonPressed)