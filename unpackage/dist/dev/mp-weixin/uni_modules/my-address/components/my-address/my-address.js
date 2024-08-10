"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    // 选择收货地址
    async chooseAddress() {
      const [err, succ] = await common_vendor.index.chooseAddress().catch((err2) => err2);
      if (err === null && succ.errMsg === "chooseAddress:ok") {
        this.updateAddress(succ);
      }
      if (err && (err.errMsg === "chooseAddress:fail auth deny" || err.errMsg === "chooseAddress:fail authorize no response")) {
        this.reAuth();
      }
    },
    // 调用此方法，重新发起收货地址的授权
    async reAuth() {
      const [err2, confirmResult] = await common_vendor.index.showModal({
        content: "检测到您没打开地址权限，是否去设置打开？",
        confirmText: "确认",
        cancelText: "取消"
      });
      if (err2)
        return;
      if (confirmResult.cancel)
        return common_vendor.index.$showMsg("您取消了地址授权！");
      if (confirmResult.confirm)
        return common_vendor.index.openSetting({
          // 3.4.1 授权结束，需要对授权的结果做进一步判断
          success: (settingResult) => {
            if (settingResult.authSetting["scope.address"])
              return common_vendor.index.$showMsg("授权成功！请选择地址");
            if (!settingResult.authSetting["scope.address"])
              return common_vendor.index.$showMsg("您取消了地址授权！");
          }
        });
    },
    ...common_vendor.mapMutations("m_user", ["updateAddress"])
  },
  computed: {
    ...common_vendor.mapState("m_user", ["address"]),
    ...common_vendor.mapGetters("m_user", ["addstr"])
    // 收货详细地址的计算属性
    //   addstr() {
    //     if (!this.address.provinceName) return ''
    //     // 拼接 省，市，区，详细地址 的字符串并返回给用户
    //     return this.address.provinceName + this.address.cityName + this.address.countyName + this.address.detailInfo
    //   }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: JSON.stringify(_ctx.address) === "{}"
  }, JSON.stringify(_ctx.address) === "{}" ? {} : {
    b: common_vendor.t(_ctx.address.userName),
    c: common_vendor.t(_ctx.address.telNumber),
    d: common_vendor.p({
      type: "arrowright",
      size: "16"
    }),
    e: common_vendor.t(_ctx.addstr),
    f: common_vendor.o((...args) => $options.chooseAddress && $options.chooseAddress(...args))
  }, {
    g: common_assets._imports_0$1
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
