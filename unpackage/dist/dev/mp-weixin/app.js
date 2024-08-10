"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_store = require("./store/store.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/cate/cate.js";
  "./pages/cart/cart.js";
  "./pages/my/my.js";
  "./subpkg/goods_detail/goods_detail.js";
  "./subpkg/goods_list/goods_list.js";
  "./subpkg/search/search.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
common_vendor.wx$1.$http = common_vendor.$http;
common_vendor.index.$http = common_vendor.$http;
common_vendor.$http.baseUrl = "https://api-hmugo-web.itheima.net";
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(store_store.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
