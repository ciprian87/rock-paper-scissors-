let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    
    return choice;
}

// function getHumanChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie! Both chose ${humanChoice}. Human score: ${humanScore}, Computer score: ${computerScore}`;
    }
    
    if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}. Human score: ${humanScore}, Computer score: ${computerScore}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}. Human score: ${humanScore}, Computer score: ${computerScore}`;
    }
}

function playGame() {
    // Reset scores at the start of each game
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        
        console.log(`Round ${i + 1}`);
        console.log(`Human choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        let result = playRound(humanChoice, computerChoice); // Store result
        console.log(result);

        if (i==4){
            if (humanScore > computerScore) {
                console.log(`You win the game! Final score - You: ${humanScore}, Computer: ${computerScore}`);
            } else if (computerScore > humanScore) {
                console.log(`You lose the game! Final score - You: ${humanScore}, Computer: ${computerScore}`);
            } else {
                console.log(`It's a tie! Final score - You: ${humanScore}, Computer: ${computerScore}`);
            }
        }
    }
    
    
}




