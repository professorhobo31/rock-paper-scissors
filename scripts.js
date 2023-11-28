const rockPaperScissorsButton = document.getElementById("button")
function getcomputerchoice() {
    let a = Math.random()
    if (a <= 0.33) {
        let pcChoice = 'rock';
        // alert(pcChoice);
        return pcChoice;
    }
    else if (a > 0.33 && a <= 0.66) {
        let pcChoice = 'paper';
        // alert(pcChoice);
        return pcChoice;
    }
    else {
        let pcChoice = 'scissors';
        // alert(pcChoice);
        return pcChoice;
    }
}

function buttonPressed() {
    let input = prompt('Choose between rock, paper or scissors:', "rock");
    let playerChoice = input.toLowerCase();
    let pcChoice = getcomputerchoice()
    console.log(pcChoice)
    console.log(playerChoice)
    if (playerChoice == pcChoice) {
        alert("It's a tie!")
    }
    else if (playerChoice == "rock" && pcChoice == "scissors") {
        alert("The player wins!")
    }
    else if (playerChoice == "rock" && pcChoice == "paper") {
        alert("The PC wins!")
    }
    else if (playerChoice == 'paper' && pcChoice == 'rock') {
        alert("The player wins!")
    }
    else if (playerChoice == 'paper' && pcChoice == 'scissors') {
        alert("The PC wins!")
    }
    else if (playerChoice == 'scissors' && pcChoice == 'paper') {
        alert("The player wins!")
    }
    else if (playerChoice == 'scissors' && pcChoice == 'rock') {
        alert("The PC wins!")
    }
    else {
        alert('You may only type "rock", "paper" or "scissors". No typos allowed')
    }
}
rockPaperScissorsButton.addEventListener("click", buttonPressed)