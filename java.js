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


//prompt title says ugly
if (confirm("Do you want to play RPS?")) {
    rPSGame();
}
else {
    //clear the stats
}

function rPSGame() {

    let answer = prompt("Please enter your move", "R, P, S.");
    answer.toUpperCase;
    let text;
    if (answer == null || answer == "") {
        text = "User cancelled the prompt.";
    }
    else if (answer === "R" || answer === "r") {
        // calling ai
        var aiMove = aiChoice();
        if (answer === aiMove) {
            statsDraw++;
            showStats();
        }
        else if (aiMove === "P") {
            //player losses
            statsLoss++;
            showStats();
        }
        else {
            statsWin++;
            showStats();
        }
    }
    else if (answer === "P" || answer === "p") {
        // calling ai
        var aiMove = aiChoice();
        if (answer === aiMove) {
            //tie
        }
        else if (aiMove === "S") {
            //player losses
            statsLoss++;
            showStats();
        }
        else {
            statsWin++;
            showStats();
        }
    }
    else if (answer === "S" || answer === "s") {
        // calling ai
        var aiMove = aiChoice();
        if (answer === aiMove) {
            //tie
        }
        else if (aiMove === "R") {
            //player losses
            statsLoss++;
            showStats();
        }
        else {
            statsWin++;
            showStats();
        }
    }
    else {
        alert("Please try again with R, P, or S.");
        console.log(answer);
        rPSGame();
    }

}

function aiChoice() {
    var answer = choice[Math.floor(Math.random() * choice.length)];
    alert("The AI choose, " + answer + ".")
    return answer;
}

function showStats() {
    //window prompt showing the stats
}

//Math.floor(Math.random() * choice.length)