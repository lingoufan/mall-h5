"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHome = getHome;

var _axios = _interopRequireDefault(require("../utils/axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getHome(params) {
  return _axios["default"].get('/index-infos');
}