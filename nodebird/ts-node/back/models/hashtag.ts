import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';
class Hashtag extends Model {
  public readonly id!: number;

  public name!: string;

  public readonly createdAt!: Date;
  public readonly updateAt!: Date;
}
Hashtag.init(
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize, //model을 실제 db와 연결시켜줌
    modelName: 'Hashtag',
    tableName: 'hashtag',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
);
export const associate = (db: dbType) => {
  //   db.Hashtag.hasMany(db.Hashtag, { as: 'Hashtags' });
};
export default Hashtag;
