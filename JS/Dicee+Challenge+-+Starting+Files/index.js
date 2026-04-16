let randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var a = "./images/" + randomDiceImage1;

// Select first image
document.querySelectorAll("img")[0].setAttribute("src", a);



let randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var b = "./images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", b);


if(randomNumber1 > randomNumber2) {
   document.querySelector("h1").innerText = "🏳️ Left is Win"
} else if(randomNumber1 < randomNumber2) {
   document.querySelector("h1").innerText = "🏳️ right is Win"
} else {
    document.querySelector("h1").innerText = "==="
}