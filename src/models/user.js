'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here
      User.belongsTo(models.Allcode, { foreignKey: 'roleId', targetKey: 'keyMap', as: 'roleData' })
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullName: DataTypes.STRING,
    companyName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    citizenId: DataTypes.STRING,
    taxCode: DataTypes.STRING,
    isUse65: DataTypes.STRING,
    isAllocate: DataTypes.STRING,
    isConfirm: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};