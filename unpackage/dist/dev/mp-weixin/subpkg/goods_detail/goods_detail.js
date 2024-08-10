"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  watch: {
    // 定义 total 侦听器，指向一个配置对象
    total: {
      // handler 属性用来定义侦听器的 function 处理函数
      handler(newVal) {
        const findResult = this.options.find((x) => x.text === "购物车");
        if (findResult) {
          findResult.info = newVal;
        }
      }
    },
    immediate: true
  },
  computed: {
    // 调用 mapState 方法，把 m_cart 模块中的 cart 数组映射到当前页面中，作为计算属性来使用
    // ...mapState('模块的名称', ['要映射的数据名称1', '要映射的数据名称2'])
    ...common_vendor.mapState({ cart: (state) => state.m_cart.cart }),
    ...common_vendor.mapGetters("m_cart", ["total"])
  },
  data() {
    return {
      // 商品详情对象
      goods_info: {},
      // 左侧按钮组的配置对象
      options: [
        {
          icon: "shop",
          text: "店铺"
        },
        {
          icon: "cart",
          text: "购物车",
          info: 0
        }
      ],
      // 右侧按钮组的配置对象
      buttonGroup: [
        {
          text: "加入购物车",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "立即购买",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ]
    };
  },
  onLoad(options) {
    const goods_id = options.goods_id;
    this.options[1].info = this.total;
    this.getGoodsDetail(goods_id);
  },
  methods: {
    // 定义请求商品详情数据的方法
    async getGoodsDetail(goods_id) {
      const { data: res } = await common_vendor.index.$http.get("/api/public/v1/goods/detail", { goods_id });
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      res.message.goods_introduce = res.message.goods_introduce.replace(/<img /g, '<img style="display:block;" ').replace(/webp/g, "jpg");
      this.goods_info = res.message;
      console.log(res);
    },
    // 实现轮播图的预览效果
    preview(i) {
      common_vendor.index.previewImage({
        // 预览时，默认显示图片的索引
        current: i,
        // 所有图片 url 地址的数组
        urls: this.goods_info.pics.map((x) => x.pics_big)
      });
    },
    // 左侧按钮的点击事件处理函数
    onClick(e) {
      if (e.content.text === "购物车") {
        common_vendor.index.switchTab({
          url: "/pages/cart/cart"
        });
      }
    },
    // 右侧按钮的点击事件处理函数
    buttonClick(e) {
      if (e.content.text === "加入购物车") {
        const goods = {
          goods_id: this.goods_info.goods_id,
          // 商品的Id
          goods_name: this.goods_info.goods_name,
          // 商品的名称
          goods_price: this.goods_info.goods_price,
          // 商品的价格
          goods_count: 1,
          // 商品的数量
          goods_small_logo: this.goods_info.goods_small_logo,
          // 商品的图片
          goods_state: true
          // 商品的勾选状态
        };
        this.addToCart(goods);
      }
    },
    // 把 m_cart 模块中的 addToCart 方法映射到当前页面使用
    ...common_vendor.mapMutations("m_cart", ["addToCart"])
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_icons2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_goods_nav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.goods_info.goods_name
  }, $data.goods_info.goods_name ? {
    b: common_vendor.f($data.goods_info.pics, (item, i, i0) => {
      return {
        a: item.pics_big,
        b: common_vendor.o(($event) => $options.preview(i), i),
        c: i
      };
    }),
    c: common_vendor.t($data.goods_info.goods_price),
    d: common_vendor.t($data.goods_info.goods_name),
    e: common_vendor.p({
      type: "star",
      size: "18",
      color: "gray"
    }),
    f: common_vendor.t(_ctx.cart.length),
    g: $data.goods_info.goods_introduce,
    h: common_vendor.o($options.onClick),
    i: common_vendor.o($options.buttonClick),
    j: common_vendor.p({
      fill: true,
      options: $data.options,
      buttonGroup: $data.buttonGroup
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
