"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  // 定义 props 属性，用来接收外界传递到当前组件的数据
  props: {
    // 商品的信息对象
    goods: {
      type: Object,
      defaul: {}
    },
    // 是否展示图片左侧的 radio
    showRadio: {
      type: Boolean,
      // 如果外界没有指定 show-radio 属性的值，则默认不展示 radio 组件
      default: false
    },
    // 是否展示价格右侧的 NumberBox 组件
    showNum: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 默认的空图片
      defaultPic: "https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
    };
  },
  methods: {
    // 商品的勾选状态发生了变化
    radioChangeHandler(e) {
      console.log(e);
    },
    // radio 组件的点击事件处理函数
    radioClickHandler() {
      this.$emit("radio-change", {
        // 商品的 Id
        goods_id: this.goods.goods_id,
        // 商品最新的勾选状态            
        goods_state: !this.goods.goods_state
      });
    },
    // NumberBox 组件的 change 事件处理函数
    numChangeHandler(val) {
      this.$emit("num-change", {
        // 商品的 Id
        goods_id: this.goods.goods_id,
        // 商品的最新数量
        goods_count: +val
      });
    }
  },
  filters: {
    // 把数字处理为带两位小数点的数字
    tofixed(num) {
      return Number(num).toFixed(2);
    }
  }
};
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  _easycom_uni_number_box2();
}
const _easycom_uni_number_box = () => "../../../uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  _easycom_uni_number_box();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.showRadio
  }, $props.showRadio ? {
    b: $props.goods.goods_state,
    c: common_vendor.o((...args) => $options.radioChangeHandler && $options.radioChangeHandler(...args)),
    d: common_vendor.o((...args) => $options.radioClickHandler && $options.radioClickHandler(...args))
  } : {}, {
    e: $props.goods.goods_small_logo || $data.defaultPic,
    f: common_vendor.t($props.goods.goods_name),
    g: common_vendor.t(Number($props.goods.goods_price).toFixed(2)),
    h: $props.showNum
  }, $props.showNum ? {
    i: common_vendor.o($options.numChangeHandler),
    j: common_vendor.p({
      min: 1,
      value: $props.goods.goods_count
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
