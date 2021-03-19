
import * as React from "react";
import { Component } from "react";
import {Dispatch} from 'redux';
import {logIn, logOut, } from './actions/user'
import {UserState} from './reducers/user'
import {RootState} from './reducers'
import {RequestData} from './actions/user'
interface StateToProps{
  user: UserState
  
}
interface DispatchToProps {
  dispatchLogIn: ({id,password}:RequestData)=>void
  dispatchLogOut:()=>void
}
class App extends Component <StateToProps & DispatchToProps>{
    onClick = () => {
        this.props.dispatchLogIn({
          id: 'zerocho',
          password: '비밀번호',
        });
      };
    
      onLogout = () => {
        this.props.dispatchLogOut();
      };
    render() {
        const { user } = this.props;
        return (
          <div>
            {user.isLoggingIn
              ? <div>로그인 중</div>
              : user.data
                ? <div>{user.data.nickname}</div>
                : '로그인 해주세요.'}
            {!user.data
              ? <button onClick={this.onClick}>로그인</button>
              : <button onClick={this.onLogout}>로그아웃</button>}
          </div>
        );
      }
    }
const mapStateToProps = (state: RootState)=>({
    user: state.user,
    posts: state.posts
})
const mapDispatchToProps = (dispatch: Dispatch)=>({
    dispatchLogIn:(data)=>dispatch(logIn(data)),
    dispatchLogOut:()=>dispatch(logOut()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
