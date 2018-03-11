
//Arrays

var words = [
    "monkey",
    "snake",
    "tiger",
    "frog",
    "sloth",
    "lizard"
];

var answerArray = [];
var wrongLetter = []; 
var lettersInWord = [];

//Variables for game 
var wins = 0;
var randomWord = words[Math.floor(Math.random() * words.length)];
var guessesRemaining = 15;
var remainingLength = 0;

//Console logs
console.log(randomWord);
console.log(guessesRemaining);

// functions

function startGame(){
    randomWord = words[Math.floor(Math.random() * words.length)];
    wrongLetter = [];
    answerArray = [];
    lettersInWord = randomWord.split("");
    remainingLength = lettersInWord.length; 
    guessesRemaining = 15;

    for (let i = 0; i<remainingLength; i++) {
        answerArray.push("  _  ");
    }

    document.getElementById("currentword").innerHTML=answerArray.join("");
    document.getElementById("remainingguesses").innerHTML = guessesRemaining;
    document.getElementById("wins").innerHTML=wins;
    document.getElementById("guessedletters").innerHTML=wrongLetter.join(" ");

}

function availableLetters(letters){

    var isInWord = false;

    for (let j = 0; j < remainingLength; j++) {
        if(randomWord[j] === letters) {
            isInWord = true;
        }
    }


    if(isInWord) {  
        for (let l = 0; l < remainingLength; l++){
            if(randomWord[l] === letters) {
                answerArray[l] = letters; 
        }
    }  
} else {
        wrongLetter.push(letters);
        guessesRemaining--;
}
}


function gameReset(){

    document.getElementById("currentword").innerHTML=answerArray.join("");
    document.getElementById("remainingguesses").innerHTML = guessesRemaining;
    document.getElementById("guessedletters").innerHTML=wrongLetter.join(" ");

    if(lettersInWord.toString() === answerArray.toString()) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("WINNER WINNER CHICKEN DINNER")
        startGame();

    } else if (guessesRemaining === 0){
        alert ("Sorry, you lost")
        startGame();
    }
}

//Process

startGame();
document.onkeypress = function(event) {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        availableLetters(letter);
        gameReset();
}
 

        