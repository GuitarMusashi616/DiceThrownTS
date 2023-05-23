import * as readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100

const askQuestion = () => {
    rl.question('Guess a number between 1 and 100: ', (answer: string) => {
        const guess = parseInt(answer);

        if (guess === secretNumber) {
            console.log('Congratulations! You guessed the number correctly.');
            rl.close();
        } else {
            console.log('Incorrect guess. Try again.');
            askQuestion();
        }
    });
};

askQuestion();