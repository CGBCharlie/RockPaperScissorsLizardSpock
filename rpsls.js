
function rules() {
    let popup = document.getElementById("popup");
    popup.style.visibility = 'visible';
}

function closeRules() {
    let popup = document.getElementById("popup");
    popup.style.visibility = "hidden";
}

function RPS(id) {
    let container = document.getElementById("userChoiceContainer");
    container.style.visibility = "hidden";
    let table = document.getElementById("UGC");
    table.style.visibility = "visible";
    if (id === "rock") {
        show = document.getElementById("rockChoice");
    } else if (id === "paper") {
        show = document.getElementById("paperChoice");
    } else if (id === "lizard") {
        show = document.getElementById("lizardChoice");
    } else if (id === "spock") {
        show = document.getElementById("spockChoice");
    } else if (id === "scissors") {
        show = document.getElementById("scissorsChoice");
    }
    
    show.style.visibility = "visible";

    let compChoice = Math.random();

    if (compChoice < 0.2) {
        compChoice = "rock";
    } else if (compChoice <= 0.4) {
        compChoice = "paper";
    } else if (compChoice <= 0.6) {
        compChoice = "scissors";
    } else if (compChoice <= 0.8) {
        compChoice = "lizard";
    } else {
        compChoice = "spock";  
    }

    let meow;

    if (id === compChoice) {
        if (id === "scissors") {
            show = document.getElementById("scissorsChoiceCp")
        } else if (id === "paper") {
            show = document.getElementById("paperChoiceCp")
        } else if (id === "lizard") {
            show = document.getElementById("lizardChoiceCp")
        } else if (id === "rock") {
            show = document.getElementById("rockChoiceCp")
        } else if (id === "spock") {
            show = document.getElementById("spockChoiceCp")
        }
        meow = 'T';
        // console.log("TIE");
    } else if (id === "scissors" && compChoice === "paper") {
        show = document.getElementById("paperChoiceCp")
        meow = 'W';
        // console.log("User Wins");
    } else if (id === "scissors" && compChoice === "rock") {
        show = document.getElementById("rockChoiceCp")
        meow = 'L';
        // console.log("Computer Wins");
    } else if (id === "scissors" && compChoice === "lizard") {
        show = document.getElementById("lizardChoiceCp")
        meow = 'W';
        // console.log("User Wins");
    } else if (id === "scissors" && compChoice === "spock") {
        show = document.getElementById("spockChoiceCp")
        meow = 'L';
        // console.log("Computer Wins");
    } else if (id === "paper" && compChoice === "rock") {
        show = document.getElementById("rockChoiceCp")
        meow = 'W';
        // console.log("User Wins");
    } else if (id === "paper" && compChoice === "lizard") {
        show = document.getElementById("lizardChoiceCp")
        meow = 'L';
        // console.log("Computer Wins");
    } else if (id === "paper" && compChoice === "spock") {
        show = document.getElementById("spockChoiceCp")
        meow = 'W';
        // console.log("User Wins");
    } else if (id === "paper" && compChoice === "scissors") {
        show = document.getElementById("scissorsChoiceCp")
        meow = 'L';
        // console.log("Computer Wins");
    } else if (id === "rock" && compChoice === "lizard") {
        show = document.getElementById("lizardChoiceCp")
        meow = 'W';
        // console.log("User Wins");
    } else if (id === "rock" && compChoice === "spock") {
        show = document.getElementById("spockChoiceCp")
        meow = 'L';
        // console.log("Computer Wins");
    } else if (id === "rock" && compChoice === "scissors") {
        show = document.getElementById("scissorsChoiceCp")
        meow = 'W';
        // console.log("User Wins");
    } else if (id === "rock" && compChoice === "paper") {
        show = document.getElementById("paperChoiceCp")
        meow = 'L';
        // console.log("Computer Wins");
    } else if (id === "lizard" && compChoice === "spock") {
        show = document.getElementById("spockChoiceCp")
        meow = 'W';
        // console.log("User Wins");
    } else if (id === "lizard" && compChoice === "scissors") {
        show = document.getElementById("scissorsChoiceCp")
        meow = 'L';
        // console.log("Computer Wins");
    } else if (id === "lizard" && compChoice === "paper") {
        show = document.getElementById("paperChoiceCp")
        meow = 'W';
        // console.log("User Wins");
    } else if (id === "lizard" && compChoice === "rock") {
        show = document.getElementById("rockChoiceCp")
        meow = 'L';
        // console.log("Computer Wins");
    } else if (id === "spock" && compChoice === "scissors") {
        show = document.getElementById("scissorsChoiceCp")
        meow = 'W';
        // console.log("User Wins");
    } else if (id === "spock" && compChoice === "paper") {
        show = document.getElementById("paperChoiceCp")
        meow = 'L';
        // console.log("Computer Wins");
    } else if (id === "spock" && compChoice === "rock") {
        show = document.getElementById("rockChoiceCp")
        meow = 'W';
        // console.log("User Wins");
    } else if (id === "spock" && compChoice === "lizard") {
        show = document.getElementById("lizardChoiceCp")
        meow = 'L';
        // console.log("Computer Wins");
    }
    show.style.visibility = "visible";

    setTimeout(gameResult, 1000, meow);
}

let counter = 0;

function gameResult(meow) {
    
    let GR = document.getElementById("GameResult");
    GR.style.visibility = "visible";
    let td1 = document.getElementById("td1")
    let td2 = document.getElementById("td2")
    let td3 = document.getElementById("td3")
    let td4 = document.getElementById("td4")
    let x = window.matchMedia("(max-width: 376px)")
    if (x.matches) {
        
      } else {
        td1.style.paddingRight = "100px";
        td2.style.paddingLeft = "100px";
        td3.style.paddingRight = "100px";
        td4.style.paddingLeft = "100px";
      }
    

    if (meow === "T") {
        let txt = document.getElementById("output").innerHTML = "YOU TIED";
    } else if (meow === "W") {
        counter += 1;
        let txt = document.getElementById("output").innerHTML = "YOU WIN";
        let n = document.getElementById("score").innerHTML = counter;
    } else {
        counter -= 1;
        let txt = document.getElementById("output").innerHTML = "YOU LOSE";
        let n = document.getElementById("score").innerHTML = counter;
    }
}

function playAgain() {
    let GR = document.getElementById("GameResult");
    GR.style.visibility = "hidden";
    let table = document.getElementById("UGC");
    table.style.visibility = "hidden";
    let td1 = document.getElementById("td1")
    let td2 = document.getElementById("td2")
    let td3 = document.getElementById("td3")
    let td4 = document.getElementById("td4")
    td1.style.paddingRight = "0px";
    td2.style.paddingLeft = "0px";
    td3.style.paddingRight = "0px";
    td4.style.paddingLeft = "0px";
    let container = document.getElementById("userChoiceContainer");
    container.style.visibility = "visible";

    let LC = document.getElementById("lizardChoiceCp");
    LC.style.visibility = "hidden";
    let SC = document.getElementById("spockChoiceCp");
    SC.style.visibility = "hidden";
    let RC = document.getElementById("rockChoiceCp");
    RC.style.visibility = "hidden";
    let SCC = document.getElementById("scissorsChoiceCp");
    SCC.style.visibility = "hidden";
    let PC = document.getElementById("paperChoiceCp");
    PC.style.visibility = "hidden";

    LC = document.getElementById("lizardChoice");
    LC.style.visibility = "hidden";
    SC = document.getElementById("spockChoice");
    SC.style.visibility = "hidden";
    RC = document.getElementById("rockChoice");
    RC.style.visibility = "hidden";
    SCC = document.getElementById("scissorsChoice");
    SCC.style.visibility = "hidden";
    PC = document.getElementById("paperChoice");
    PC.style.visibility = "hidden";
}