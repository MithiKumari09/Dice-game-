var randomNumber1 = Math.floor(Math.random()*6)+1;

// to get the random image of dice 

var randomImage = "dice" + randomNumber1 + ".png";

// change image to random image 

var randomImageSrc = "images/" + randomImage;

// changing attribtue 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSrc);


// 2nd image 
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSrc2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}