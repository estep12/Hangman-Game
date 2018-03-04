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

var guessesRemaining = 15;

document.getElementById("remainingguesses").innerHTML = guessesRemaining;
console.log(guessesRemaining);


// functions




    document.onkeypress = function(event) {
        var letter = String.fromCharCode(event.which).toLowerCase();
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
                    if(remainingLength === 0){
                        break;
                    }
                }
            } 

            

            if (j+1 === randomWord.length){
                // answerArray.length != letter;
                var missedLetter = document.getElementById("guessedletters").innerHTML;
                var wrongLetter = missedLetter.replace(' ', missedLetter);
                document.getElementById("guessedletters").innerHTML = wrongLetter;
                // alert('ur  gay');


            // }
                
                
        
        }

    }

    }