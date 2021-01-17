export type A = string | number;
export interface Player {
    hero: HTMLDivElement
    deck: HTMLDivElement
    field: HTMLDivElement
    cost: HTMLDivElement
    deckData: Sub[]
    heroData: Hero | null
    fieldData: Sub[]
    chosenCard: HTMLDivElement | null
    chosenCardData: Card | null
}
export interface Card{
    att: number;
    hp: number;
    mine: boolean;//class로 표현할 수도 있다
    cost?: number;
    field?: boolean;
}

export class Hero implements Card{//클레스의 규칙을 Card interface가 담고 있다, Hero는 Card를 구현한다=> new Card()는 쓰지 않으므로 extends가 아닌 implements
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
export class Sub implements Card{
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
