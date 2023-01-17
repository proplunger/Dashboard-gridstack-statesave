const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Component extends Model {}

Component.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'component',
  }
);

module.exports = Component;
