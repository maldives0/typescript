"use strict";
// extents 확장하기
// interface ex extends RSP
// 따로적어도 합쳐진다(다른 라이브러리 수정 가능)
// [key:string]:number
// 보통 type은 union이랑 같이 쓴다, 객체로는 interface
// 키와 값 불러오는 법: RSP[keyof RSP]
var imgCoords = '0';
var rsp = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px'
};
function computerChoice(imgCoords) {
    return Object.keys(rsp).find(function (k) {
        return rsp[k] === imgCoords;
    }); //
    //keys의 반환값인 string[] 은 넓은 개념-> type범위를 좁게 잡아주기-> as ['ROCK','SCISSORS','PAPER']로 강제변환(type casting)
    //느낌표를 안 쓰는 방법: 변수로 처리하면 타입스트립트가 같은 스트링을 다르게 처리하는 문제를 해결할 수 있다
    //const value = (Object.keys(rsp) as ['ROCK','SCISSORS','PAPER']).find(k=>{
    //     return rsp[k] === imgCoords;
    // });
    // if(!value){
    //     throw new Error('undefined');
    // }
    // return value
}
var interval;
function intervalMaker() {
    interval = setInterval(function () {
        if (imgCoords === rsp.ROCK) {
            imgCoords = rsp.SCISSORS;
        }
        else if (imgCoords === rsp.SCISSORS) {
            imgCoords = rsp.PAPER;
        }
        else {
            imgCoords = rsp.ROCK;
        }
        if (document.querySelector('#computer')) {
            document.querySelector('#computer').style.background = "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " + imgCoords + " 0"; //typscript는 html을 인식하지 못하기 때문에
        }
    }, 100);
}
intervalMaker();
var score = {
    SCISSORS: 1,
    ROCK: 0,
    PAPER: -1
};
var point = 0;
document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        clearInterval(interval);
        setTimeout(function () {
            intervalMaker();
        }, 1000);
        var myChoice = this.id; //id는 string이므로 타입의 볌위를 줄여줘야 오류가 해결됨, 무한집합을 유한집합으로 바꿔주기->배열로 강제변환해야 myScore에서 any가 아닐 수 있다
        var myScore = score[myChoice];
        var computerScore = score[computerChoice(imgCoords)];
        var diff = myScore - computerScore;
        if (diff === 0) {
            console.log('비겼습니다.');
        }
        else if ([-1, 2].includes(diff)) {
            console.log('이겼습니다.');
            point++;
        }
        else {
            console.log('졌습니다.');
            point--;
        }
        document.querySelector('#point').textContent = point + "\uC810 \uC785\uB2C8\uB2E4.";
    });
});
var start = 3;
var interval2 = setInterval(function () {
    if (start === 0) {
        console.log('종료');
        return clearInterval(interval2);
    }
    console.log(start);
    start -= 1;
}, 1000);
