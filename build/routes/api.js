"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = _interopRequireDefault(require("../controllers/userController"));
var _allCodeController = _interopRequireDefault(require("../controllers/allCodeController"));
var _voucherController = _interopRequireDefault(require("../controllers/voucherController"));
var _orderController = _interopRequireDefault(require("../controllers/orderController"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
var initAPIRoutes = function initAPIRoutes(app) {
  // routes for Login - Register
  router.post("/login", _userController["default"].handleLogin);
  router.post("/register", _userController["default"].handleRegister);

  // routes for CRUD User:
  router.get('/users/read', _userController["default"].readFunc);
  router.post('/users/create', _userController["default"].createFunc);
  router.put('/users/update', _userController["default"].updateFunc);
  router["delete"]('/users/delete', _userController["default"].deleteFunc);
  router.post('/users/confirm-order', _userController["default"].confirmOrder);
  router.put('/users/confirm-driver-order', _userController["default"].confirmOrderDriver);

  // routes for AllCodes:
  router.get('/allcodes/read', _allCodeController["default"].readFunc);

  // routes for Vouchers:
  router.get('/vouchers/read', _voucherController["default"].readFunc);
  router.get('/vouchers/checkExisted', _voucherController["default"].checkVoucherExisted);

  // routes for Orders:
  router.get('/orders/read', _orderController["default"].readFunc);
  router.put('/orders/update', _orderController["default"].updateDriverField);
  router.get('/orders/order-of-driver', _orderController["default"].getOrderOfDriver);

  // routes for Drivers:
  router.get('/drivers/read', _userController["default"].getAllDrivers);
  router.get('/drivers/get-by-email', _userController["default"].getDriverByEmail);
  router.put('/drivers/update', _userController["default"].updateOrderField);
  return app.use("/api/v1/", router);
};
var _default = exports["default"] = initAPIRoutes;