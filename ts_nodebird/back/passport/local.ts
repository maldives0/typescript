import * as passport from 'passport';
import * as bcrypt from 'bcrypt';
import { Strategy } from 'passport-local';
import User from '../models/user';

module.exports = () => {
  passport.use(
    new Strategy(
      {
        usernameField: 'userId',
        passwordField: 'password',
        session: false, //session에 로그인 정보를 저장 안할 때
        passReqToCallback: true,
      },
      async (req, userId, password, done) => {
        try {
          const user = await User.findOne({
            where: { userId },
          });
          if (!user) {
            return done(null, false, { reason: '존재하지 않는 이메일입니다!' });
          }
          const result = await bcrypt.compare(password, user.password!);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      },
    ),
  );
};
