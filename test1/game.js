/**
 Copyright (c) 2013, Sergej Schefer
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. All advertising materials mentioning features or use of this software
 must display the following acknowledgement:
 This product includes software developed by Sergej Schefer.
 4. Neither the name of Sergej Schefer nor the
 names of its contributors may be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY SERGEJ SCHEFER ''AS IS'' AND ANY
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL SERGEJ SCHEFER BE LIABLE FOR ANY
 DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

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