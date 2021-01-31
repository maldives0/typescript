"use strict";
var horizontal = 4;
var vertical = 3;
var colors = [
    'red',
    'red',
    'orange',
    'orange',
    'green',
    'green',
    'yellow',
    'yellow',
    'white',
    'white',
    'pink',
    'pink',
];
var colorCandidate = colors;
var color = [];
var clickFlag = true;
var clickCard = [];
var completedCard = [];
var startTime = null;
function shuffle() {
    for (var i = 0; colorCandidate.length > 0; i += 1) {
        color = color.concat(colorCandidate.splice(Math.floor(Math.random() * colorCandidate.length), 1));
    }
}
function setCard(horizontal, vertical) {
    clickFlag = false;
    for (var i = 0; i < horizontal * vertical; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.backgroundColor = color[i];
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        // card.addEventListener('click', function (this: HTMLDivElement) {
        //   if (clickFlag && !completedCard.includes(this)) {
        //     this.classList.toggle('flipped');
        //     clickCard.push(this);
        //   }
        // });
        document.querySelector('#wrapper').appendChild(card);
    }
    Array.prototype.forEach.call(document.getElementsByClassName('card'), function (card, index) {
        setTimeout(function () {
            card.classList.add('flipped');
        }, 1000 + 100 * index);
    });
    setTimeout(function () {
        Array.prototype.forEach.call(document.getElementsByClassName('card'), function (card, index) {
            card.classList.remove('flipped');
        });
        clickFlag = true;
        startTime = new Date();
    }, 5000);
}
shuffle();
setCard(horizontal, vertical);
