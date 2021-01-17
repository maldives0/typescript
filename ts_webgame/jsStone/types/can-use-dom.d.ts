declare module "can-use-dom"{//from 'can-use-dom'로 가져올 수 있음
    const canUseDom: boolean;
    export default canUseDom;
}

// declare function a(){
   
// };
// export = a;
//ambient(주변의), 라이브러리에 사용되는 타입 선언한 파일 d.ts, 다른 사람이 안만들어 놓았을 때 declare로 ambient modules만들기 
//다른 라이브러리 definitely types다운 받기=> @types/jquery
//namespace는 객체의 다른 이름 react.component에서 'react.'을 쓸 수 있다