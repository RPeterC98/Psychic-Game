var wordBank = ["goku", "gutts", "inuyasha", "alucard", "vash", "dante", "mugen"];
var imgArray = []
var guessWord = document.getElementById("guessWord");
var guessNum = document.getElementById("guessNum");
var wrongGuess = document.getElementById("wrongGuess");
var imgFrame = document.getElementById("imgFrame");
var wordArray = [];
var blankArray = [];
var guessArray = [];
var imgArray = [];
var gameOver = false;
var guesses = 10;
var randomIndex;
var wins = 0;
var losses = 0;

function genImgArray() {
    for (i = 0; i < wordBank.length; i++) {
        imgArray[i] = new Image();
        imgArray[i].src = 'assets/images/' + wordBank[i] + ".jpg";
    }
}

document.onload = genImgArray();

function generateWord() {
    wordArray = [];
    blankArray = [];
    guessArray = [];
    guesses = 10;
    if(gameOver)
    {
        imgFrame.innerHTML = "";
    }
    randomIndex = Math.round(Math.random() * (wordBank.length - 1));
    for (i = 0; i < wordBank[randomIndex].length; i++) {
        blankArray.push("_");
        wordArray[i] = wordBank[randomIndex].substring(i, i + 1);
    }
    console.log(blankArray, wordArray);
    guessWord.innerHTML = blankArray.join(' ');
    guessNum.innerHTML = guesses;
    wrongGuess.innerHTML = "";
}

function wordCheck() {
    var replacer = event.key;
    var wrong = true;
    for (i = 0; i < wordArray.length; i++) {
        if (replacer == wordArray[i]) {
            var wrong = false;
            blankArray[i] = wordArray[i];
            guessWord.innerHTML = blankArray.join(' ');
        }
    }

    if (wrong) {
        guesses--;
        guessArray.push(replacer);
        wrongGuess.innerHTML = guessArray;
    }

    guessNum.innerHTML = guesses;

}


function show_image(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    imgFrame.appendChild(img);
}

function guessCheck() {
    if (guesses === 5) {
        imgFrame.innerHTML = "";
        show_image("assets/images/" + wordBank[randomIndex] + ".jpg", 500, 500);
    }
    if (guesses === 0 && !gameOver) {
        losses++;
        alert("You Lost! \n Wins:" + wins + " \n Losses: " + losses + "\n Hit Space to Play Again!");
        gameOver = true;
        console.log(gameOver)
    }
}


document.onkeydown = function (event) {
    if (guessWord.textContent == "" ||  (gameOver && event.key == " ")) {
        generateWord();
        gameOver = false;
    }
    else if (!gameOver) {
        wordCheck();
        guessCheck();
    }

document.onkeyup = function(event)
{
    if((guessWord.innerHTML == wordArray.join(" ")) && (guessWord.innerHTML != ""))
    {
        gameOver = true;
        wins++;
        alert("You Won! \n Wins:" + wins + " \n Losses: " + losses + "\n Hit Space to Play Again!");
    }
}


}

