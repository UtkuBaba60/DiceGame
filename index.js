var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
               //Second Dice

var randomNumber2 = Math.floor(Math.random() * 6) +1;

randomDiceImage = "dice" + randomNumber2 + ".png";
               
 randomImageSource = "images/" + randomDiceImage;
               
var image2 = document.querySelectorAll("img")[1];
               
image2.setAttribute("src", randomImageSource);
                // changing h1 text
var h1Text = document.querySelector("h1");

if(randomNumber1 >randomNumber2){
h1Text.innerHTML="🏴‍☠️Player 1 Wins!";
}
else if(randomNumber2 >randomNumber1){
h1Text.innerHTML="Player 2 Wins!🏴‍☠️";
}
else{
h1Text.innerHTML="Draw!";
}
