"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 请求参数对象
      queryObj: {
        // 查询关键词
        query: "",
        // 商品分类Id
        cid: "",
        // 页码值
        pagenum: 1,
        // 每页显示多少条数据
        pagesize: 10
      },
      goodsList: [],
      total: 0,
      // 是否正在请求数据
      isloading: false
    };
  },
  onLoad(options) {
    this.queryObj.query = options.query || "";
    this.queryObj.cid = options.cid || "";
    this.getGoodsList();
  },
  // 触底的事件
  onReachBottom() {
    if (this.queryObj.pagenum * this.queryObj.pagesize >= this.total)
      return common_vendor.index.$showMsg("数据加载完毕!");
    if (this.isloading)
      return;
    this.queryObj.pagenum += 1;
    this.getGoodsList();
  },
  // 下拉刷新的事件
  onPullDownRefresh() {
    this.queryObj.pagenum = 1;
    this.total = 0;
    this.isloading = false;
    this.goodsList = [];
    this.getGoodsList(() => common_vendor.index.stopPullDownRefresh());
  },
  methods: {
    async getGoodsList(cb) {
      this.isloading = true;
      const { data: res } = await common_vendor.index.$http.get("/api/public/v1/goods/search", this.queryObj);
      this.isloading = false;
      cb && cb();
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      this.goodsList = [...this.goodsList, ...res.message.goods];
      this.total = res.message.total;
      console.log(res);
    },
    // 点击跳转到商品详情页面
    gotoDetail(item) {
      common_vendor.index.navigateTo({
        url: "/subpkg/goods_detail/goods_detail?goods_id=" + item.goods_id
      });
    }
  }
};
if (!Array) {
  const _easycom_my_goods2 = common_vendor.resolveComponent("my-goods");
  _easycom_my_goods2();
}
const _easycom_my_goods = () => "../../uni_modules/my-goods/components/my-goods/my-goods.js";
if (!Math) {
  _easycom_my_goods();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.goodsList, (goods, i, i0) => {
      return {
        a: "7a98d7d7-0-" + i0,
        b: common_vendor.p({
          goods
        }),
        c: i,
        d: common_vendor.o(($event) => $options.gotoDetail(goods), i)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
