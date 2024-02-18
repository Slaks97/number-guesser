let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    
    if (humanGuess > 9) {
        alert('Please choose a number between 0 and 9');
    }

    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);

    return humanDifference <= computerDifference;
};

const updateScore = winner => {
    if (winner === 'human') {
        return humanScore++;
    } else if (winner === 'computer') {
        return computerScore++
    }
};

const advanceRound = () => currentRoundNumber++;