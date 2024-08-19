const choicesArr = ["rock", "paper", "scissors"]

const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")

// 6
let playerScore = 0
let computerScore = 0

// we passed the argument to this function in html
// and out of three function, on any function we click the argument of that function will be access here as parameter, and then will compare with computer choice.
function playGame(playerChoice){

    // 1
    // computer will randomly select value from array, and we have store the value in variable ( computerChoice).
    const computerChoice = choicesArr[Math.floor(Math.random() * 3)]
    // console.log(computerChoice);

    // 2
    // declare a variable and assign empty string. later we will update this variable.
    let result = ""

    // compare the palyer choice and computer choice 
    if (playerChoice === computerChoice) {
        // if both have same value return this , otherwise return else. 
        result = "IT'S A TIE"
    }else{
        // now play the game 
        switch(playerChoice){
            // If player choice is rock mean we have clicked on the button on which we are sending rock argument to the function, then in result assign a value of ternary operator, and based on the the comparison one value will be store in variable (resul), either (YOU WIN) oR (YOU LOSE).
            // we have slelected rock and if computer select scissors, then in result (YOU WIN) will be assign.
            case "rock": result = (computerChoice == "scissors") ? "YOU WIN!" : "YOU LOSE!"
            break;

            // when we click on the button with argument paper
            case "paper": result = (computerChoice == "rock") ? "YOU WIN!" : "YOU LOSE!"
            break;

            // when we click on button with argument scissors
            case "scissors": result = (computerChoice == "paper") ? "YOU WIN!" : "YOU LOSE!"
            break;
        }
    }

    // 3
    // now display each value in the browser.
    // textContent work the same as innerHTML, but textContent override the existing hard coded value. 
    playerDisplay.textContent = `Player: ${playerChoice}`
    computerDisplay.textContent = `Computer: ${computerChoice}`
    resultDisplay.textContent = result;

    // 5
    // to remove both classes when there is tie.
    resultDisplay.classList.remove("green-text", "red-text")
    // 4
    // change the color of (YOU WIN) and (YOU LOSE).
    switch(result){
        // if result is (YOU WIN) add green text class.
        case "YOU WIN!": resultDisplay.classList.add("green-text");
        // 6
        // increase the player score by one, and then put it in span with id (playerScoreDisplay).
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;

        // if result is (YOU LOSE) add red text class.
        case "YOU LOSE!": resultDisplay.classList.add("red-text");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;

    }
    
}