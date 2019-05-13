
//var player1=document.querySelector('#player1').textContent;

cummulatedScores = [0, 0];
runningScores = [0, 0];

//random player will start
currentPlayer = Math.floor(Math.random() * 1) + 1;

console.log(rolled);


//Display the dice that's been rolled
document.getElementById("rolled-dice").innerHTML = '<img src="./Images/Dices.png" alt="Dice"></img>';