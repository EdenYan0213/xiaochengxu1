"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //当前窗口可用高度
      wh: 0,
      //一级分类
      cateList: [],
      active: 0,
      // 二级分类列表
      cateLevel2: [],
      // 滚动条距离顶部的距离
      scrollTop: 0
    };
  },
  onLoad() {
    const sysInfo = common_vendor.index.getSystemInfoSync();
    this.wh = sysInfo.windowHeight;
    this.getCateList();
  },
  methods: {
    async getCateList() {
      const { data: res } = await common_vendor.index.$http.get("/api/public/v1/categories");
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      console.log(res);
      this.cateList = res.message;
      this.cateLevel2 = res.message[0].children;
    },
    activeChanged(i) {
      this.active = i;
      this.cateLevel2 = this.cateList[i].children;
      this.scrollTop = this.scrollTop === 0 ? 1 : 0;
    },
    // 点击三级分类项跳转到商品列表页面
    gotoGoodsList(item3) {
      common_vendor.index.navigateTo({
        url: "/subpkg/goods_list/goods_list?cid=" + item3.cat_id
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.cateList, (item, i, i0) => {
      return {
        a: common_vendor.t(item.cat_name),
        b: common_vendor.n(i === $data.active ? "active" : ""),
        c: common_vendor.o(($event) => $options.activeChanged(i), i),
        d: i
      };
    }),
    b: $data.wh + "px",
    c: common_vendor.f($data.cateLevel2, (item2, i2, i0) => {
      return {
        a: common_vendor.t(item2.cat_name),
        b: common_vendor.f(item2.children, (item3, i3, i1) => {
          return {
            a: item3.cat_icon,
            b: common_vendor.t(item3.cat_name),
            c: i3,
            d: common_vendor.o(($event) => $options.gotoGoodsList(item3), i3)
          };
        }),
        c: i2
      };
    }),
    d: $data.wh + "px",
    e: $data.scrollTop
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
