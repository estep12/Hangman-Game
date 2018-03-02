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
    answer[i] = "_";
}
let remainingLength = randomWord.length;

document.getElementById("currentword").innerHTML=answer;

let guessesRemaining = 15;

document.getElementById("remainingguesses").innerHTML = guessesRemaining;
