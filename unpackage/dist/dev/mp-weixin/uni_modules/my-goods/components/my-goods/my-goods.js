"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  // 定义 props 属性，用来接收外界传递到当前组件的数据
  props: {
    // 商品的信息对象
    goods: {
      type: Object,
      defaul: {}
    }
  },
  data() {
    return {
      // 默认的空图片
      defaultPic: "https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
    };
  },
  filters: {
    // 把数字处理为带两位小数点的数字
    tofixed(num) {
      return Number(num).toFixed(2);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.goods.goods_small_logo || $data.defaultPic,
    b: common_vendor.t($props.goods.goods_name),
    c: common_vendor.t(Number($props.goods.goods_price).toFixed(2))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
