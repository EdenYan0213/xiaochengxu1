"use strict";
const common_vendor = require("../common/vendor.js");
const store_cart = require("./cart.js");
const store_user = require("./user.js");
const store = common_vendor.createStore({
  modules: {
    // 挂载购物车的 vuex 模块，模块内成员的访问路径被调整为 m_cart，例如：
    // 购物车模块中 cart 数组的访问路径是 m_cart/cart
    "m_cart": store_cart.moduleCart,
    "m_user": store_user.moduleUser
  }
});
exports.store = store;
