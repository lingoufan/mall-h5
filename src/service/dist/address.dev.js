"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAddress = addAddress;
exports.editAddress = editAddress;
exports.deleteAddress = deleteAddress;
exports.getDefaultAddress = getDefaultAddress;
exports.getAddressList = getAddressList;
exports.getAddressDetail = getAddressDetail;

var _axios = _interopRequireDefault(require("../utils/axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addAddress(params) {
  return _axios["default"].post('/address', params);
}

function editAddress(params) {
  return _axios["default"].put('/address', params);
}

function deleteAddress(id) {
  return _axios["default"]["delete"]("/address/".concat(id));
}

function getDefaultAddress() {
  return _axios["default"].get('/address/default');
}

function getAddressList() {
  return _axios["default"].get('/address', {
    pageNumber: 1,
    pageSize: 1000
  });
}

function getAddressDetail(id) {
  return _axios["default"].get("/address/".concat(id));
}