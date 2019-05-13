var rolled, cummulatedScores, runningScores;

cummulatedScores = [0, 0];
runningScores = [0, 0];

//random player will start
currentPlayer = Math.floor(Math.random() * 1) + 1;
document.getElementById('player' + currentPlayer).classList.add('active');

console.log(rolled);


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

    //check if player has won
    if (cummulatedScores >= targetScore){
        
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

function Contact(first, second, targetScore) {
    this.first = first;
    this.second = second;
    this.targetScore = targetScore;

}
$(document).ready(function () {
    $("form#new-contact").submit(function (event) {
        event.preventDefault();
        var player1 = $("input#player1").val();
        var player2 = $("input#player2").val();
        var targetScore = $("input#targetScore").val();


        Contact.prototype.resultDifference = function () {
            return cummulatedScores - this.targetScore ;
        }
        var sessionDetails = new Contact(player1, player2, targetScore);
        $("p#player1").append("<span class='show-contact'>Player 1: " + sessionDetails.first + "</span>");
        $("p#player2").append("<span class='show-contact'>Player 2: " + sessionDetails.second + "</span>");

    });


});