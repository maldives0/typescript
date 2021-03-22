import {
  DataTypes,
  Model,
  BelongsToManyAddAssociationsMixin,
  HasManyAddAssociationsMixin,
  HasManyAddAssociationMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManyAddAssociationMixin,
} from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';
import Hashtag from './hashtag';
import Image from './image';
import User from './user';
class Post extends Model {
  public readonly id!: number;

  public content!: string;

  public readonly createdAt!: Date;
  public readonly updateAt!: Date;

  public UserId!: number;
  public readonly Retweet?: Post;
  public RetweetId?: number;

  public addHashtags!: BelongsToManyAddAssociationsMixin<Hashtag, number>;
  public addImages!: HasManyAddAssociationsMixin<Image, number>;
  public addImage!: HasManyAddAssociationMixin<Image, number>;
  public addLikers!: BelongsToManyAddAssociationsMixin<User, number>;
  public addLiker!: BelongsToManyAddAssociationMixin<User, number>;
  public removeLiker!: BelongsToManyRemoveAssociationMixin<User, number>;
}
Post.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize, //model을 실제 db와 연결시켜줌
    modelName: 'Post',
    tableName: 'post',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
);
export const associate = (db: dbType) => {
  db.Post.belongsTo(db.User);
  db.Post.hasMany(db.Comment);
  db.Post.hasMany(db.Image);
  db.Post.belongsTo(db.Post, { as: 'Retweet' });
  db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
  db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
};
export default Post;
