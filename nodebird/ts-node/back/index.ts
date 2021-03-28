import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as hpp from 'hpp';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
import * as passport from 'passport';
import { sequelize } from './models';
import userRouter from './routes/user';
import postRouter from './routes/post';
import postsRouter from './routes/posts';
import hashtagRouter from './routes/hashtag';
import { Request, Response, NextFunction, Application } from 'express';
const app: Application = express();
const prod: boolean = process.env.NODE_ENV === 'production';
app.set('port', prod ? process.env.PORT : 3065);

sequelize
  .sync({ force: false })
  .then(() => {
    //force: true  =>table새로 만들 때
    console.log('database success');
  })
  .catch((err: Error) => {
    console.error(err);
  });
//middleware
if (prod) {
  app.use(hpp());
  app.use(helmet());
  app.use(morgan('combined'));
  app.use(
    cors({
      origin: /nodebird\.com$/,
      credentials: true,
    }),
  );
} else {
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
}

app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
      httpOnly: true,
      secure: false, //https->true
      domain: prod ? '.nodebird.com' : undefined, //js와 다른 부분
    },
    name: 'rnbck',
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/hashtag', hashtagRouter);
app.use('/user', userRouter);
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello');
});
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('서버 에러 발생!');
});
app.listen(app.get('port'), () => {
  console.log(`server is running on ${app.get('port')}`);
});
//npx tsc --traceResolution : type우선순위보기
