import * as express from 'express';
import * as Sequelize from 'sequelize';
import Comment from '../models/Comment';
import Image from '../models/image';
import Post from '../models/post';
import User from '../models/user';

const router = express.Router();

router.get<any, any, any, { limit: string; lastId: string }>('/', async (req, res, next) => {
  // GET /posts
  try {
    let where = {};
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where = { id: { [Sequelize.Op.lt]: parseInt(req.query.lastId, 10) } };
    } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ],
      include: [
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

export default router;
