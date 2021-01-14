const {body} = document;
let candidate: number[];
let array: number[] = [];
const arr: [number, number] = [1,2];

function chooseNumber(){
    candidate = [1,2,3,4,5,6,7,8,9];
    array=[];
    for(let i: number = 0; i <4; i +=1){
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
                array.push(chosen);
    }
}
chooseNumber();
console.log(array);

const result = document.createElement('h1');
body.append(result);
const form = document.createElement('form');
body.append(form);
const input = document.createElement('input');
form.append(input);
input.type = 'text';
input.maxLength = 4;
const button = document.createElement('button');
button.textContent = '입력!';
form.append(button);

let wrongeCount = 0;
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const answer = input.value;
    if(answer === array.join('')){
        result.textContent = 'homerun';
        input.value='';
        input.focus();
        chooseNumber();
        wrongeCount = 0;
    }else{
        const answerArray = answer.split('');
        let strike = 0;
        let ball= 0;
        wrongeCount +=1;
        if(wrongeCount>10){
            result.textContent = `10번 넘게 틀려서 실패! 답은 ${array.join(',')}`;
            input.value='';
            input.focus();
            chooseNumber();
            wrongeCount=0;
            }else{
                console.log('답 틀리면', answerArray);
                for(let i:number =0; i<4;i+=1){
                    if(Number(answerArray[i]) === array[i]){
                        console.log('같은 자리?');
                        strike +=1;
                    }else if(array.indexOf(Number(answerArray[i]))>-1){
                        console.log('겹치는 숫자');
                        ball +=1;
                    }
                }
                result.textContent = `${strike} 스트라이크 ${ball}볼`;
                input.value='';
                input.focus();
            }
    }
});