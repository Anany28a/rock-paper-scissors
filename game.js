let users = 0;
let comps = 0;

// Accessing the HTML objects
const choices = document.querySelectorAll(".choice"); // Fixed variable definition
const msg = document.querySelector("#msg");
const userScorep = document.querySelector("#user-score");
const compScorep = document.querySelector("#comp-score"); // Corrected ID

// Function for generating computer's choice randomly
const getcompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};

// Function when the game is a draw
const drawgame = () => {
    msg.innerText = "Game is a draw! Try again.";
    msg.style.backgroundColor = "#081b31";
};

// Function when user will be winner by taking 3 arguments
const winner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        users++;
        userScorep.innerText = users; // Corrected variable name
        msg.innerText = `You win! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comps++;
        compScorep.innerText = comps; // Corrected variable name
        msg.innerText = `You lost! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Generating computer choice and playing the game
const playgame = (userChoice) => {
    const compChoice = getcompchoice();

    if (userChoice === compChoice) {
        drawgame(); // Calling function for a draw game
    } else {
        let userWin = true; // When user can win
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true; // Corrected variable name
        } else {
            userWin = compChoice === "rock" ? false : true; // Corrected variable name
        }
        winner(userWin, userChoice, compChoice); // Calling the function
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
