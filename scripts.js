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
    let input = prompt('Choose between rock, paper or scissors!');
    let playerChoice = input.toLowerCase();
    let pcChoice = getcomputerchoice()
    console.log(pcChoice)
    console.log(playerChoice)
}
rockPaperScissorsButton.addEventListener("click", buttonPressed)