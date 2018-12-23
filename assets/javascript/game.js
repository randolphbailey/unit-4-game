var target = 0;
var value1 = 0;
var value2 = 0
var value3 = 0;
var value4 = 0;
var counter = 0;
var wins = 0;
var losses = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function newGame() {
    target = getRndInteger(19, 120);
    value1 = getRndInteger(1, 12);
    value2 = getRndInteger(1, 12);
    value3 = getRndInteger(1, 12);
    value4 = getRndInteger(1, 12);
    counter = 0;
    $("#targetNumber").text(target);
    $("#counter").text(counter);
    $("#wins").text(wins);
    $("#losses").text(losses);
}

function gameOver() {
    if (counter > target) { //Loss condition
        losses++;
        newGame();
    }
    else if (counter == target) { //Win Condition
        wins++;
        newGame();
    }
    else {
        return false;
    }
}

function resetScores() {
    wins = 0;
    losses = 0;
    $("#wins").text(wins);
    $("#losses").text(losses);
}

var testnum = getRndInteger(0, 10);

window.onload = function() {
    resetScores();
    newGame();
}

$("document").ready(function() {
    $("#crystal1").click(function() {
        counter += value1;
        $("#counter").text(counter);
        gameOver();
    });
    $("#crystal2").click(function() {
        counter += value2;
        $("#counter").text(counter);
        gameOver();
    });
    $("#crystal3").click(function() {
        counter += value3;
        $("#counter").text(counter);
        gameOver();
    });
    $("#crystal4").click(function() {
        counter += value4;
        $("#counter").text(counter);
        gameOver();
    });
});