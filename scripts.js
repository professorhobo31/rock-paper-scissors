const rockPaperScissorsButton = document.getElementById("button")
const bestOfFiveButton = document.getElementById("button2")

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

function singleRound(playerChoice) {
    // let input = prompt('Choose between rock, paper or scissors:', 'rock');
    // let playerChoice = input.toLowerCase();
    let pcChoice = getcomputerchoice()
    console.log(pcChoice)
    console.log(playerChoice)
    if (playerChoice == pcChoice) {
        alert("It's a tie. REMATCH!!!");
        // return singleRound();
    }
    else if (playerChoice == "rock" && pcChoice == "scissors") {
        alert("The player wins! Rock beats Scissors.");
        return "player";
    }
    else if (playerChoice == "rock" && pcChoice == "paper") {
        alert("The PC wins! Paper beats Rock");
        return "pc";
    }
    else if (playerChoice == 'paper' && pcChoice == 'rock') {
        alert("The player wins! Paper beats Rock");
        return "player";
    }
    else if (playerChoice == 'paper' && pcChoice == 'scissors') {
        alert("The PC wins! Scissors beat Paper");
        return "pc";
    }
    else if (playerChoice == 'scissors' && pcChoice == 'paper') {
        alert("The player wins! Scissors beat Paper")
        return "player";
    }
    else if (playerChoice == 'scissors' && pcChoice == 'rock') {
        alert("The PC wins! Rock beats Scissors");
        return "pc";
    }
    else {
        // alert('You may only type "rock", "paper" or "scissors". No typos allowed');
        // return singleRound();
    }
}
// rockPaperScissorsButton.addEventListener("click", singleRound)

function fiveRound() {
    let pcScore = 0
    let playerScore = 0
    for (let i = 1; i <= 5; i++) {
        let a = singleRound()
        if (a == "player") {
            playerScore++
        }
        else if (a == "pc") {
            pcScore++
        }
    }
    console.log(pcScore)
    console.log(playerScore)
    
    if (pcScore > playerScore) {
        alert("The PC won the 5 round match!")
    }
    else if (playerScore > pcScore) {
        alert("The player won the 5 round match!")
    }
}
// bestOfFiveButton.addEventListener("click", fiveRound)

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

function rockChoice() {
    singleRound('rock')
}

function paperChoice() {
    singleRound('paper')
}

function scissorsChoice() {
    singleRound('scissors')
}

rockBtn.addEventListener('click', rockChoice)
paperBtn.addEventListener('click', paperChoice)
scissorsBtn.addEventListener('click', scissorsChoice)