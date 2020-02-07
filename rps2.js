console.log("Welcome to Joe's 2nd attempt at rock, paper, scissors!")

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function userResponse (response) {

    console.log(response);

// everything in here!

}

readline.question("Please choose rock, paper or scissors:\n", userResponse)