document.querySelector("button").addEventListener("click", game);


function game(){
var rd1 = Math.floor(Math.random() * 6 + 1);
var rd2 = Math.floor(Math.random() * 6 + 1);

var pl1 = document.querySelector("img.img1");
var pl2 = document.querySelector("img.img2");

var result1 = f1(rd1);
var result2 = f2(rd2);

if(rd1 > rd2){
    document.querySelector("h1").innerHTML = "player 1 won 🚩";
}else if(rd1 === rd2){
    document.querySelector("h1").innerHTML = "DRAW";
}else{
    document.querySelector("h1").innerHTML = "player 2 won 🚩";
}

function f1(rd1){
    if(rd1 === 1){
        pl1.setAttribute("src", "./image/dice1.png");
    }
    else if(rd1 === 2){
        pl1.setAttribute("src", "./image/dice2.png");
    }
    else if(rd1 === 3){
        pl1.setAttribute("src", "./image/dice3.png");
    }
    else if(rd1 === 4){
        pl1.setAttribute("src", "./image/dice4.png");
    }
    else if(rd1 === 5){
        pl1.setAttribute("src", "./image/dice5.png");
    }
    else if(rd1 === 6){
        pl1.setAttribute("src", "./image/dice6.png");
    }
    
}

function f2(rd2){
    if(rd2 === 1){
        pl2.setAttribute("src", "./image/dice1.png");
    }
    else if(rd2 === 2){
        pl2.setAttribute("src", "./image/dice2.png");
    }
    else if(rd2 === 3){
        pl2.setAttribute("src", "./image/dice3.png");
    }
    else if(rd2 === 4){
        pl2.setAttribute("src", "./image/dice4.png");
    }
    else if(rd2 === 5){
        pl2.setAttribute("src", "./image/dice5.png");
    }
    else if(rd2 === 6){
        pl2.setAttribute("src", "./image/dice6.png");
    }
}

}

// ANOTHER METHOD SHORTER   //



// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }