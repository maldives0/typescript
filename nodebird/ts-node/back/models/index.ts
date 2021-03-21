import User, { associate as associateUser } from './user';
import Post, { associate as associatePost } from './user';
import Hashtag, { associate as associateHashtag } from './user';
import Image, { associate as associateImage } from './user';
import Comment, { associate as associateComment } from './user';
export * from './sequelize'; //import함과 동시에 export하기
//models 안의 index, sequelize, user 간의 순환참조를 막기위해(user=>index부르면 index=>user를 또 부르면 두 모듈 중 하나가 빈 객체({})로 처리되어 문제 발생)
const db = {
  User,
  Post,
  Hashtag,
  Image,
  Comment,
};
export type dbType = typeof db;
associateUser(db);
associatePost(db);
associateHashtag(db);
associateImage(db);
associateComment(db);
