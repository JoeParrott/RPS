// Intro

console.log("Welcome to Rock Paper Scissors v0.1");

// Player choice- use the readline module

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please choose rock, paper or scissors\n', (answer) => {


        // what are we doing with user response?
         answer.toLowerCase(userResponse); {
            if userResponse != ("rock", "paper", "scissors");
            console.log("Please choose, rock, paper or scissors");

         }
        {

        // terminal chooses math.method
    
            let termOpt = ["rock", "paper", "scissors"];
            let termChoice = termOpt[Math.floor(Math.random() * 3)];
    
    // compare, else if
    
            const compare = (userResponse, termChoice) => {
                if (userResponse === termChoice) {
                    console.log("This is a tie.");
                    return;
        }
                if (userResponse === "rock") {
                    if (termChoice === "paper") {
                        console.log("You lost.");
                        return;
            }
                    else {
                        console.log("You win.");
                        return;
            }
        }
                if (userResponse === "paper") {
                    if (termChoice === "scissors") {
                        console.log("You lost.");
                        return;
            }
                    else {
                        console.log("You win.");
                        return;
            }
        }
                if (userResponse === "scissors") {
                    if (termChoice === "rock") {
                        console.log("You lost.");
                        return;
            }
                    else {
                        console.log("You win.");
                        return;
            }
        }
    }
    // output winner
    
    }
    
    
    
    
    // loop to start?
    
    
    


}