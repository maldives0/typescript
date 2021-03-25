import * as express from 'express';
import { Request } from 'express';
import * as Sequelize from 'sequelize';

import Image from '../models/image';
import Post from '../models/post';
import User from '../models/user';
import Hashtag from '../models/Hashtag';
import Comment from '../models/Comment';

const router = express.Router();

router.get<any, any, any, { lastId: string; limit: string }>('/:hashtag', async (req, res, next) => {
  // GET /hashtag/노드
  try {
    let where = {};
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where = { id: { [Sequelize.Op.lt]: parseInt(req.query.lastId, 10) } };
    } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Hashtag,
          where: { name: decodeURIComponent(req.params.hashtag) },
        },
        {
          model: User,
          attributes: ['id', 'nickname'],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['id', 'nickname'],
              order: [['createdAt', 'DESC']],
            },
          ],
        },
        {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id'],
        },
        {
          model: Post,
          as: 'Retweet',
          include: [
            {
              model: User,
              attributes: ['id', 'nickname'],
            },
            {
              model: Image,
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
