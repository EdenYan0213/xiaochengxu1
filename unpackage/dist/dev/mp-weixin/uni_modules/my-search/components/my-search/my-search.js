"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    //背景颜色
    bgcolor: {
      type: String,
      default: "#C00000"
    },
    //圆角尺寸
    radius: {
      type: Number,
      default: 18
      //px
    }
  },
  data() {
    return {};
  },
  methods: {
    searchBoxHandler() {
      console.log("05");
      this.$emit("click");
    }
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
  return {
    a: common_vendor.p({
      type: "search",
      size: "17"
    }),
    b: $props.radius + "px",
    c: common_vendor.o((...args) => $options.searchBoxHandler && $options.searchBoxHandler(...args)),
    d: $props.bgcolor
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
