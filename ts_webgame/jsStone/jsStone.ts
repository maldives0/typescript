//"strictNullChecks : true" => null과 undefined구분하기=>heroDate? :  Card | null => ?와 null은 별도로 친다
//빈값을 의도적으로 넣었음을 알리기 위해 null을 씀

//heroDate? :  Card => heroDate : Card | undefined

// interface Card{
//    (a:number, b:number):number//함수로 표현할 수도 있다
// add: (a:number, b:number)=> number//add함수로 표현할 수도 있다
//    new ( mine: boolean );//class로 표현할 수도 있다
// }
//const ex:Card = (a,b)=>a+b;
//const ex:Card = {
    //add: (a,b)=>a+b
//};
// class public=나, 자식, 내 instance 접근 가능, protected=나, 자식 접근가능, private=나만 접근가능

//generic 짝맞추기 기능
interface obj<T> {
 add: (a:T,b:T)=>T;
}
const num: obj<number>={//interface를 사용할 때 타입을 정한다=>숫자끼리만 더하기
    add:(a,b)=>a+b,
}
const str: obj<string>={
    add:(a,b)=>a+b,
}
num.add(1,2);

// function forEach<T extends Number>(arr:T[], callback:(item: T)=>void):void{//T를 extends(제한하기) Number를 상속한 값만으로 제한하기
//     for(let i :number = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// }
// forEach([1,2,3],(item)=>{

// })


// commonjs를 쓰기 위해서 설정 esModuleInterop=true하면 import * as A from './common';을 import * from './common';최신문법으로 가져올 수 있음, 비추함
import {Card, Player} from './types/types';
// import A = require('./common');//export = a;가져오기
// import * as A from './common';
// export * as A from './common';//import 후 바로 내보내기
import canUseDom from 'can-use-dom';
console.log(canUseDom);
window.hello='hi';
const opponent:  Player={
    hero: document.getElementById('rival-hero') as HTMLDivElement,
    deck: document.getElementById('rival-deck') as HTMLDivElement,
    field: document.getElementById('rival-cards') as HTMLDivElement,
    cost: document.getElementById('rival-cost') as HTMLDivElement,
    deckData:[],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData:null,
};
const me:  Player={
    hero: document.getElementById('my-hero') as HTMLDivElement,
    deck: document.getElementById('my-deck') as HTMLDivElement,
    field: document.getElementById('my-cards') as HTMLDivElement,
    cost: document.getElementById('my-cost') as HTMLDivElement,
    deckData:[],
    heroData: null,
    fieldData: [],
    chosenCard: null,
   chosenCardData:null,
};

class Hero implements Card{//클레스의 규칙을 Card interface가 담고 있다, Hero는 Card를 구현한다=> new Card()는 쓰지 않으므로 extends가 아닌 implements
    public att: number;
    public hp: number;
    public mine: boolean;
    public field: boolean;
    constructor(mine:boolean){
        this.att = Math.ceil(Math.random()*5);
        this.hp = Math.ceil(Math.random()*5);
        this.mine = mine;
        this.field = true;
    }
}
class Sub implements Card{
    public att: number;
    public hp: number;
    public cost: number;
    public mine: boolean;
    public field: boolean;
    constructor(mine:boolean){
        this.att = Math.ceil(Math.random()*5);
        this.hp = Math.ceil(Math.random()*5);
        this.cost = Math.floor((this.att + this.hp)/ 2);
        this.mine = mine;
        this.field = false;
    }
}


//타입가드=> Card를 작은 범위인 Sub로 줄여주는 함수
const isSub = function(data:Card): data is Sub{
    if(data.cost){//cost속성은 Sub에만 있다
        return true;//data is Sub는 true
    }else{
        return false;//data is Sub는 false
    }
}

const turnButton = document.getElementById('turn-btn') as HTMLButtonElement;
let turn = true;

function initiate(){
    [opponent, me].forEach(function(item){
        item.deckData = [];
        item.heroData = null;
        item.fieldData = [];
        item.chosenCard = null;
        item.chosenCardData = null;
    });
    createDeck({mine: false, count:5});
    createDeck({mine: true, count:5});
    createHero({mine: false});
    createHero({mine: true});
    redrawScreen({mine:false});
    redrawScreen({mine:true});
}
initiate();

function createDeck({mine, count}:{mine:boolean, count:number}){
    const player = mine? me: opponent;
    for(let i = 0; i<count;i++){
        player.deckData.push(new Sub(mine));
    }
    redrawDeck(player);
}

function createHero({mine}:{mine:boolean}){
    const player = mine? me: opponent;
    player.heroData = new Hero(mine);
    connectCardDOM(player.heroData, player.hero, true);
}
function redrawScreen({mine}:{mine:boolean}){
    const player = mine? me: opponent;
    redrawField(player);
    redrawDeck(player);
    redrawHero(player);
}

function redrawField(target: Player){
    target.field.innerHTML = '';
    target.fieldData.forEach(function(data){
        connectCardDOM(data, target.field);
    });
}
function redrawDeck(target: Player){
    target.deck.innerHTML = '';
    target.deckData.forEach(function(data){
        connectCardDOM(data, target.deck);
    });
}
function redrawHero(target:Player){
    if(!target.heroData){//heroData가 null이나 undefined인 경우를 없앤다
        console.error(target);
        throw new Error('heroData가 없습니다');
    }
    target.hero.innerHTML='';
    connectCardDOM(target.heroData, target.hero, true);
    // connectCardDOM(target.heroData!, target.hero, true);//heroData가 null이나 undefined인 경우를 없앤다
}

function connectCardDOM(data: Card, DOM: HTMLElement, hero?: boolean){
    const cardEl = document.querySelector('.card-hidden .card')!.cloneNode(true) as HTMLDivElement;// !확신주기 => 이것이 무조건 있다는 것을 프로그래머인 내가 보장하겠다는 의미
    cardEl.querySelector('.card-att')!.textContent = String(data.att);
    cardEl.querySelector('.card-hp')!.textContent= String(data.hp);
    if(hero){
        (cardEl.querySelector('.card-cost') as HTMLDivElement).style.display = 'none';
        const name = document.createElement('div');
        name.textContent='hero';
        cardEl.appendChild(name);
    }else{
        cardEl.querySelector('.card-cost')!.textContent = String(data.cost);
    }
    cardEl.addEventListener('click', function(){
        if(isSub(data) && data.mine === turn && !data.field){
            if(!deckToField({data})){
                createDeck({mine:turn, count:1});
            }
        }
        turnAction({cardEl, data});
    });
    DOM.appendChild(cardEl);
}

function deckToField({data}:{data:Sub}):boolean{
    const target =turn? me: opponent;
    const currentCost =Number(target.cost.textContent);
    if(currentCost < data.cost){
        alert('less cost');
        return true;
    }
    data.field = true;
    const idx = target.deckData.indexOf(data);
    target.deckData.splice(idx,1);
    target.fieldData.push(data);
    redrawField(target);
    redrawDeck(target);
    target.cost.textContent = String(currentCost - data.cost);
    return false;
}
function turnAction({cardEl, data}:{cardEl: HTMLDivElement, data: Card}){
    const team = turn? me: opponent;
    const enemy = turn? opponent: me;
if(cardEl.classList.contains('card-turnover')){
    return;
}
const enemyCard = turn? !data.mine : data.mine;
if(enemyCard && team.chosenCardData){
    data.hp = data.hp - team.chosenCardData.att;
    if(data.hp <=0){
        if(isSub(data)){
            const index = enemy.fieldData.indexOf(data);
            enemy.fieldData.splice(index,1);
        }else{
            alert('win!');
            initiate();
        }
    }
    redrawScreen({mine:!turn});
    if(team.chosenCard){
        team.chosenCard.classList.remove('card-selected');
        team.chosenCard.classList.add('card-turnover');
    }
    team.chosenCard = null;
    team.chosenCardData=null;
    return;
}else if(enemyCard){
    return;
}
if(data.field){
    document.querySelectorAll('.card').forEach(function(card){
        card.classList.remove('card-selected');
    });
    console.log(cardEl);
    cardEl.classList.add('card-selected');
    team.chosenCard = cardEl;
    team.chosenCardData = data;
}
}
turnButton.addEventListener('click', function(){
    const target = turn? me: opponent;
    document.getElementById('rival')!.classList.toggle('turn');
    document.getElementById('my')!.classList.toggle('turn');
    redrawField(target);
    redrawHero(target);
    turn = !turn;
    if(turn){
        me.cost.textContent ='10';
    }else{
        opponent.cost.textContent = '10';
    }
});
