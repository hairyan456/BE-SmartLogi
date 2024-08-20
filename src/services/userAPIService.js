import bcrypt from 'bcryptjs';
import db from '../models/index';
import { Op } from 'sequelize';
import _ from 'lodash';
require('dotenv').config();
import { sendSimpleEmail } from './emailAPIService';

const salt = bcrypt.genSaltSync(10); //tham số để truyền vào BCrypt để hash pasword
const hashUserPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}

const checkEmailExisted = async (userEmail) => {
    let user = {};
    try {
        user = await db.User.findOne({
            where: {
                email: userEmail
            }
        });
        return user ? true : false;
    } catch (error) {
        console.log('>>> check error (checkEmailExisted):', error);
    }
}

const checkPhoneExisted = async (userPhone) => {
    let user = {};
    try {
        user = await db.User.findOne({
            where: {
                phoneNumber: userPhone
            }
        });
        return user ? true : false;
    } catch (error) {
        console.log('>>> check error (checkPhoneExisted):', error);
    }
}

const checkCitizendIdOrTaxCodeExisted = async (input, isCustomerOrBusiness) => {
    let user = {};
    try {
        if (isCustomerOrBusiness === 'KhachHang') {
            user = await db.User.findOne({
                where: {
                    citizenId: input
                }
            });
        }
        else if (isCustomerOrBusiness === 'DoanhNghiep') {
            user = await db.User.findOne({
                where: {
                    taxCode: input
                }
            });
        }
        return user && !_.isEmpty(user) ? true : false;
    } catch (error) {
        console.log('>>> check error (checkCitizendIdOrTaxCodeExisted):', error);
    }
}

const loginUser = async (userInfo) => {
    try {
        //nếu tồn tại Email hoặc Phone:
        if (await checkEmailExisted(userInfo.valueLogin) || await checkPhoneExisted(userInfo.valueLogin)) {
            let user = {};
            user = await db.User.findOne({
                attributes: ['email', 'password', 'roleId', 'fullName'],
                where: {
                    [Op.or]: [
                        { email: userInfo.valueLogin },
                        { phoneNumber: userInfo.valueLogin }
                    ]
                }
            });
            if (user) {
                if (bcrypt.compareSync(userInfo.password, user.password)) {
                    delete user.password; //không trả về password trong  Data
                    return {
                        EM: 'Login successfully',
                        EC: 0,
                        DT: user
                    }
                }
                else {
                    return {
                        EM: 'Wrong password!',
                        EC: 2,
                        DT: ''
                    }
                }
            }
        }
        else { //nếu email hoặc phone k tồn tại:
            return {
                EM: 'Email or phone is not existed',
                EC: 1,
                DT: ''
            }
        }
    } catch (error) {
        console.log('>>> check error loginUser():', error);
        return {
            EM: `Something wrong in loginUser() `,
            EC: -2,
            DT: ''
        }
    }
}

const registerNewUser = async (rawUserData) => {
    try {
        //check email/phonenumber are existed
        if (await checkEmailExisted(rawUserData.email)) {
            return {
                EM: 'Email is already existed',
                EC: 1
            }
        }
        if (await checkPhoneExisted(rawUserData.phoneNumber)) {
            return {
                EM: 'Phone number is already existed',
                EC: 1
            }
        }
        //check password length
        if (rawUserData.password && rawUserData.password.length < 3) {
            return {
                EM: 'Password must have more than 3 letters', //error message
                EC: 2, //error code
                DT: '', //data
            }
        }

        if (await checkCitizendIdOrTaxCodeExisted(rawUserData.citizenIdOrTaxCode, rawUserData.isCustomerOrBusiness)) {
            return {
                EM: 'Citizend ID or Tax code is existed!', //error message
                EC: 3, //error code
                DT: '', //data
            }
        }

        //create new user
        if (rawUserData.isCustomerOrBusiness === 'KhachHang') {
            await db.User.create({
                email: rawUserData.email,
                password: hashUserPassword(rawUserData.password),
                fullName: rawUserData.fullNameOrCompanyName,
                phoneNumber: rawUserData.phoneNumber,
                citizenId: rawUserData.citizenIdOrTaxCode,
                roleId: 'R2',
            })
        }
        else if (rawUserData.isCustomerOrBusiness === 'DoanhNghiep') {
            await db.User.create({
                email: rawUserData.email,
                password: hashUserPassword(rawUserData.password),
                companyName: rawUserData.fullNameOrCompanyName,
                phoneNumber: rawUserData.phoneNumber,
                taxCode: rawUserData.citizenIdOrTaxCode,
                roleId: 'R2',
            })
        }


        return {
            EM: 'Created successfully!',
            EC: 0
        }

    } catch (error) {
        console.log('>>> check error registerNewUser():', error);
        return {
            EM: `Something wrong in registerNewUser() `,
            EC: -2
        }
    }
}

// CRUD Users
const getAllUsers = async () => {
    let listUsers = [];
    try {
        listUsers = await db.User.findAll({
            attributes: { exclude: ['password', 'image'] },
            include: [
                { model: db.Allcode, as: 'roleData', attributes: ['valueEn', 'valueVi'] },
            ],
            raw: true,
            nest: true
        });

        if (listUsers && listUsers.length > 0) {
            return {
                EM: 'Get list users success!',
                EC: 0,
                DT: listUsers
            }
        }
        else {
            return {
                EM: 'Cannot get list users because table in DB is empty',
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log('>>> check error from getAllUsers():', error);
        return {
            EM: `Something wrongs in Service  getAllUsers() `,
            EC: -2,
            DT: ''
        }
    }
}

const createNewUser = async (rawData) => {
    try {
        // nếu không truyền email hay phoneNumber:
        if (!rawData.email || !rawData.phoneNumber) {
            return {
                EM: 'Email or phoneNumber not must be empty!',
                EC: 1,
                DT: ''
            }
        }
        // check Email & Phone existed
        if (await checkEmailExisted(rawData.email)) {
            return {
                EM: 'Email is already existed',
                EC: 1,
                DT: 'email'
            }
        }
        if (await checkPhoneExisted(rawData.phoneNumber)) {
            return {
                EM: 'Phone is already existed',
                EC: 1,
                DT: 'phoneNumber'
            }
        }
        //check password length
        if (rawData.password && rawData.password.length < 3) {
            return {
                EM: 'Password must have more than 3 letters',
                EC: 1,
                DT: 'password',
            }
        }
        await db.User.create({ ...rawData, password: hashUserPassword(rawData.password), image: rawData.avatar });
        return {
            EM: 'Created successfully!',
            EC: 0,
            DT: ''
        }
    } catch (error) {
        console.log('>>> check error from createNewUser():', error);
        return {
            EM: `Something wrongs in Service createNewUser() `,
            EC: -2,
            DT: ''
        }
    }
}

const updateUser = async (rawData) => {
    try {
        if (!rawData.id || !rawData.roleId || !rawData.positionId || !rawData.gender) {
            return {
                EM: 'Missing required parameter!',
                EC: 1,
                DT: ''
            }
        }
        let user = await db.User.findOne({ where: { id: rawData.id }, raw: false });
        if (user) {
            //nếu update phoneNumber mà phone đã tồn tại:
            if (await checkPhoneExisted(rawData.phoneNumber)) {
                return {
                    EM: 'Phone number is existed!',
                    EC: 1,
                    DT: 'phoneNumber'
                }
            }
            await user.update({ //nếu có tham số nào k truyền, thì sẽ k update cột đó
                firstName: rawData.firstName,
                lastName: rawData.lastName,
                phoneNumber: rawData.phoneNumber,
                address: rawData.address,
                gender: rawData.gender,
                positionId: rawData.positionId,
                roleId: rawData.roleId,
                image: rawData.avatar
            })
            return {
                EM: 'Updated success',
                EC: 0,
                DT: ''
            }
        }
        else {
            return {
                EM: 'User is not existed!',
                EC: -1,
                DT: ''
            }
        }
    } catch (error) {
        console.log('>>> check error from updateUser():', error);
        return {
            EM: `Something wrongs in Service  updateUser() `,
            EC: -2,
            DT: ''
        }
    }
}

const deleteUser = async (userId) => {
    try {
        if (!userId) {
            return {
                EM: 'Missing required parameter!',
                EC: 1,
                DT: ''
            }
        }
        let user = await db.User.findOne({ where: { id: userId } });
        if (user) {
            //hàm destroy() chỉ dùng cho Sequelize Object. Do đã config trả về raw:true ở config.json nên k dùng destroy được
            // await user.destroy();
            await db.User.destroy({ where: { id: userId } }); //xóa ở Database
            return {
                EM: 'Delete successfully',
                EC: 0,
                DT: ''
            }
        }
        else {
            return {
                EM: 'User is not existed!',
                EC: -1,
                DT: ''
            }
        }
    } catch (error) {
        console.log('>>> check error from deleteUser():', error);
        return {
            EM: `Something wrongs in Service deleteUser() `,
            EC: -2,
            DT: ''
        }
    }
}

const postConfirmOrder = async (data) => {
    try {
        let goodsType = '';
        if (data.goodsType === 'fish')
            goodsType = 'Cá tươi sống';
        else if (data.goodsType === 'meat')
            goodsType = 'Thịt tươi sống';
        else
            goodsType = 'Rau củ quả, trái cây';

        let delivery = '';
        if (data.selectedDelivery === 'standard')
            delivery = 'Giao hàng tiêu chuẩn';
        else if (data.selectedDelivery === 'expresss')
            delivery = 'Giao hàng nhanh';
        else delivery = 'Giao hàng hỏa tốc'

        let vehicle = '';
        if (data.selectedVehicle === '39804')
            vehicle = 'Xe tải nhỏ lạnh';
        else if (data.selectedVehicle === '37458')
            vehicle = 'Xe tải nhỏ (<1.25 tấn)';
        else if (data.selectedVehicle === '46482')
            vehicle = 'Xe tải vừa lạnh';
        else if (data.selectedVehicle === '43523')
            vehicle = 'Xe tải vừa (1.25 - dưới 10 tấn)';
        else if (data.selectedVehicle === '49825')
            vehicle = 'Container 20ft'
        else vehicle = 'Container 40ft'

        await db.Order.create({ ...data, goodsType: goodsType, selectedDelivery: delivery, selectedVehicle: vehicle });
        let dataSend = {
            email: data.email,
            orderId: data.orderId,
            provinceSender: data.provinceSender,
            addressSender: data.addressSender,
            provinceReceiver: data.provinceReceiver,
            addressReceiver: data.addressReceiver,
            totalWeight: data.totalWeight,
            length: data.length, width: data.width, height: data.height,
            goodsType: goodsType,
            selectedDate: data.selectedDate,
            ngayGiaoDuKien: data.ngayGiaoDuKien,
            vehicle: vehicle,
            delivery: delivery,
            distance: data.distance,
            totalPrice: data.totalPrice
        };
        await sendSimpleEmail(dataSend);
        return {
            EM: 'Created successfully!',
            EC: 0,
            DT: ''
        }
    } catch (error) {
        console.log('>>> check error from postConfirmOrder():', error);
        return {
            EM: `Something wrongs in Service postConfirmOrder() `,
            EC: -2,
            DT: ''
        }
    }
}

const getAllDrivers = async () => {
    let listDrivers = [];
    try {
        listDrivers = await db.User.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: { isAllocate: null, roleId: 'R3' },
            raw: true,
            nest: true
        });

        if (listDrivers && listDrivers.length > 0) {
            return {
                EM: 'Get list drivers success!',
                EC: 0,
                DT: listDrivers
            }
        }
        else {
            return {
                EM: 'Cannot get list drivers because table in DB is empty',
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log('>>> check error from getAllDrivers():', error);
        return {
            EM: `Something wrongs in Service  getAllDrivers() `,
            EC: -2,
            DT: ''
        }
    }
}

const getDriverByEmail = async (email) => {
    try {
        let driver = {};
        driver = await db.User.findOne({
            where: { email: email, roleId: 'R3' },
            raw: true
        });
        if (driver) {
            return {
                EM: 'success',
                EC: 0,
                DT: driver,
            }
        }
        else {
            return {
                EM: 'Cannot found driver',
                EC: 1,
                DT: '',
            }
        }
    } catch (error) {
        console.log('>>> check error from getDriverByEmail():', error);
        return {
            EM: `Something wrongs in Service  getDriverByEmail() `,
            EC: -2,
            DT: ''
        }
    }
}

const updateOrderField = async (data) => {
    try {
        // tìm Driver theo name
        console.log(data)
        let driver = {};
        driver = await db.User.findOne({
            where: { fullName: data.selectedDriver },
            raw: false
        });
        if (driver) {
            let order = await db.Order.findOne({
                where: { id: +data.selectedOrderID },
            });
            await driver.update({ //nếu có tham số nào k truyền, thì sẽ k update cột đó
                isAllocate: order.orderId
            });
            return {
                EM: 'Update for driver success',
                EC: 0,
                DT: ''
            }
        }
        else {
            return {
                EM: 'Cannot found driver!',
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

const confirmOrderDriver = async (email) => {
    try {
        let driver = {};
        driver = await db.User.findOne({
            where: { email: email, roleId: 'R3' },
            raw: false
        });
        if (driver) {
            await driver.update({ //nếu có tham số nào k truyền, thì sẽ k update cột đó
                isConfirm: 'true'
            });
            return {
                EM: 'confirm order for driver success',
                EC: 0,
                DT: '',
            }
        }
        else {
            return {
                EM: 'Cannot found driver',
                EC: 1,
                DT: '',
            }
        }
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
    loginUser, registerNewUser, checkEmailExisted, checkPhoneExisted, hashUserPassword, getAllUsers
    , createNewUser, updateUser, deleteUser, postConfirmOrder, getAllDrivers, updateOrderField, confirmOrderDriver,
    getDriverByEmail
}