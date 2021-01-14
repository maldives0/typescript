"use strict";
var imgCoords = 0;
var rsp = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px'
};
function computerChoice(imgCoords) {
    return Object.keys(rsp).find(function (k) {
        return rsp[k] === imgCoords;
    }); //
    //keys의 반환값인 string[] 은 넓은 개념-> type범위를 좁게 잡아주기-> as ['ROCK','SCISSORS','PAPER']로 강제변환
}
function intervalMaker() {
}
var score = {
    SCISSORS: 1,
    ROCK: 0,
    PAPER: -1
};
document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var myChoice = this.id; //id는 string이므로 타입의 볌위를 줄여줘야 오류가 해결됨, 무한집합을 유한집합으로 바꿔주기->배열로 강제변환해야 myScore에서 any가 아닐 수 있다
        var myScore = score[myChoice];
        var computerScore = score[computerChoice(imgCoords)];
        var diff = myScore - computerScore;
        if (diff === 0) {
            console.log('비겼습니다.');
        }
        else if ([-1, 2].includes(diff)) {
            console.log('이겼습니다.');
        }
        else {
            console.log('졌습니다.');
        }
    });
});
