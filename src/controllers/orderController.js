import orderAPIService from '../services/orderAPIService';

const readFunc = async (req, res) => {
    try {
        let data = await orderAPIService.getAllOrders();
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

const updateDriverField = async (req, res) => {
    try {
        let data = await orderAPIService.updateDriverName(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    }
    catch (error) {
        console.log('error from updateDriverField():', error)
        return res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: '',
        })
    }
}

const getOrderOfDriver = async (req, res) => {
    try {
        let data = await orderAPIService.orderOfDriver(req.query.driverName);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    }
    catch (error) {
        console.log('error from getOrderOfDriver():', error)
        return res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: '',
        })
    }
}

module.exports = { readFunc, updateDriverField, getOrderOfDriver }