"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.login = login;
exports.getUserInfo = getUserInfo;
exports.logout = logout;

var _axios = _interopRequireDefault(require("../utils/axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//user.js ,每个方法的请求地址都和后端对应
// 注册
function register(params) {
  return _axios["default"].post('/user/register', params);
} //登录


function login(params) {
  return _axios["default"].post('/user/login', params);
} //获取用户信息


function getUserInfo() {
  return _axios["default"].get('/user/info');
} //登出


function logout() {
  return _axios["default"].post('/user/logout');
}