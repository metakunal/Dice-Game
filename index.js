//Writing the code for the dice on the left side
//Generating a Random NUmber between 1 and 6
var randomNumber1=Math.floor((Math.random()*6)+1);
var randomDiceImage1="images/dice"+randomNumber1+".png";
console.log(randomNumber1);
document.querySelector(".img1").setAttribute("src",randomDiceImage1);

//Changing the dice on the right side
//Generating a Random NUmber between 1 and 6
var randomNumber2=Math.floor((Math.random()*6)+1);
var randomDiceImage2="images/dice"+randomNumber2+".png";
console.log(randomNumber2);
document.querySelector(".img2").setAttribute("src",randomDiceImage2);


//Writing the winning and loosing logic
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🏆 Player-1 Wins ";
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="📍 The Match ties 📍";
}else{
    document.querySelector("h1").textContent="🏆 Player-2 Wins ";
}