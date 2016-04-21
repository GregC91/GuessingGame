//Build a small game where the user has to guess a secret number which is generated automatically in Javascript. After each guess the webpage displays to the user whether their guess is too large or too small. When the user guesses the secret number correctly - three pieces of information are displayed on the webpage: (1) the correct number  (2)the number of guesses (3)the message “Well done – correct guess!”
//event listener
/*var guessGame = document.getElementById("compare");
guessGame.addEventListener("click",compare,false);*/

//Variable storing users guess to evaluate in function compare()
//var UserGuess1 = document.getElementById("guess").value;

//var guess1 = document.getElementById("guess").value;

var answer = Math.ceil((Math.random() * 100));

//function that evaluates users guess and returns feedback
function compare()
{
    var guess1 = parseInt(document.getElementById("guess").value);
   // window.alert("Hello World!")
    if (guess1 === answer) 
    {
        document.getElementById("check").innerHTML = "Correct!";
    }
    
    else if (guess1 < answer) 
    {
        document.getElementById("check").innerHTML = "Please guess a higher number";
    }
    else
    {
        document.getElementById("check").innerHTML = "Please guess a lower number";
    }
}