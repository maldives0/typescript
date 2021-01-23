// 인터섹션 & :A&B&C 3개의 조건 모두 만족해야 한다
interface A {
  hello: true;
  why: true;
  how: true;
}
interface B {
  hi: true;
}
interface C {
  bye: true;
}
const d: A & B & C = {
  hello: true,
  why: true,
  how: true,
  hi: true,
  bye: true,
};
const e: Partial<A> = {
  //A의 일부만 만족하면 됨, 속성 중 하나를 바꾸고 싶을 때
  why: true,
  how: true,
};

const result = Array.prototype.map.call<
  number[],
  [(item: number) => string],
  string[]
>([1, 2, 3], (item) => {
  //call(this(map을 가리킴): Function, thisArg([1,2,3]배열을 가리킴): any, ...argArray((item)=> item.toFixed(1) 콜백함수를 가리킴, nest를 쓴 곳에는 배열이 와야한다=>[(item:number)=>string]): any[]): any;
  return item.toFixed(1);
});
//[1,2,3].map((item)=> item.toFixed(1));
//result: ['1.0','2.0','3.0'];

// bind는 오버로딩(여러 경우의 수를 하나의 함수가 처리하는 경우
// bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
// bind<T, A0, A extends any[], R>(this: (this: T, arg0: A0, ...args: A) => R, thisArg: T, arg0: A0): (...args: A) => R;
function toHex(this: Number) {
  return this.toString(16);
}
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
console.log(fiveToHex());

function makeGender(target: typeof Person) {
  //class의 결과값이 아니라 class의 타입 자체를 가지고 오고 싶으면 typeof
  return class extends target {
    gender = 'female';
    age = 40; //덮어씌워짐
  };
}

function readonly(target: any, key: any, descriptor: PropertyDescriptor) {
  console.log(target, key, descriptor);
  //target은 momo obj
  descriptor.writable = false; //다른 사람 수정 막기
}
function readonlyProperty(target: any, key: any, index: Number) {
  console.log(target, key, index);
  //target은 momo obj
}

@makeGender //기존 기능 추가, 수정 등등 꾸며주기=>class에서 중복을 줄여줄 수 있다
class Person {
  title: string;
  age = 29;

  constructor(title: string) {
    this.title = title;
  }
  setTitle(@readonlyProperty title: string) {
    this.title = title;
  }
  @readonly
  sayTitle(): any {
    return this.title;
  }
}

const momo = new Person('momo');
// momo.sayTitle = () => {
//   return 'changed';
// };

@makeGender
class Person2 {
  title: string;
  age = 27;

  constructor(title: string) {
    this.title = title;
  }
  setTitle(title: string) {
    this.title = title;
  }
  @readonly
  sayTitle(): any {
    return this.title;
  }
}
const momo2 = new Person2('momo');
