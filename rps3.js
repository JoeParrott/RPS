console.log("Welcome to Joe's 2nd attempt at rock, paper, scissors!")

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function userResponse (responseForUser) {
    let response = responseForUser.toLowerCase();
    console.log("You chose: " + responseForUser);                                                      // is the input valid?
    if ((response != "rock") && (response != "paper") && (response != "scissors")) {
    console.log("Please select a valid option.");
    }
    else {
        let termOpt = ["rock", "paper", "scissors"];
        let termChoice = termOpt [Math.floor(Math.random() * 3)];
        console.log("Terminal chose: " + termChoice)
        const compare = () => {
            if (response === termChoice) {
                console.log("This is a tie.");
            }
            else {
            if (response === "rock") {
                if (termChoice === "paper") {
                    console.log("You lost.");
            }
                else {
                    console.log("You win.");
            }
        }
            if (response === "paper") {
                if (termChoice === "scissors") {
                    console.log("You lost.");
            }
                else {
                    console.log("You win.");
            }
        }
            if (response === "scissors") {
                if (termChoice === "rock") {
                    console.log("You lost.");
            }
                else {
                    console.log("You win.");
            }
        }
        }

    }



    compare();
}
    readline.close();
}
readline.question("Please choose rock, paper or scissors:\n", userResponse);