//Build a small game where the user has to guess a secret number which is generated automatically in Javascript. After each guess the webpage displays to the user whether their guess is too large or too small. When the user guesses the secret number correctly - three pieces of information are displayed on the webpage: (1) the correct number  (2)the number of guesses (3)the message “Well done – correct guess!”
//event listener
var guessGame = document.getElementById("compare");
guessGame.addEventListener("click",compare,false);

//Variable storing users guess to evaluate in function compare()
var UserGuess1 = document.getElementById("UserGuess").value;

var answer = Math.ceil((Math.random() * 100));
//function that evaluates users guess and returns feedback
function compare()
{
   // window.alert("Hello World!")
    if (UserGuess1 === answer) 
    {
        document.getElementById("check").innerHTML = "Correct!";
    }
    
    else if (UserGuess1 < answer) 
    {
        document.getElementById("check").innerHTML = "The number is lower";
    }
    else
    {
        document.getElementById("check").innerHTML = "The number is higher";
    }
   
}