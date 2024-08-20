'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            orderId: {
                type: Sequelize.STRING,
            },
            provinceSender: {
                type: Sequelize.STRING
            },
            addressSender: {
                type: Sequelize.STRING
            },
            provinceReceiver: {
                type: Sequelize.STRING
            },
            addressReceiver: {
                type: Sequelize.STRING
            },

            totalWeight: {
                type: Sequelize.STRING
            },
            length: {
                type: Sequelize.STRING
            },
            width: {
                type: Sequelize.STRING
            },
            height: {
                type: Sequelize.STRING
            },
            goodsType: {
                type: Sequelize.STRING
            },

            selectedDate: {
                type: Sequelize.STRING
            },
            ngayGiaoDuKien: {
                type: Sequelize.STRING
            },
            selectedVehicle: {
                type: Sequelize.STRING
            },
            selectedDelivery: {
                type: Sequelize.STRING
            },
            distance: {
                type: Sequelize.STRING
            },
            totalPrice: {
                type: Sequelize.STRING
            },
            driverName: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Orders');
    }
};