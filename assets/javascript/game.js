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


var answer = [];
for (let i = 0; i<randomWord.length; i++) {
    answer[i] = "  _  ";
}
let remainingLength = randomWord.length;

document.getElementById("currentword").innerHTML=answer.join("");

let guessesRemaining = 15;

document.getElementById("remainingguesses").innerHTML = guessesRemaining;


// functions

function updateScore() {
    document.querySelector("#wins").innerHTML = "Wins: " + score;
  }

// Process
document.onkeyup = function(event) {
    for (let i = 0; i<randomWord.length; i++){
    var letter = String.fromCharCode(event.which).toLowerCase();
    console.log(letter);

    if(letter === answer[i]);{
        var key = document.getElementById("currentword").innerHTML;
        var replaceLetter = key.replace("_",letter);
        document.getElementById("currentword").innerHTML = replaceLetter;
    }
    
    }
}