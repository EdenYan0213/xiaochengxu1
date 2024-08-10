"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  computed: {
    // 1. 将 total 映射到当前组件中
    ...common_vendor.mapGetters("m_cart", ["checkedCount", "total", "checkedGoodsAmount"]),
    // 2. 是否全选
    isFullCheck() {
      return this.total === this.checkedCount;
    }
  },
  data() {
    return {};
  },
  methods: {
    ...common_vendor.mapMutations("m_cart", ["updateAllGoodsState"]),
    // label 的点击事件处理函数
    changeAllState() {
      this.updateAllGoodsState(!this.isFullCheck);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $options.isFullCheck,
    b: common_vendor.o((...args) => $options.changeAllState && $options.changeAllState(...args)),
    c: common_vendor.t(_ctx.checkedGoodsAmount),
    d: common_vendor.t(_ctx.checkedCount)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
