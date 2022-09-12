let player1=".img1";
let player2=".img2";
function rollDice(player){  
    let randomNumber=Math.floor((Math.random()*6)+1);
    if(randomNumber==1){
        document.querySelector(player).setAttribute("src","images/dice1.png");
    }
    else if(randomNumber==2){
        document.querySelector(player).setAttribute("src","images/dice2.png");
    }
    else if(randomNumber==3){
        document.querySelector(player).setAttribute("src","images/dice3.png");
    }
    else if(randomNumber==4){
        document.querySelector(player).setAttribute("src","images/dice4.png");
    }
    else if(randomNumber==5){
        document.querySelector(player).setAttribute("src","images/dice5.png");
    }
    else if(randomNumber==6){
        document.querySelector(player).setAttribute("src","images/dice6.png");
    }
    return randomNumber;
}
function playTheDice(dice1,dice2){
    if(dice1>dice2){
        document.querySelector("h1").innerHTML="The player one is the Winner!!";
    }
    else if(dice2>dice1){
        document.querySelector("h1").innerHTML="The player two is the Winner!!";
    }
    else if(dice1==dice1){
        document.querySelector("h1").innerHTML="It a draw!";
    }
}
let dice1=rollDice(player1);
let dice2=rollDice(player2);
playTheDice(dice1,dice2);
