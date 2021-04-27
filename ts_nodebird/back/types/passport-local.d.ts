declare module 'passport-local' {
  //external module인 경우 top level이 아니다

  import { Request } from 'express';
  import { Strategy as PassportStrategy } from 'passport';

  export interface IVerifyOptions {
    [key: string]: any;
  }
  export interface IStrategyOptions {
    usernameField: string;
    passwordField: string;
    session?: boolean;
    passReqToCallback?: false;
  }
  export interface IStrategyOptionsWithRequest {
    usernameField: string;
    passwordField: string;
    session?: boolean;
    passReqToCallback?: true;
  }
  export interface Done {
    (error: Error | null, user?: any, options?: IVerifyOptions): void;
  }
  export interface VerifyFunction {
    (username: string, password: string, done: Done): void | Promise<any>;
  }
  export interface VerifyFunctionWithRequest {
    (req: Request, username: string, password: string, done: Done): void | Promise<any>;
  }
  export class Strategy extends PassportStrategy {
    constructor(options: IStrategyOptions, verify: VerifyFunction);

    constructor(options: IStrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
    //다양한 경우를 생각해 여러 constructor로 오버로딩하기
  }
}

//다른사람과 공유하기
//declare 는 전역으로 설정할 때 쓴다
//ambient module을 벗겨낸다
//혼자서만 쓸 때는 ambient module을 쓰지만 다른사람과 공유할 때는 해당 class에 declare을 붙여 전역설정으로 바꿔준다
//   import { Request } from 'express';
//   import { Strategy as PassportStrategy } from 'passport';
// ...
//   declare class Strategy extends PassportStrategy {
//     constructor(options: IStrategyOptions, verify: VerifyFunction);

//     constructor(options: IStrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
//     //다양한 경우를 생각해 여러 constructor로 오버로딩하기
//   }
