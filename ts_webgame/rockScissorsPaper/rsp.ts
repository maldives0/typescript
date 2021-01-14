interface RSP {
  readonly ROCK: string,
  readonly SCISSORS: string,
  readonly PAPER: string,
}

let imgCoords: RSP[keyof RSP]= 0;
const rsp: RSP ={
    ROCK: '0',
    SCISSORS:'-142px',
    PAPER: '-284px',
};
function computerChoice(imgCoords: RSP[keyof RSP]){
    return (Object.keys(rsp) as ['ROCK','SCISSORS','PAPER']).find(k=>{
        return rsp[k] === imgCoords;
    });//
    //keys의 반환값인 string[] 은 넓은 개념-> type범위를 좁게 잡아주기-> as ['ROCK','SCISSORS','PAPER']로 강제변환
}

function intervalMaker(){

}
const score = {
    SCISSORS: 1,
    ROCK:0,
    PAPER:-1,
};

document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('click', function(this: HTMLButtonElement){//js와 달라지는 부분 원래 event만 있는데 따로 this를 선언해주기, 화살표함수는 this가 부모 요소를 가리키므로 안됨
        const myChoice = this.id as keyof RSP;//id는 string이므로 타입의 볌위를 줄여줘야 오류가 해결됨, 무한집합을 유한집합으로 바꿔주기->배열로 강제변환해야 myScore에서 any가 아닐 수 있다
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgCoords)!];
        const diff = myScore - computerScore;
        if(diff === 0){
            console.log('비겼습니다.');
        }else if([-1,2].includes(diff)){
            console.log('이겼습니다.');
        }else{
            console.log('졌습니다.');
        }
    });
});