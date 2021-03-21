import * as passport from 'passport';
import User from '../models/user';
import local from './local';

export default () => {
  passport.serializeUser((user, done) => {
    //login시 한번 실행
    done(null, user.id); //memory에 모두 저정하지 않고 user의 id만 저장한다
  });
  passport.deserializeUser<number>(async (id, done) => {
    try {
      const user = await User.findOne({
        where: { id },
      });
      if (!user) {
        return done(new Error('no user'));
      }
      return done(null, user); //req.user
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });
  local();
};
