/**
* author: Sergej Schefer
* */

/* global variables */
g_points = 0;
g_cards = null;
g_gamestart = false;

g_cardArray = Array('7', '8', '9', '10', 'Bauer(2)', 'Dame(3)', 'König(4)', 'As(11)');
g_pointValue = Array(7, 8, 9, 10, 2, 3, 4, 11);

function startGame(){
    resetGame();
    g_gamestart = true;
    setPoints(g_points);
    setCards(g_cards)
}

function setCards(cards){
    if(g_gamestart)
        document.getElementById("cards").innerHTML = cards;
    else
        alert("Bitte starten Sie ein neues Spiel!");
}

function setPoints(points){
    if(g_gamestart)
        document.getElementById("points").innerHTML = points;
}

function getRandomNumber(){
    var max = g_cardArray.length;
    var min = 0;
    var r = Math.floor((Math.random() * max) + min);
    return r;
}

function gameStep(){
    /* get random number */

    var random = getRandomNumber();

    if(g_cards == null){
        g_cards = g_cardArray[random];
    }else{
        g_cards += ", " + g_cardArray[random];
    }

    setCards(g_cards);

    g_points += g_pointValue[random];
    setPoints(g_points);

    if(g_points > 21){
        alert("Sie haben Verloren!\nBitte starten Sie ein neues Spiel!");
        resetGame();
    }else if(g_points == 21){
        alert("Sie haben Gewonnen!!\nBitte starten Sie ein neues Spiel!");
        resetGame();
    }
}

function resetGame(){
    g_points = 0;
    g_cards = null;
    g_gamestart = false;
}