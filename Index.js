
function dicefate() {

    var number1 = Math.floor(Math.random() * 6);
    var number2 = Math.floor(Math.random() * 6);
    console.log(number1);
    console.log(number2);
    if (number1 > number2) {
        document.querySelector("h1").textContent = "🚩Player 1 Wins";
    }
    else if (number1 < number2) {
        document.querySelector("h1").textContent = "🚩Player 2 Wins";
    }
    else if (number1 === number2) {
        document.querySelector("h1").textContent = "LETS PLAY AGAIN";
    }
    
    diceyboi1(number1 );
    diceyboi2(number2 );

}
function diceyboi1(number1) {
    if (number1 === 0) {
        document.getElementsByClassName("img1")[0].src = "dice1.png";
    }
    else if (number1 === 1) {
        document.getElementsByClassName("img1")[0].src = "dice2.png";
    }
    else if (number1 === 2) {
        document.getElementsByClassName("img1")[0].src = "dice3.png";
    }
    else if (number1 === 3) {
        document.getElementsByClassName("img1")[0].src = "dice4.png";
    }
    else if (number1 === 4) {
        document.getElementsByClassName("img1")[0].src = "dice5.png";
    }
    else if (number1 === 5) {
        document.getElementsByClassName("img1")[0].src = "dice6.png";
    }
    
}
function diceyboi2(number2) {
    if (number2 === 0) {
        document.getElementsByClassName("img2")[0].src = "dice1.png";
    }
    else if (number2 === 1) {
        document.getElementsByClassName("img2")[0].src = "dice2.png";
    }
    else if (number2 === 2) {
        document.getElementsByClassName("img2")[0].src = "dice3.png";
    }
    else if (number2 === 3) {
        document.getElementsByClassName("img2")[0].src = "dice4.png";
    }
    else if (number2 === 4) {
        document.getElementsByClassName("img2")[0].src= "dice5.png";
    }
    else if (number2 === 5) {
        document.getElementsByClassName("img2")[0].src = "dice6.png";
    }
    
}
