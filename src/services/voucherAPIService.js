import db from '../models/index';
import _ from 'lodash';
require('dotenv').config();

const checkVoucherExisted = async (voucherCode) => {
    let voucher = {};
    try {
        voucher = await db.Voucher.findOne({
            where: {
                code: voucherCode
            }
        });
        return voucher ? { EM: 'existed', EC: 0, DT: 'true' } : { EM: 'not existed', EC: 0, DT: false };
    } catch (error) {
        console.log('>>> check error (checkVoucherExisted):', error);
    }
}

const getAllVouchers = async () => {
    let listVouchers = [];
    try {
        listVouchers = await db.Voucher.findAll({
            raw: true,
            nest: true
        });

        if (listVouchers && listVouchers.length > 0) {
            return {
                EM: 'Get list vouchers success!',
                EC: 0,
                DT: listVouchers
            }
        }
        else {
            return {
                EM: 'Cannot get list vouchers because table in DB is empty',
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log('>>> check error from getAllVouchers():', error);
        return {
            EM: `Something wrongs in Service  getAllVouchers() `,
            EC: -2,
            DT: ''
        }
    }
}

module.exports = { getAllVouchers, checkVoucherExisted }