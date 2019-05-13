var rolled, cummulatedScores, runningScores, targetScore;
cummulatedScores = [0, 0];
runningScores = [0, 0];
targetScore = 20;
//random player will start
currentPlayer = Math.floor(Math.random() * 2);
document.getElementById('player' + currentPlayer).classList.add('active');

//Display the dice that's been rolled
document.getElementById("rolled-dice").innerHTML = '<img src="./Images/Dices.png" alt="Dice"></img>';

//Functions to be performed on dice roll
document.getElementById("rollButton").addEventListener('click', function () {

    //get random number between 1 - 6
    var rolled = Math.floor(Math.random() * 6) + 1;
    console.log(rolled);
    //display rolled dice
    document.getElementById("rolled-dice").innerHTML = '<img src="./Images/dice-' + rolled + '.png" alt="Dice"></img>';

    //update running score if rolled NOT 1
    if (rolled !== 1) {
        runningScores[currentPlayer] += rolled;
        document.getElementById("running" + currentPlayer).innerHTML = 'Running Score: <span>' + runningScores[currentPlayer] + '</span>';
    }
    //if rolled IS 1, switch player
    else {
        switchPlayer();
    }
});

document.getElementById("holdButton").addEventListener('click', function () {

    //Add runningScore to cummulative score and update reading
    cummulatedScores[currentPlayer] += runningScores[currentPlayer];
    if (cummulatedScores[currentPlayer] >= targetScore) {
        //update total on UI
        document.getElementById("total" + currentPlayer).innerHTML = 'Total Score: <span>' + cummulatedScores[currentPlayer] + '</span>';
        var winner = parseInt(currentPlayer) + 1;
        alert("Player " + winner + " is the winner with " + cummulatedScores[currentPlayer] + " points!!!")
        resetGame();
    }
    //switch turn
    switchPlayer();
});

function switchPlayer() {
    //update total on UI
    document.getElementById("total" + currentPlayer).innerHTML = 'Total Score: <span>' + cummulatedScores[currentPlayer] + '</span>';
    //reset running
    runningScores[currentPlayer] = 0;
    //reset running on UI
    document.getElementById("running" + currentPlayer).innerHTML = 'Running Score: <span>' + 0 + '</span>';
    //toggle off old active player on UI
    document.getElementById('player' + currentPlayer).classList.remove('active');
    //toggle active player
    currentPlayer ? currentPlayer = 0 : currentPlayer = 1;
    //toggle new active player on UI
    document.getElementById('player' + currentPlayer).classList.add('active');
}

function resetGame(){
    cummulatedScores = [0, 0];
    runningScores = [0, 0];
    switchPlayer();
}

function Contact(first, second, targetScore) {
    this.first = first;
    this.second = second;
    this.targetScore = targetScore;
}