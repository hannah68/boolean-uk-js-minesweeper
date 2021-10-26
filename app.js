const difficultyLevel = prompt(`choose one level to play: easy, medium, hard`)
const userInput = Number(prompt(`Choose an index of ten places(choose number between 0 to 10)\n _ , _ , _ , _ , _ , _ , _ , _ , _ , _`));
// =====================================================
let guess;
let mineNumber;
// function  to get the number of guess and number of mine based on game's level
function diffLevel(){
    if(difficultyLevel === 'easy'){
        mineNumber = 1
        guess = 9
    }
    else if(difficultyLevel === 'medium'){
        mineNumber = 2
        guess = 8
    }else{
        mineNumber = 3
        guess = 7
    }
}
diffLevel();

// ==============================
// get the random number for mines
let mineBomb = []
const randomMine = (mineNumber) => {
    for(let i=0; i<mineNumber; i++){
        const randNum = Math.floor(Math.random() *  10) + 0;
        mineBomb.push(randNum);
    }
}
randomMine(mineNumber);

// ===================================
// repeat the helper function until condition met
const minesweeperFn = (idx,mineBomb) => {
    helperFn(idx,mineBomb)
}

// ======================================
let count = 0;          
const helperFn = (userInput,mineBomb) => {
        // if you hit the bomb
        if(mineBomb.indexOf(userInput) >= 0){
            alert(`Oops! You Lost. You found ${count} empty spaces.`);
        }
        // if you dont hit the bomb
        else if(mineBomb.indexOf(userInput) === -1 && guess >= 1){
            count += 1
            guess -= 1
            if(guess === 0){
                return alert(`Congrats, You won the game`);
            } 
            let idx = Number(prompt(`Correct, choose another empty place. You have ${guess} guess. ${mineBomb}`));
            // repeat the helper function with new user input(idx), until you hit the bomb or won the game
            minesweeperFn(idx,mineBomb);
        }
}

helperFn(userInput,mineBomb)





