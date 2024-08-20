import express from 'express';
import userController from '../controllers/userController';
import allCodeController from '../controllers/allCodeController';
import voucherController from '../controllers/voucherController';
import orderController from '../controllers/orderController';

const router = express.Router();

const initAPIRoutes = (app) => {
    // routes for Login - Register
    router.post("/login", userController.handleLogin);
    router.post("/register", userController.handleRegister);

    // routes for CRUD User:
    router.get('/users/read', userController.readFunc);
    router.post('/users/create', userController.createFunc);
    router.put('/users/update', userController.updateFunc);
    router.delete('/users/delete', userController.deleteFunc);
    router.post('/users/confirm-order', userController.confirmOrder);
    router.put('/users/confirm-driver-order', userController.confirmOrderDriver);

    // routes for AllCodes:
    router.get('/allcodes/read', allCodeController.readFunc);

    // routes for Vouchers:
    router.get('/vouchers/read', voucherController.readFunc);
    router.get('/vouchers/checkExisted', voucherController.checkVoucherExisted);

    // routes for Orders:
    router.get('/orders/read', orderController.readFunc);
    router.put('/orders/update', orderController.updateDriverField);
    router.get('/orders/order-of-driver', orderController.getOrderOfDriver);


    // routes for Drivers:
    router.get('/drivers/read', userController.getAllDrivers);
    router.get('/drivers/get-by-email', userController.getDriverByEmail);
    router.put('/drivers/update', userController.updateOrderField);

    return app.use("/api/v1/", router);
}

export default initAPIRoutes;