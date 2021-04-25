"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _vant = require("vant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

_axios["default"].defaults.baseURL = process.env.NODE_ENV == 'development' ? '//121.43.231.185:8080/api/v1' : '//121.43.231.185:8080/api/v1'; // axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//10.30.224.247:8080/api/v1' : '//10.30.224.247:8080/api/v1'

_axios["default"].defaults.withCredentials = true;
_axios["default"].defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
_axios["default"].defaults.headers['token'] = localStorage.getItem('token') || '';
_axios["default"].defaults.headers.post['Content-Type'] = 'application/json';

_axios["default"].interceptors.response.use(function (res) {
  if (_typeof(res.data) !== 'object') {
    _vant.Toast.fail('服务端异常！');

    return Promise.reject(res);
  }

  if (res.data.resultCode != 200) {
    if (res.data.message) _vant.Toast.fail(res.data.message);

    if (res.data.resultCode == 416) {
      window.vRouter.push({
        path: '/login'
      });
    }

    return Promise.reject(res.data);
  }

  return res.data;
});

var _default = _axios["default"];
exports["default"] = _default;