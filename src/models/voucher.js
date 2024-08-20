'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Voucher extends Model {

        static associate(models) {
            // define association here

        }
    };
    Voucher.init({
        code: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Voucher',
    });
    return Voucher;
};