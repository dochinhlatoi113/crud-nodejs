'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class links extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const customers = sequelize.define("customers");
      links.belongsTo(customers,{  foreignKey: "modelId",})
    }
  }
  links.init({
    model: DataTypes.STRING,
    modelId: DataTypes.BIGINT,
    linkFiles: DataTypes.TEXT('long')

  }, {
    sequelize,
    modelName: 'links',
  });
  return links;
};