let randomNumber = Math.floor(Math.random() * 6) +1;

let randomDice = 'dice-' + randomNumber +'.png';
let DiceImg = "IMAGES/" + randomDice;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", DiceImg);

let image2 = document.querySelectorAll("img")[1];
let randomNum2 = Math.floor(Math.random() * 6) +1;
let randomDice2= "dice-" + randomNum2 + ".png";
let DiceImg2= "IMAGES/" + randomDice2;

image2.setAttribute("src", DiceImg2)
let h2 = document.getElementById("elem")
if(randomNumber > randomNum2){
    h2.innerHTML="Player 1 is the Winner!"
}else if(randomNum2 > randomNumber){
    h2.innerHTML="Player 2 is the Winner!";
}else{
    h2.innerHTML="Draw!"
}