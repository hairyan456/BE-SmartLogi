"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _index = _interopRequireDefault(require("../models/index"));
var _sequelize = require("sequelize");
var _lodash = _interopRequireDefault(require("lodash"));
var _emailAPIService = require("./emailAPIService");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require('dotenv').config();
var salt = _bcryptjs["default"].genSaltSync(10); //tham số để truyền vào BCrypt để hash pasword
var hashUserPassword = function hashUserPassword(password) {
  return _bcryptjs["default"].hashSync(password, salt);
};
var checkEmailExisted = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(userEmail) {
    var user;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          user = {};
          _context.prev = 1;
          _context.next = 4;
          return _index["default"].User.findOne({
            where: {
              email: userEmail
            }
          });
        case 4:
          user = _context.sent;
          return _context.abrupt("return", user ? true : false);
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.log('>>> check error (checkEmailExisted):', _context.t0);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function checkEmailExisted(_x) {
    return _ref.apply(this, arguments);
  };
}();
var checkPhoneExisted = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(userPhone) {
    var user;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          user = {};
          _context2.prev = 1;
          _context2.next = 4;
          return _index["default"].User.findOne({
            where: {
              phoneNumber: userPhone
            }
          });
        case 4:
          user = _context2.sent;
          return _context2.abrupt("return", user ? true : false);
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.log('>>> check error (checkPhoneExisted):', _context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return function checkPhoneExisted(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var checkCitizendIdOrTaxCodeExisted = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(input, isCustomerOrBusiness) {
    var user;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          user = {};
          _context3.prev = 1;
          if (!(isCustomerOrBusiness === 'KhachHang')) {
            _context3.next = 8;
            break;
          }
          _context3.next = 5;
          return _index["default"].User.findOne({
            where: {
              citizenId: input
            }
          });
        case 5:
          user = _context3.sent;
          _context3.next = 12;
          break;
        case 8:
          if (!(isCustomerOrBusiness === 'DoanhNghiep')) {
            _context3.next = 12;
            break;
          }
          _context3.next = 11;
          return _index["default"].User.findOne({
            where: {
              taxCode: input
            }
          });
        case 11:
          user = _context3.sent;
        case 12:
          return _context3.abrupt("return", user && !_lodash["default"].isEmpty(user) ? true : false);
        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](1);
          console.log('>>> check error (checkCitizendIdOrTaxCodeExisted):', _context3.t0);
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 15]]);
  }));
  return function checkCitizendIdOrTaxCodeExisted(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
var loginUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userInfo) {
    var user;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return checkEmailExisted(userInfo.valueLogin);
        case 3:
          _context4.t0 = _context4.sent;
          if (_context4.t0) {
            _context4.next = 8;
            break;
          }
          _context4.next = 7;
          return checkPhoneExisted(userInfo.valueLogin);
        case 7:
          _context4.t0 = _context4.sent;
        case 8:
          if (!_context4.t0) {
            _context4.next = 22;
            break;
          }
          user = {};
          _context4.next = 12;
          return _index["default"].User.findOne({
            attributes: ['email', 'password', 'roleId', 'fullName'],
            where: _defineProperty({}, _sequelize.Op.or, [{
              email: userInfo.valueLogin
            }, {
              phoneNumber: userInfo.valueLogin
            }])
          });
        case 12:
          user = _context4.sent;
          if (!user) {
            _context4.next = 20;
            break;
          }
          if (!_bcryptjs["default"].compareSync(userInfo.password, user.password)) {
            _context4.next = 19;
            break;
          }
          delete user.password; //không trả về password trong  Data
          return _context4.abrupt("return", {
            EM: 'Login successfully',
            EC: 0,
            DT: user
          });
        case 19:
          return _context4.abrupt("return", {
            EM: 'Wrong password!',
            EC: 2,
            DT: ''
          });
        case 20:
          _context4.next = 23;
          break;
        case 22:
          return _context4.abrupt("return", {
            EM: 'Email or phone is not existed',
            EC: 1,
            DT: ''
          });
        case 23:
          _context4.next = 29;
          break;
        case 25:
          _context4.prev = 25;
          _context4.t1 = _context4["catch"](0);
          console.log('>>> check error loginUser():', _context4.t1);
          return _context4.abrupt("return", {
            EM: "Something wrong in loginUser() ",
            EC: -2,
            DT: ''
          });
        case 29:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 25]]);
  }));
  return function loginUser(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
var registerNewUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(rawUserData) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return checkEmailExisted(rawUserData.email);
        case 3:
          if (!_context5.sent) {
            _context5.next = 5;
            break;
          }
          return _context5.abrupt("return", {
            EM: 'Email is already existed',
            EC: 1
          });
        case 5:
          _context5.next = 7;
          return checkPhoneExisted(rawUserData.phoneNumber);
        case 7:
          if (!_context5.sent) {
            _context5.next = 9;
            break;
          }
          return _context5.abrupt("return", {
            EM: 'Phone number is already existed',
            EC: 1
          });
        case 9:
          if (!(rawUserData.password && rawUserData.password.length < 3)) {
            _context5.next = 11;
            break;
          }
          return _context5.abrupt("return", {
            EM: 'Password must have more than 3 letters',
            //error message
            EC: 2,
            //error code
            DT: '' //data
          });
        case 11:
          _context5.next = 13;
          return checkCitizendIdOrTaxCodeExisted(rawUserData.citizenIdOrTaxCode, rawUserData.isCustomerOrBusiness);
        case 13:
          if (!_context5.sent) {
            _context5.next = 15;
            break;
          }
          return _context5.abrupt("return", {
            EM: 'Citizend ID or Tax code is existed!',
            //error message
            EC: 3,
            //error code
            DT: '' //data
          });
        case 15:
          if (!(rawUserData.isCustomerOrBusiness === 'KhachHang')) {
            _context5.next = 20;
            break;
          }
          _context5.next = 18;
          return _index["default"].User.create({
            email: rawUserData.email,
            password: hashUserPassword(rawUserData.password),
            fullName: rawUserData.fullNameOrCompanyName,
            phoneNumber: rawUserData.phoneNumber,
            citizenId: rawUserData.citizenIdOrTaxCode,
            roleId: 'R2'
          });
        case 18:
          _context5.next = 23;
          break;
        case 20:
          if (!(rawUserData.isCustomerOrBusiness === 'DoanhNghiep')) {
            _context5.next = 23;
            break;
          }
          _context5.next = 23;
          return _index["default"].User.create({
            email: rawUserData.email,
            password: hashUserPassword(rawUserData.password),
            companyName: rawUserData.fullNameOrCompanyName,
            phoneNumber: rawUserData.phoneNumber,
            taxCode: rawUserData.citizenIdOrTaxCode,
            roleId: 'R2'
          });
        case 23:
          return _context5.abrupt("return", {
            EM: 'Created successfully!',
            EC: 0
          });
        case 26:
          _context5.prev = 26;
          _context5.t0 = _context5["catch"](0);
          console.log('>>> check error registerNewUser():', _context5.t0);
          return _context5.abrupt("return", {
            EM: "Something wrong in registerNewUser() ",
            EC: -2
          });
        case 30:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 26]]);
  }));
  return function registerNewUser(_x6) {
    return _ref5.apply(this, arguments);
  };
}();

// CRUD Users
var getAllUsers = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var listUsers;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          listUsers = [];
          _context6.prev = 1;
          _context6.next = 4;
          return _index["default"].User.findAll({
            attributes: {
              exclude: ['password', 'image']
            },
            include: [{
              model: _index["default"].Allcode,
              as: 'roleData',
              attributes: ['valueEn', 'valueVi']
            }],
            raw: true,
            nest: true
          });
        case 4:
          listUsers = _context6.sent;
          if (!(listUsers && listUsers.length > 0)) {
            _context6.next = 9;
            break;
          }
          return _context6.abrupt("return", {
            EM: 'Get list users success!',
            EC: 0,
            DT: listUsers
          });
        case 9:
          return _context6.abrupt("return", {
            EM: 'Cannot get list users because table in DB is empty',
            EC: 0,
            DT: []
          });
        case 10:
          _context6.next = 16;
          break;
        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](1);
          console.log('>>> check error from getAllUsers():', _context6.t0);
          return _context6.abrupt("return", {
            EM: "Something wrongs in Service  getAllUsers() ",
            EC: -2,
            DT: ''
          });
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 12]]);
  }));
  return function getAllUsers() {
    return _ref6.apply(this, arguments);
  };
}();
var createNewUser = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(rawData) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          if (!(!rawData.email || !rawData.phoneNumber)) {
            _context7.next = 3;
            break;
          }
          return _context7.abrupt("return", {
            EM: 'Email or phoneNumber not must be empty!',
            EC: 1,
            DT: ''
          });
        case 3:
          _context7.next = 5;
          return checkEmailExisted(rawData.email);
        case 5:
          if (!_context7.sent) {
            _context7.next = 7;
            break;
          }
          return _context7.abrupt("return", {
            EM: 'Email is already existed',
            EC: 1,
            DT: 'email'
          });
        case 7:
          _context7.next = 9;
          return checkPhoneExisted(rawData.phoneNumber);
        case 9:
          if (!_context7.sent) {
            _context7.next = 11;
            break;
          }
          return _context7.abrupt("return", {
            EM: 'Phone is already existed',
            EC: 1,
            DT: 'phoneNumber'
          });
        case 11:
          if (!(rawData.password && rawData.password.length < 3)) {
            _context7.next = 13;
            break;
          }
          return _context7.abrupt("return", {
            EM: 'Password must have more than 3 letters',
            EC: 1,
            DT: 'password'
          });
        case 13:
          _context7.next = 15;
          return _index["default"].User.create(_objectSpread(_objectSpread({}, rawData), {}, {
            password: hashUserPassword(rawData.password),
            image: rawData.avatar
          }));
        case 15:
          return _context7.abrupt("return", {
            EM: 'Created successfully!',
            EC: 0,
            DT: ''
          });
        case 18:
          _context7.prev = 18;
          _context7.t0 = _context7["catch"](0);
          console.log('>>> check error from createNewUser():', _context7.t0);
          return _context7.abrupt("return", {
            EM: "Something wrongs in Service createNewUser() ",
            EC: -2,
            DT: ''
          });
        case 22:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 18]]);
  }));
  return function createNewUser(_x7) {
    return _ref7.apply(this, arguments);
  };
}();
var updateUser = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(rawData) {
    var user;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          if (!(!rawData.id || !rawData.roleId || !rawData.positionId || !rawData.gender)) {
            _context8.next = 3;
            break;
          }
          return _context8.abrupt("return", {
            EM: 'Missing required parameter!',
            EC: 1,
            DT: ''
          });
        case 3:
          _context8.next = 5;
          return _index["default"].User.findOne({
            where: {
              id: rawData.id
            },
            raw: false
          });
        case 5:
          user = _context8.sent;
          if (!user) {
            _context8.next = 16;
            break;
          }
          _context8.next = 9;
          return checkPhoneExisted(rawData.phoneNumber);
        case 9:
          if (!_context8.sent) {
            _context8.next = 11;
            break;
          }
          return _context8.abrupt("return", {
            EM: 'Phone number is existed!',
            EC: 1,
            DT: 'phoneNumber'
          });
        case 11:
          _context8.next = 13;
          return user.update({
            //nếu có tham số nào k truyền, thì sẽ k update cột đó
            firstName: rawData.firstName,
            lastName: rawData.lastName,
            phoneNumber: rawData.phoneNumber,
            address: rawData.address,
            gender: rawData.gender,
            positionId: rawData.positionId,
            roleId: rawData.roleId,
            image: rawData.avatar
          });
        case 13:
          return _context8.abrupt("return", {
            EM: 'Updated success',
            EC: 0,
            DT: ''
          });
        case 16:
          return _context8.abrupt("return", {
            EM: 'User is not existed!',
            EC: -1,
            DT: ''
          });
        case 17:
          _context8.next = 23;
          break;
        case 19:
          _context8.prev = 19;
          _context8.t0 = _context8["catch"](0);
          console.log('>>> check error from updateUser():', _context8.t0);
          return _context8.abrupt("return", {
            EM: "Something wrongs in Service  updateUser() ",
            EC: -2,
            DT: ''
          });
        case 23:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 19]]);
  }));
  return function updateUser(_x8) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(userId) {
    var user;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          if (userId) {
            _context9.next = 3;
            break;
          }
          return _context9.abrupt("return", {
            EM: 'Missing required parameter!',
            EC: 1,
            DT: ''
          });
        case 3:
          _context9.next = 5;
          return _index["default"].User.findOne({
            where: {
              id: userId
            }
          });
        case 5:
          user = _context9.sent;
          if (!user) {
            _context9.next = 12;
            break;
          }
          _context9.next = 9;
          return _index["default"].User.destroy({
            where: {
              id: userId
            }
          });
        case 9:
          return _context9.abrupt("return", {
            EM: 'Delete successfully',
            EC: 0,
            DT: ''
          });
        case 12:
          return _context9.abrupt("return", {
            EM: 'User is not existed!',
            EC: -1,
            DT: ''
          });
        case 13:
          _context9.next = 19;
          break;
        case 15:
          _context9.prev = 15;
          _context9.t0 = _context9["catch"](0);
          console.log('>>> check error from deleteUser():', _context9.t0);
          return _context9.abrupt("return", {
            EM: "Something wrongs in Service deleteUser() ",
            EC: -2,
            DT: ''
          });
        case 19:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 15]]);
  }));
  return function deleteUser(_x9) {
    return _ref9.apply(this, arguments);
  };
}();
var postConfirmOrder = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(data) {
    var goodsType, delivery, vehicle, dataSend;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          goodsType = '';
          if (data.goodsType === 'fish') goodsType = 'Cá tươi sống';else if (data.goodsType === 'meat') goodsType = 'Thịt tươi sống';else goodsType = 'Rau củ quả, trái cây';
          delivery = '';
          if (data.selectedDelivery === 'standard') delivery = 'Giao hàng tiêu chuẩn';else if (data.selectedDelivery === 'expresss') delivery = 'Giao hàng nhanh';else delivery = 'Giao hàng hỏa tốc';
          vehicle = '';
          if (data.selectedVehicle === '39804') vehicle = 'Xe tải nhỏ lạnh';else if (data.selectedVehicle === '37458') vehicle = 'Xe tải nhỏ (<1.25 tấn)';else if (data.selectedVehicle === '46482') vehicle = 'Xe tải vừa lạnh';else if (data.selectedVehicle === '43523') vehicle = 'Xe tải vừa (1.25 - dưới 10 tấn)';else if (data.selectedVehicle === '49825') vehicle = 'Container 20ft';else vehicle = 'Container 40ft';
          _context10.next = 9;
          return _index["default"].Order.create(_objectSpread(_objectSpread({}, data), {}, {
            goodsType: goodsType,
            selectedDelivery: delivery,
            selectedVehicle: vehicle
          }));
        case 9:
          dataSend = {
            email: data.email,
            orderId: data.orderId,
            provinceSender: data.provinceSender,
            addressSender: data.addressSender,
            provinceReceiver: data.provinceReceiver,
            addressReceiver: data.addressReceiver,
            totalWeight: data.totalWeight,
            length: data.length,
            width: data.width,
            height: data.height,
            goodsType: goodsType,
            selectedDate: data.selectedDate,
            ngayGiaoDuKien: data.ngayGiaoDuKien,
            vehicle: vehicle,
            delivery: delivery,
            distance: data.distance,
            totalPrice: data.totalPrice
          };
          _context10.next = 12;
          return (0, _emailAPIService.sendSimpleEmail)(dataSend);
        case 12:
          return _context10.abrupt("return", {
            EM: 'Created successfully!',
            EC: 0,
            DT: ''
          });
        case 15:
          _context10.prev = 15;
          _context10.t0 = _context10["catch"](0);
          console.log('>>> check error from postConfirmOrder():', _context10.t0);
          return _context10.abrupt("return", {
            EM: "Something wrongs in Service postConfirmOrder() ",
            EC: -2,
            DT: ''
          });
        case 19:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 15]]);
  }));
  return function postConfirmOrder(_x10) {
    return _ref10.apply(this, arguments);
  };
}();
var getAllDrivers = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    var listDrivers;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          listDrivers = [];
          _context11.prev = 1;
          _context11.next = 4;
          return _index["default"].User.findAll({
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            },
            where: {
              isAllocate: null,
              roleId: 'R3'
            },
            raw: true,
            nest: true
          });
        case 4:
          listDrivers = _context11.sent;
          if (!(listDrivers && listDrivers.length > 0)) {
            _context11.next = 9;
            break;
          }
          return _context11.abrupt("return", {
            EM: 'Get list drivers success!',
            EC: 0,
            DT: listDrivers
          });
        case 9:
          return _context11.abrupt("return", {
            EM: 'Cannot get list drivers because table in DB is empty',
            EC: 0,
            DT: []
          });
        case 10:
          _context11.next = 16;
          break;
        case 12:
          _context11.prev = 12;
          _context11.t0 = _context11["catch"](1);
          console.log('>>> check error from getAllDrivers():', _context11.t0);
          return _context11.abrupt("return", {
            EM: "Something wrongs in Service  getAllDrivers() ",
            EC: -2,
            DT: ''
          });
        case 16:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 12]]);
  }));
  return function getAllDrivers() {
    return _ref11.apply(this, arguments);
  };
}();
var getDriverByEmail = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(email) {
    var driver;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          driver = {};
          _context12.next = 4;
          return _index["default"].User.findOne({
            where: {
              email: email,
              roleId: 'R3'
            },
            raw: true
          });
        case 4:
          driver = _context12.sent;
          if (!driver) {
            _context12.next = 9;
            break;
          }
          return _context12.abrupt("return", {
            EM: 'success',
            EC: 0,
            DT: driver
          });
        case 9:
          return _context12.abrupt("return", {
            EM: 'Cannot found driver',
            EC: 1,
            DT: ''
          });
        case 10:
          _context12.next = 16;
          break;
        case 12:
          _context12.prev = 12;
          _context12.t0 = _context12["catch"](0);
          console.log('>>> check error from getDriverByEmail():', _context12.t0);
          return _context12.abrupt("return", {
            EM: "Something wrongs in Service  getDriverByEmail() ",
            EC: -2,
            DT: ''
          });
        case 16:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 12]]);
  }));
  return function getDriverByEmail(_x11) {
    return _ref12.apply(this, arguments);
  };
}();
var updateOrderField = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(data) {
    var driver, order;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          // tìm Driver theo name
          console.log(data);
          driver = {};
          _context13.next = 5;
          return _index["default"].User.findOne({
            where: {
              fullName: data.selectedDriver
            },
            raw: false
          });
        case 5:
          driver = _context13.sent;
          if (!driver) {
            _context13.next = 15;
            break;
          }
          _context13.next = 9;
          return _index["default"].Order.findOne({
            where: {
              id: +data.selectedOrderID
            }
          });
        case 9:
          order = _context13.sent;
          _context13.next = 12;
          return driver.update({
            //nếu có tham số nào k truyền, thì sẽ k update cột đó
            isAllocate: order.orderId
          });
        case 12:
          return _context13.abrupt("return", {
            EM: 'Update for driver success',
            EC: 0,
            DT: ''
          });
        case 15:
          return _context13.abrupt("return", {
            EM: 'Cannot found driver!',
            EC: 1,
            DT: ''
          });
        case 16:
          _context13.next = 22;
          break;
        case 18:
          _context13.prev = 18;
          _context13.t0 = _context13["catch"](0);
          console.log('>>> check error from updateDriverName():', _context13.t0);
          return _context13.abrupt("return", {
            EM: "Something wrongs in Service  updateDriverName() ",
            EC: -2,
            DT: ''
          });
        case 22:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 18]]);
  }));
  return function updateOrderField(_x12) {
    return _ref13.apply(this, arguments);
  };
}();
var confirmOrderDriver = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(email) {
    var driver;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          driver = {};
          _context14.next = 4;
          return _index["default"].User.findOne({
            where: {
              email: email,
              roleId: 'R3'
            },
            raw: false
          });
        case 4:
          driver = _context14.sent;
          if (!driver) {
            _context14.next = 11;
            break;
          }
          _context14.next = 8;
          return driver.update({
            //nếu có tham số nào k truyền, thì sẽ k update cột đó
            isConfirm: 'true'
          });
        case 8:
          return _context14.abrupt("return", {
            EM: 'confirm order for driver success',
            EC: 0,
            DT: ''
          });
        case 11:
          return _context14.abrupt("return", {
            EM: 'Cannot found driver',
            EC: 1,
            DT: ''
          });
        case 12:
          _context14.next = 18;
          break;
        case 14:
          _context14.prev = 14;
          _context14.t0 = _context14["catch"](0);
          console.log('error from confirmOrderDriver():', _context14.t0);
          return _context14.abrupt("return", res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: ''
          }));
        case 18:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 14]]);
  }));
  return function confirmOrderDriver(_x13) {
    return _ref14.apply(this, arguments);
  };
}();
module.exports = {
  loginUser: loginUser,
  registerNewUser: registerNewUser,
  checkEmailExisted: checkEmailExisted,
  checkPhoneExisted: checkPhoneExisted,
  hashUserPassword: hashUserPassword,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  postConfirmOrder: postConfirmOrder,
  getAllDrivers: getAllDrivers,
  updateOrderField: updateOrderField,
  confirmOrderDriver: confirmOrderDriver,
  getDriverByEmail: getDriverByEmail
};