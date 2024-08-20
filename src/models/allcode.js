'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {

        static associate(models) {
            // define association here
            Allcode.hasMany(models.User, { foreignKey: 'roleId', as: 'roleData' })
        }
    };
    Allcode.init({
        keyMap: DataTypes.STRING, // 'ROLE' , 'STATUS' , 'TIME', "GENDER","POSITION"
        type: DataTypes.STRING,
        valueEn: DataTypes.STRING,
        valueVi: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Allcode',
    });
    return Allcode;
};