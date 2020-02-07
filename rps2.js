console.log("Welcome to Joe's 2nd attempt at rock, paper, scissors!")

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function userResponse (response) {
                                                                // is the input valid?
    if (response === "rock" || "paper" || "scissors") {
        let termOpt = ["rock", "paper", "scissors"];
        let termChoice = termOpt [Math.floor(Math.random() * 3)];
        console.log("Terminal chose: " + termChoice)
                                                                // why is termChoice not being read?

        const compare = (response, termChoice) => {
            if (response === termChoice) {
                console.log("This is a tie.");
            }
            else if (response === "rock") {
                if (termChoice === "paper") {
                    console.log("You lost.");
            }
                else {
                    console.log("You win.");
            }
        }
            else if (response === "paper") {
                if (termChoice === "scissors") {
                    console.log("You lost.");
            }
                else {
                    console.log("You win.");
            }
        }
            else if (response === "scissors") {
                if (termChoice === "rock") {
                    console.log("You lost.");
            }
                else {
                    console.log("You win.");
            }
        }
        else {
        console.log("Please choose again.")
        }
    }
    let result = compare(response, termChoice);
    console.log(result);
}
    readline.close();
}
readline.question("Please choose rock, paper or scissors:\n", userResponse);