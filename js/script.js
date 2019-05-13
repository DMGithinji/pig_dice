
//var player1=document.querySelector('#player1').textContent;

cummulatedScores = [0, 0];
runningScores = [0, 0];

//random player will start
currentPlayer = Math.floor(Math.random() * 1) + 1;

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
        document.getElementById("running" + currentPlayer).innerHTML = 'Running Score: <span>' + 0 + '</span>';
        currentPlayer ? currentPlayer = 0 : currentPlayer = 1;
    }
});