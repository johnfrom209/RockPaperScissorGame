//start with psuedo code

//declare the var outside for tracking
//Need a prompt asking to play
//if yes 
//ask for input
//if not RP or S ask again

//we need choose RPS
//compare values
//P > R > S > P || if same tie
//save to stats
//stats prompt
//display stats
//win, loss, draw
//Play again
//else exit clear the stats

var statsWin = 0;
var statsLoss = 0;
var statsDraw = 0;

var choice = ["R", "P", "S"];

if (confirm("Do you want to play RPS?")) {
    rPSGame();
}
else {
    //clear the stats
    alert("Cancelled Game.");
}

function rPSGame() {

    let answer = prompt("Please enter your move", "R, P, S.");
    answer = answer.toUpperCase();
    if (answer == null || answer == "") {
    }
    //is the input Rock
    else if (answer === "R" || answer === "r") {
        // calling ai
        var aiMove = aiChoice();
        if (answer === aiMove) {
            statsDraw += 1;
            //showStats();
        }
        else if (aiMove === "P") {
            //player losses
            statsLoss += 1;
            //showStats();
        }
        else {
            statsWin += 1;
            //showStats();
        }
    }
    else if (answer === "P" || answer === "p") {
        // calling ai
        var aiMove = aiChoice();
        if (answer === aiMove) {
            //tie
            statsDraw += 1;
            //showStats();
        }
        else if (aiMove === "S") {
            //player losses
            statsLoss += 1;
            //showStats();
        }
        else {
            statsWin++;
            //showStats();
        }
    }
    else if (answer === "S" || answer === "s") {
        // calling ai
        var aiMove = aiChoice();
        if (answer === aiMove) {
            //tie
            statsDraw += 1;
            //showStats();
        }
        else if (aiMove === "R") {
            //player losses
            statsLoss += 1;
            //showStats();
        }
        else {
            statsWin += 1;
            //showStats();
        }
    }
    else {
        alert("Please try again with R, P, or S.");
        console.log(answer);
        rPSGame();
    }

    showStats();
    // asking if they want to play again and if false return out of game
    var replay = playAgain();
    if (!replay) {
        alert("Exit Game.");
        return;
    }


}

function aiChoice() {
    var answer = choice[Math.floor(Math.random() * choice.length)];
    alert("The AI choose, " + answer + ".");
    return answer;
}

function showStats() {
    //window prompt showing the stats
    alert("Here are your stats:\n" + "Wins:" + statsWin + "\n" + "Losses:" + statsLoss + "\n" + "Draws:" + statsDraw);
}

function playAgain() {

    if (confirm("Do you want to play again?")) {
        rPSGame();;
    } else {
        return false;
    }
}
