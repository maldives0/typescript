import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';
class User extends Model {
  public readonly id!: number;
  public nickname!: string;
  public userId!: string;
  public password?: string;
  public readonly createdAt!: Date;
  public readonly updateAt!: Date;
}
User.init(
  {
    nickname: {
      type: DataTypes.STRING(20),
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize, //model을 실제 db와 연결시켜줌
    modelName: 'User',
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
);
export const associate = (db: dbType) => {
  // db.User.hasMany(db.Post, { as: 'Posts' });
};
export default User;
