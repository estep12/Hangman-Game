// function resetGame(){

// }

let wins = 0;

document.getElementById("wins").innerHTML=wins;


var words = [
    "monkey",
    "snake",
    "tiger",
    "frog",
    "sloth",
    "lizard"
];


var randomWord = words[Math.floor(Math.random() * words.length)];

console.log(randomWord);


var answerArray = [];
for (let i = 0; i<randomWord.length; i++) {
    answerArray[i] = "  _  ";
}
var remainingLength = randomWord.length;



document.getElementById("currentword").innerHTML=answerArray.join("");

let guessesRemaining = 15;

document.getElementById("remainingguesses").innerHTML = guessesRemaining;


// functions

// function updateScore() {
//     document.querySelector("#wins").innerHTML = "Wins: " + score;
//   }




    document.onkeyup = function(event) {
        var letter = String.fromCharCode(event.which).toLowerCase();
        // var guess = KeyboardEvent.key;
        // console.log(guess);
        // var answerArray = [];
        // for (let i = 0; i<randomWord.length; i++) {
        // answerArray[i] = "  _  ";
        // }
        for (let j = 0; j<randomWord.length; j++){
        console.log(letter);
    
        if(randomWord[j] === letter) {
            answerArray[i] == letter;
            remainingLength--;
            var key = document.getElementById("currentword").innerHTML;
            var replaceLetter = key.replace("_",letter);
            document.getElementById("currentword").innerHTML = replaceLetter;

            // if(guess === randomWord.length){
            //     for( var j = 0; j <randomWord.length; j++){
            //         if(randomWord[j] === guess){
            //             answerArray[i] === guess;
            //             remainingLength--;
            //             var key = document.getElementById("currentword").innerHTML;
            //             var replaceLetter = key.replace("_",letter);
            //             document.getElementById("currentword").innerHTML = replaceLetter;
            //         }
            //     }
            // }
        } else if (randomWord[j] != letter){
            answerArray[i] != letter;
            var missedLetter = document.getElementById("guessedletters").innerHTML;
            document.getElementById("guessedletters").innerHTML = missedLetter;
        }
    
        }

    }

// Process

