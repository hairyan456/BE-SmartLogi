import db from '../models/index';
import _ from 'lodash';
require('dotenv').config();

const getAllOrders = async () => {
    let listOrders = [];
    try {
        listOrders = await db.Order.findAll({
            raw: true,
            nest: true
        });

        if (listOrders && listOrders.length > 0) {
            return {
                EM: 'Get list orders success!',
                EC: 0,
                DT: listOrders
            }
        }
        else {
            return {
                EM: 'Cannot get list orders because table in DB is empty',
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log('>>> check error from getAllOrders():', error);
        return {
            EM: `Something wrongs in Service  getAllOrders() `,
            EC: -2,
            DT: ''
        }
    }
}

const updateDriverName = async (data) => {
    try {
        // tìm Order theo Order_ID
        console.log(data)
        let order = {};
        order = await db.Order.findOne({
            where: { id: +data.selectedOrderID },
            raw: false
        });
        if (order) {
            await order.update({ //nếu có tham số nào k truyền, thì sẽ k update cột đó
                driverName: data.selectedDriver
            });
            return {
                EM: 'Update for order success',
                EC: 0,
                DT: ''
            }
        }
        else {
            return {
                EM: 'Cannot found order!',
                EC: 1,
                DT: ''
            }

        }
    } catch (error) {
        console.log('>>> check error from updateDriverName():', error);
        return {
            EM: `Something wrongs in Service  updateDriverName() `,
            EC: -2,
            DT: ''
        }
    }
}

const orderOfDriver = async (driverName) => {
    let listOrders = [];
    try {
        listOrders = await db.Order.findAll({
            where: { driverName: driverName },
            raw: true,
            nest: true
        });
        if (listOrders && listOrders.length > 0) {
            return {
                EM: 'Get list orders success!',
                EC: 0,
                DT: listOrders
            }
        }
        else {
            return {
                EM: 'Cannot get list orders because table in DB is empty',
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log('>>> check error from orderOfDriver():', error);
        return {
            EM: `Something wrongs in Service  orderOfDriver() `,
            EC: -2,
            DT: ''
        }
    }
}
module.exports = { getAllOrders, updateDriverName, orderOfDriver }