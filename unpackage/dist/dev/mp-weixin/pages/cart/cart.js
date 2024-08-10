"use strict";
const common_vendor = require("../../common/vendor.js");
const mixins_tabbarBadge = require("../../mixins/tabbar-badge.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  mixins: [mixins_tabbarBadge.badgeMix],
  computed: {
    // 将 m_cart 模块中的 cart 数组映射到当前页面中使用
    ...common_vendor.mapState({ cart: (state) => state.m_cart.cart }),
    ...common_vendor.mapGetters("m_cart", ["total"])
    // ...mapState('m_cart', ['cart']),
  },
  data() {
    return {
      options: [{
        text: "删除",
        // 显示的文本内容
        style: {
          backgroundColor: "#C00000"
          // 按钮的背景颜色
        }
      }]
    };
  },
  onShow() {
    this.setBadge();
  },
  methods: {
    setBadge() {
      common_vendor.index.setTabBarBadge({
        index: 2,
        // 索引
        text: this.total + ""
        // 注意：text 的值必须是字符串，不能是数字
      });
    },
    ...common_vendor.mapMutations("m_cart", ["updateGoodsState", "updateGoodsCount", "removeGoodsById"]),
    // 商品的勾选状态发生了变化
    radioChangeHandler(e) {
      this.updateGoodsState(e);
    },
    // 商品的数量发生了变化
    numberChangeHandler(e) {
      this.updateGoodsCount(e);
    },
    // 点击了滑动操作按钮
    swipeActionClickHandler(goods) {
      this.removeGoodsById(goods.goods_id);
    }
  }
};
if (!Array) {
  const _easycom_my_address2 = common_vendor.resolveComponent("my-address");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_my_goods2 = common_vendor.resolveComponent("my-goods");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_my_settle2 = common_vendor.resolveComponent("my-settle");
  (_easycom_my_address2 + _easycom_uni_icons2 + _easycom_my_goods2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_my_settle2)();
}
const _easycom_my_address = () => "../../uni_modules/my-address/components/my-address/my-address.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_my_goods = () => "../../uni_modules/my-goods/components/my-goods/my-goods.js";
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
const _easycom_my_settle = () => "../../uni_modules/my-settle/components/my-settle/my-settle.js";
if (!Math) {
  (_easycom_my_address + _easycom_uni_icons + _easycom_my_goods + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_my_settle)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.cart.length !== 0
  }, _ctx.cart.length !== 0 ? {
    b: common_vendor.p({
      type: "shop",
      size: "18"
    }),
    c: common_vendor.f(_ctx.cart, (goods, i, i0) => {
      return {
        a: common_vendor.o($options.radioChangeHandler, i),
        b: common_vendor.o($options.numberChangeHandler, i),
        c: "abfb192e-4-" + i0 + "," + ("abfb192e-3-" + i0),
        d: common_vendor.p({
          goods,
          showRadio: true,
          ["show-num"]: true
        }),
        e: common_vendor.o(($event) => $options.swipeActionClickHandler(goods), i),
        f: "abfb192e-3-" + i0 + ",abfb192e-2",
        g: i
      };
    }),
    d: common_vendor.p({
      ["right-options"]: $data.options
    })
  } : {
    e: common_assets._imports_0
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
