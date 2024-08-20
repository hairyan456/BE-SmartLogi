"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _userAPIService = _interopRequireDefault(require("../services/userAPIService"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var handleLogin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _userAPIService["default"].loginUser(req.body);
        case 3:
          data = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
          }));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log('error from handleLogin():', _context.t0);
          return _context.abrupt("return", res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: ''
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function handleLogin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var handleRegister = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, email, phoneNumber, fullNameOrCompanyName, citizenIdOrTaxCode, password, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, email = _req$body.email, phoneNumber = _req$body.phoneNumber, fullNameOrCompanyName = _req$body.fullNameOrCompanyName, citizenIdOrTaxCode = _req$body.citizenIdOrTaxCode, password = _req$body.password;
          if (!(!email || !phoneNumber || !password || !fullNameOrCompanyName || !citizenIdOrTaxCode)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(200).json({
            EM: 'Missing required parameters',
            EC: 1,
            DT: ''
          }));
        case 4:
          _context2.next = 6;
          return _userAPIService["default"].registerNewUser(req.body);
        case 6:
          data = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            EM: data.EM,
            //error message
            EC: data.EC,
            //error code
            DT: '' //data
          }));
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.log('error from handleRegister():', _context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            EM: 'error from server',
            //error message
            EC: -1,
            //error code
            DT: '' //data
          }));
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function handleRegister(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

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
var readFunc = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _userAPIService["default"].getAllUsers();
        case 3:
          data = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
          }));
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log('>>> check error from readFunc():', _context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: ''
          }));
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function readFunc(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// create a new user into DB, URL: "/users/create"
var createFunc = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _userAPIService["default"].createNewUser(req.body);
        case 3:
          data = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
          }));
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.log('>>> check error from createFunc():', _context4.t0);
          return _context4.abrupt("return", res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: ''
          }));
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function createFunc(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// update a user from DB, URL: "/users/update"
var updateFunc = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _userAPIService["default"].updateUser(req.body);
        case 3:
          data = _context5.sent;
          return _context5.abrupt("return", res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
          }));
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.log('>>> check error from updateFunc():', _context5.t0);
          return _context5.abrupt("return", res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: ''
          }));
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function updateFunc(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// delete a user from DB, URL: "/users/delete"
var deleteFunc = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _userAPIService["default"].deleteUser(req.body.id);
        case 3:
          data = _context6.sent;
          return _context6.abrupt("return", res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
          }));
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.log('>>> check error from deleteFunc():', _context6.t0);
          return _context6.abrupt("return", res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: ''
          }));
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function deleteFunc(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var confirmOrder = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _userAPIService["default"].postConfirmOrder(req.body);
        case 3:
          data = _context7.sent;
          return _context7.abrupt("return", res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
          }));
        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          console.log('>>> check error from confirmOrder():', _context7.t0);
          return _context7.abrupt("return", res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: ''
          }));
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return function confirmOrder(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getAllDrivers = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _userAPIService["default"].getAllDrivers();
        case 3:
          data = _context8.sent;
          return _context8.abrupt("return", res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
          }));
        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          console.log('error from readFunc():', _context8.t0);
          return _context8.abrupt("return", res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: ''
          }));
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return function getAllDrivers(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var getDriverByEmail = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _userAPIService["default"].getDriverByEmail(req.query.email);
        case 3:
          data = _context9.sent;
          return _context9.abrupt("return", res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
          }));
        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          console.log('error from getDriverByEmail():', _context9.t0);
          return _context9.abrupt("return", res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: ''
          }));
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return function getDriverByEmail(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var updateOrderField = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _userAPIService["default"].updateOrderField(req.body);
        case 3:
          data = _context10.sent;
          return _context10.abrupt("return", res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
          }));
        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          console.log('error from updateOrderField():', _context10.t0);
          return _context10.abrupt("return", res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: ''
          }));
        case 11:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 7]]);
  }));
  return function updateOrderField(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var confirmOrderDriver = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return _userAPIService["default"].confirmOrderDriver(req.query.email);
        case 3:
          data = _context11.sent;
          return _context11.abrupt("return", res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
          }));
        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          console.log('error from confirmOrderDriver():', _context11.t0);
          return _context11.abrupt("return", res.status(500).json({
            EM: 'error from server',
            EC: -1,
            DT: ''
          }));
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return function confirmOrderDriver(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
module.exports = {
  handleLogin: handleLogin,
  handleRegister: handleRegister,
  readFunc: readFunc,
  createFunc: createFunc,
  updateFunc: updateFunc,
  deleteFunc: deleteFunc,
  confirmOrder: confirmOrder,
  getAllDrivers: getAllDrivers,
  updateOrderField: updateOrderField,
  confirmOrderDriver: confirmOrderDriver,
  getDriverByEmail: getDriverByEmail
};