var player1Name = prompt("What is Player 1 name?");

var player2Name = prompt("What is Player 2 name?");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var player1Name = prompt("What is Player 1 name?");

var player2Name = prompt("What is Player 2 name?");

var numOfGames = prompt("How many games do you Intend to play?");

var i;
var player1Wins = 0;
var player2Wins = 0;
var noOfTie = 0;

for (i = 1; i <= numOfGames; i++) {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage = "dice" + randomNumber1 + ".png";

  var randomImageSource = "images/" + randomDiceImage;

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);



  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  randomDiceImage = "dice" + randomNumber2 + ".png";

  randomImageSource = "images/" + randomDiceImage;

  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomImageSource);

  document.querySelector("p.player1").innerHTML = player1Name;
  document.querySelector("p.player2").innerHTML = player2Name;

  {
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = player1Name + " Wins!";
      player1Wins++;
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = player2Name + " Wins!";
      player2Wins++;
    } else {
      document.querySelector("h1").innerHTML = "It is a TIE!";
      noOfTie++;
    }
  }

}

alert(player1Name+ " won "+player1Wins+ " times and "+ player2Name +" won "+player2Wins +" times." );
if (noOfTie>0 && noOfTie < 2)
alert(noOfTie + " Tie" );
else
alert(noOfTie + " Ties");
