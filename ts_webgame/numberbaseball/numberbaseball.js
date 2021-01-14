"use strict";
var body = document.body;
var candidate;
var array = [];
var arr = [1, 2];
function chooseNumber() {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (var i = 0; i < 4; i += 1) {
        var chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
}
chooseNumber();
console.log(array);
var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
form.append(input);
input.type = 'text';
input.maxLength = 4;
var button = document.createElement('button');
button.textContent = '입력!';
form.append(button);
var wrongeCount = 0;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var answer = input.value;
    if (answer === array.join('')) {
        result.textContent = 'homerun';
        input.value = '';
        input.focus();
        chooseNumber();
        wrongeCount = 0;
    }
    else {
        var answerArray = answer.split('');
        var strike = 0;
        var ball = 0;
        wrongeCount += 1;
        if (wrongeCount > 10) {
            result.textContent = "10\uBC88 \uB118\uAC8C \uD2C0\uB824\uC11C \uC2E4\uD328! \uB2F5\uC740 " + array.join(',');
            input.value = '';
            input.focus();
            chooseNumber();
            wrongeCount = 0;
        }
        else {
            console.log('답 틀리면', answerArray);
            for (var i = 0; i < 4; i += 1) {
                if (Number(answerArray[i]) === array[i]) {
                    console.log('같은 자리?');
                    strike += 1;
                }
                else if (array.indexOf(Number(answerArray[i])) > -1) {
                    console.log('겹치는 숫자');
                    ball += 1;
                }
            }
            result.textContent = strike + " \uC2A4\uD2B8\uB77C\uC774\uD06C " + ball + "\uBCFC";
            input.value = '';
            input.focus();
        }
    }
});
