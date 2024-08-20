import voucherAPIService from '../services/voucherAPIService';

const readFunc = async (req, res) => {
    try {
        let data = await voucherAPIService.getAllVouchers();
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    }
    catch (error) {
        console.log('error from readFunc():', error)
        return res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: '',
        })
    }
}

const checkVoucherExisted = async (req, res) => {
    try {
        let data = await voucherAPIService.checkVoucherExisted(req.query.voucherCode);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    }
    catch (error) {
        console.log('error from checkVoucherExisted():', error)
        return res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: '',
        })
    }
}

module.exports = { readFunc, checkVoucherExisted }