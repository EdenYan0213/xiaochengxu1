"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 1. 轮播图的数据列表，默认为空数组
      swiperList: [],
      navList: [],
      floorList: []
    };
  },
  onLoad() {
    this.getSwiperList(), this.getNavList(), this.getFloorList();
  },
  methods: {
    async getSwiperList() {
      const { data: res } = await common_vendor.index.$http.get("/api/public/v1/home/swiperdata");
      console.log(res);
      if (res.meta.status !== 200) {
        return common_vendor.index.showToast({
          title: "数据请求失败！",
          duration: 1500,
          icon: "none"
        });
      }
      this.swiperList = res.message;
    },
    async getNavList() {
      const { data: res } = await common_vendor.index.$http.get("/api/public/v1/home/catitems");
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      this.navList = res.message;
    },
    // nav-item 项被点击时候的事件处理函数
    navClickHandler(item) {
      if (item.name === "分类") {
        common_vendor.index.switchTab({
          url: "/pages/cate/cate"
        });
      }
    },
    // 3. 定义获取楼层列表数据的方法
    async getFloorList() {
      const { data: res } = await common_vendor.index.$http.get("/api/public/v1/home/floordata");
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      res.message.forEach((floor) => {
        floor.product_list.forEach((prod) => {
          prod.url = "/subpkg/goods_list/goods_list?" + prod.navigator_url.split("?")[1];
        });
      });
      this.floorList = res.message;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swiperList, (item, i, i0) => {
      return {
        a: item.image_src,
        b: "/subpkg/goods_detail/goods_detail?goods_id=" + item.goods_id,
        c: i
      };
    }),
    b: common_vendor.f($data.navList, (item, i, i0) => {
      return {
        a: item.image_src,
        b: i,
        c: common_vendor.o(($event) => $options.navClickHandler(item), i)
      };
    }),
    c: common_vendor.f($data.floorList, (item, i, i0) => {
      return {
        a: item.floor_title.image_src,
        b: item.product_list[0].image_src,
        c: item.product_list[0].image_width + "rpx",
        d: item.product_list[0].url,
        e: common_vendor.f(item.product_list, (item2, index, i1) => {
          return common_vendor.e({
            a: index !== 0
          }, index !== 0 ? {
            b: item2.image_src,
            c: item2.image_width + "rpx"
          } : {}, {
            d: index,
            e: item2.url
          });
        }),
        f: i
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
