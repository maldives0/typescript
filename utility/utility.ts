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
