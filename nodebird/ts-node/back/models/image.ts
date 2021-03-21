import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';
class Image extends Model {
  public readonly id!: number;

  public src!: string;

  public readonly createdAt!: Date;
  public readonly updateAt!: Date;
}
Image.init(
  {
    src: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize, //model을 실제 db와 연결시켜줌
    modelName: 'Image',
    tableName: 'image',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
);
export const associate = (db: dbType) => {
  //   db.Image.hasMany(db.Image, { as: 'Images' });
};
export default Image;
