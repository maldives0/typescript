import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';
class Post extends Model {
  public readonly id!: number;

  public content!: string;

  public readonly createdAt!: Date;
  public readonly updateAt!: Date;
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
  //   db.Post.hasMany(db.Post, { as: 'Posts' });
};
export default Post;
