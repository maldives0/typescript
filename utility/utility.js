"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const d = {
    hello: true,
    why: true,
    how: true,
    hi: true,
    bye: true,
};
const e = {
    //A의 일부만 만족하면 됨, 속성 중 하나를 바꾸고 싶을 때
    why: true,
    how: true,
};
const result = Array.prototype.map.call([1, 2, 3], (item) => {
    //call(this(map을 가리킴): Function, thisArg([1,2,3]배열을 가리킴): any, ...argArray((item)=> item.toFixed(1) 콜백함수를 가리킴, nest를 쓴 곳에는 배열이 와야한다=>[(item:number)=>string]): any[]): any;
    return item.toFixed(1);
});
//[1,2,3].map((item)=> item.toFixed(1));
//result: ['1.0','2.0','3.0'];
// bind는 오버로딩(여러 경우의 수를 하나의 함수가 처리하는 경우
// bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
// bind<T, A0, A extends any[], R>(this: (this: T, arg0: A0, ...args: A) => R, thisArg: T, arg0: A0): (...args: A) => R;
function toHex() {
    return this.toString(16);
}
const fiveToHex = toHex.bind(5);
console.log(fiveToHex());
function makeGender(target) {
    //class의 결과값이 아니라 class의 타입 자체를 가지고 오고 싶으면 typeof
    return class extends target {
        constructor() {
            super(...arguments);
            this.gender = 'female';
            this.age = 40; //덮어씌워짐
        }
    };
}
function readonly(target, key, descriptor) {
    console.log(target, key, descriptor);
    //target은 momo obj
    descriptor.writable = false; //다른 사람 수정 막기
}
function readonlyProperty(target, key, index) {
    console.log(target, key, index);
    //target은 momo obj
}
let Person = class Person {
    constructor(title) {
        this.age = 29;
        this.title = title;
    }
    setTitle(title) {
        this.title = title;
    }
    sayTitle() {
        return this.title;
    }
};
__decorate([
    __param(0, readonlyProperty)
], Person.prototype, "setTitle", null);
__decorate([
    readonly
], Person.prototype, "sayTitle", null);
Person = __decorate([
    makeGender //기존 기능 추가, 수정 등등 꾸며주기=>class에서 중복을 줄여줄 수 있다
], Person);
const momo = new Person('momo');
// momo.sayTitle = () => {
//   return 'changed';
// };
let Person2 = class Person2 {
    constructor(title) {
        this.age = 27;
        this.title = title;
    }
    setTitle(title) {
        this.title = title;
    }
    sayTitle() {
        return this.title;
    }
};
__decorate([
    readonly
], Person2.prototype, "sayTitle", null);
Person2 = __decorate([
    makeGender
], Person2);
const momo2 = new Person2('momo');
