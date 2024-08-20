import userAPIService from '../services/userAPIService';

const handleLogin = async (req, res) => {
    try {
        let data = await userAPIService.loginUser(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    }
    catch (error) {
        console.log('error from handleLogin():', error)
        return res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: '',
        })
    }
}

const handleRegister = async (req, res) => {
    try {
        let { email, phoneNumber, fullNameOrCompanyName, citizenIdOrTaxCode, password } = req.body;
        if (!email || !phoneNumber || !password || !fullNameOrCompanyName || !citizenIdOrTaxCode) {
            return res.status(200).json({
                EM: 'Missing required parameters',
                EC: 1,
                DT: '',
            })
        }
        //service create user:
        let data = await userAPIService.registerNewUser(req.body);
        return res.status(200).json({
            EM: data.EM, //error message
            EC: data.EC, //error code
            DT: '', //data
        })

    } catch (error) {
        console.log('error from handleRegister():', error)
        return res.status(500).json({
            EM: 'error from server', //error message
            EC: -1, //error code
            DT: '', //data
        })
    }
}

// const handleLogOut = (req, res) => {
//     try {
//         res.clearCookie('jwt');
//         return res.status(200).json({
//             EM: 'Log out successs',
//             EC: 0,
//             DT: '',
//         })
//     } catch (error) {
//         console.log('error from handleLogOut():', error);
//         return res.status(500).json({
//             EM: 'error from server',
//             EC: -1,
//             DT: '',
//         })
//     }
// }

// get all users from DB, URL: "/users/read"
const readFunc = async (req, res) => {
    try {
        let data = await userAPIService.getAllUsers();
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    } catch (error) {
        console.log('>>> check error from readFunc():', error);
        return res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: '',
        })
    }
}

// create a new user into DB, URL: "/users/create"
const createFunc = async (req, res) => {
    try {
        let data = await userAPIService.createNewUser(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    } catch (error) {
        console.log('>>> check error from createFunc():', error)
        return res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: '',
        })
    }
}

// update a user from DB, URL: "/users/update"
const updateFunc = async (req, res) => {
    try {
        let data = await userAPIService.updateUser(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    } catch (error) {
        console.log('>>> check error from updateFunc():', error)
        return res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: '',
        })
    }
}

// delete a user from DB, URL: "/users/delete"
const deleteFunc = async (req, res) => {
    try {
        let data = await userAPIService.deleteUser(req.body.id);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    } catch (error) {
        console.log('>>> check error from deleteFunc():', error)
        return res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: '',
        })
    }
}

const confirmOrder = async (req, res) => {
    try {
        let data = await userAPIService.postConfirmOrder(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    } catch (error) {
        console.log('>>> check error from confirmOrder():', error)
        return res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: '',
        })
    }
}

const getAllDrivers = async (req, res) => {
    try {
        let data = await userAPIService.getAllDrivers();
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

const getDriverByEmail = async (req, res) => {
    try {
        let data = await userAPIService.getDriverByEmail(req.query.email);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    }
    catch (error) {
        console.log('error from getDriverByEmail():', error)
        return res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: '',
        })
    }
}


const updateOrderField = async (req, res) => {
    try {
        let data = await userAPIService.updateOrderField(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    }
    catch (error) {
        console.log('error from updateOrderField():', error)
        return res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: '',
        })
    }
}

const confirmOrderDriver = async (req, res) => {
    try {
        let data = await userAPIService.confirmOrderDriver(req.query.email);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    }
    catch (error) {
        console.log('error from confirmOrderDriver():', error)
        return res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: '',
        })
    }
}
module.exports = {
    handleLogin, handleRegister, readFunc, createFunc, updateFunc, deleteFunc, confirmOrder,
    getAllDrivers, updateOrderField, confirmOrderDriver, getDriverByEmail
}