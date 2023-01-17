const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Page extends Model {
  getId() {
    return this.id;
  }
}

Page.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // created_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'page',
  }
);
module.exports = Page;
