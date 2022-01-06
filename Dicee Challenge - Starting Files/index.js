var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // for img1

image1.setAttribute("src", randomImageSource);


/////////////////////////////////////////////////////////////////////////////////

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // for img2

////////////////////////////////////////////////////////////////////////////////

if (randomNumber1 > randomNumber2) {
  // set PLayer 1 wins with a flag icon on the left side
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
  // set PLayer 1 wins with  a flag icon opn the right side
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
  // set it equal to draw
  document.querySelector("h1").innerHTML = "Draw!";
}
