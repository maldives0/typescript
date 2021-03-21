import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';
class Comment extends Model {
  public readonly id!: number;

  public content!: string;

  public readonly createdAt!: Date;
  public readonly updateAt!: Date;
}
Comment.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize, //model을 실제 db와 연결시켜줌
    modelName: 'Comment',
    tableName: 'comment',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
);
export const associate = (db: dbType) => {
  //   db.Comment.hasMany(db.Comment, { as: 'Comments' });
};
export default Comment;
