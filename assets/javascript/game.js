var wordBank = ["goku", "gutts", "inuyasha", "alucard", "vash", "dante", "mugen"];
var guessWord = document.getElementById("guessWord");
var guessNum = document.getElementById("guessNum");
var wrongGuess = document.getElementById("wrongGuess");
var wordArray = [];
var blankArray = [];
var guessArray = [];
var guesses = 10;

function generateWord() {
    var randomIndex = Math.round(Math.random() * (wordBank.length - 1));
    for (i = 0; i < wordBank[randomIndex].length; i++) {
        blankArray.push("_");
        wordArray[i] = wordBank[randomIndex].substring(i, i + 1);
    }
    console.log(blankArray, wordArray);
    guessWord.innerHTML = blankArray.join(' ');
    guessNum.innerHTML = guesses;
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
    document.body.appendChild(img);
}

document.onkeyup = function (event) {
    if (guessWord.textContent == "") {
        generateWord();
    }
    else
    {
        wordCheck();
    }
}
