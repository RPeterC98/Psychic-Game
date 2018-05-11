var wordBank = ["goku", "gutts", "inuyasha"];
var guessWord = document.getElementById("guessWord");
var wordArray = [];
var blankArray = [];

function generateWord() 
{
    var randomIndex = Math.round(Math.random() * (wordBank.length - 1));
    var blankArray = [];
    var wordArray = [];
    for(i = 0; i < wordBank[randomIndex].length; i++)
    {
        blankArray.push("_");
        wordArray[i] = wordBank[randomIndex].substring(i, i+1);
    }
    console.log(blankArray, wordArray);
    guessWord.innerHTML = blankArray.join(' ');
}

function wordCheck() 
{
    var replacer = event.key;
    console.log(wordArray.length)
    for(i = 0; i < wordArray.length; i++)
    {
        console.log(wordArray[i])
    }
    
}

document.onkeyup = function (event) 
{   
    if (guessWord.textContent == "") 
    {
        generateWord();
        console.log(wordArray);
    }
    else
    {
        wordCheck();
    }
}
