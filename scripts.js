const rockPaperScissorsButton = document.getElementById("button")
function getcomputerchoice() {
    let a = Math.random()
    if (a <= 0.33) {
        let pcChoice = 'Rock';
        alert(pcChoice);
        return pcChoice;
    }
    else if (a > 0.33 && a <= 0.66) {
        let pcChoice = 'Paper';
        alert(pcChoice);
        return pcChoice;
    }
    else {
        let pcChoice = 'Scissors';
        alert(pcChoice);
        return pcChoice;
    }
}
rockPaperScissorsButton.addEventListener("click", getcomputerchoice)