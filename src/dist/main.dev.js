"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _jsMd = _interopRequireDefault(require("js-md5"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _vant = require("vant");

require("lib-flexible/flexible");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vant.Form).use(_vant.Field).use(_vant.Toast).use(_vant.Button).use(_vant.Icon).use(_vant.GridItem).use(_vant.Grid).use(_vant.AddressList).use(_vant.Swipe).use(_vant.SwipeItem).use(_vant.SwipeCell).use(_vant.AddressEdit);

_vue["default"].prototype.$md5 = _jsMd["default"];
_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');