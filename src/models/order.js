'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {

        static associate(models) {
            // define association here
        }
    };
    Order.init({
        orderId: DataTypes.STRING,
        provinceSender: DataTypes.STRING,
        addressSender: DataTypes.STRING,
        provinceReceiver: DataTypes.STRING,
        addressReceiver: DataTypes.STRING,

        totalWeight: DataTypes.STRING,
        length: DataTypes.STRING,
        width: DataTypes.STRING,
        height: DataTypes.STRING,
        goodsType: DataTypes.STRING,

        selectedDate: DataTypes.STRING,
        ngayGiaoDuKien: DataTypes.STRING,
        selectedVehicle: DataTypes.STRING,
        selectedDelivery: DataTypes.STRING,
        distance: DataTypes.STRING,
        totalPrice: DataTypes.STRING,

        driverName: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};