// customizing typing
import IUser from '../models/user';
//export{} global은 import나 export가 파일 안에 반드시 있어야 한다
//Augmentations for the global scope can only be directly nested in external modules or ambient module declarations.ts

declare global {
  namespace Express {
    export interface User extends IUser {
      // user?: User;
    }
  }
}

// //ambient module로 선언하는 경우
// declare module 'express-serve-static-core' {
//   interface Request {
//     user?: User;
//   }
// }

// namespace확장하는 경우, 다른 namespace(passport)와 충돌해 typescript가 무엇을 인지해야하는지 모르는 문제가 발생
// declare global {
//   namespace Express {
//     interface Request {
//       user?: User;
//       //Subsequent property declarations must have the same type.  Property 'user' must be of type 'User | undefined', but here has type 'User'.
//     }
//   }
// }
