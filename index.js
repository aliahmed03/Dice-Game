var player1Name = prompt("What is Player 1 name?");

var player2Name = prompt("What is Player 2 name?");

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
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2Name + " Wins!";
  }
  else {
    document.querySelector("h1").innerHTML = "It is a TIE!";
  }
}
