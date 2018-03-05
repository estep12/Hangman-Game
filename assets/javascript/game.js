
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
var wrongLetter = [""]; 

//Variables for game 
var wins = 0;
var randomWord = words[Math.floor(Math.random() * words.length)];
var guessesRemaining = 15;
var remainingLength = randomWord.length;



for (let i = 0; i<randomWord.length; i++) {
    answerArray.push("  _  ");
}
document.getElementById("currentword").innerHTML=answerArray.join("");
document.getElementById("remainingguesses").innerHTML = guessesRemaining;
document.getElementById("wins").innerHTML=wins;
document.getElementById("guessedletters").innerHTML=wrongLetter.join(" ");

//Console logs
console.log(randomWord);
console.log(guessesRemaining);

// functions

function startGame(){
    randomWord;
    answerArray;
    randomWord.length;  
    guessesRemaining;

}

// function resetGame(){
    
    
// }

//Process

startGame();
    document.onkeypress = function(event) {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        guessesRemaining --;
        document.getElementById("remainingguesses").innerHTML = guessesRemaining;

        for (let j = 0; j<randomWord.length; j++){
        
            if(randomWord[j] === letter) {
                answerArray[j] = letter;
                document.getElementById("currentword").innerHTML=answerArray.join("")
                remainingLength--; 
                console.log(remainingLength);
                if (remainingLength === 0) {
                    wins++;
                    document.getElementById("wins").innerHTML=wins;
                    document.location.reload();
                }
            } else  {
                wrongLetter.push(letter);
                document.getElementById("guessedletters").innerHTML=wrongLetter.join("");
                console.log(wrongLetter);

                
            }

           
        }
        
    }

    