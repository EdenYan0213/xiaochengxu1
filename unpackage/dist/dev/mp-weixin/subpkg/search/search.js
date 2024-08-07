"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 延时器的 timerId
      timer: null,
      // 搜索关键词
      kw: "",
      // 搜索结果列表
      searchResults: [],
      historyList: ["a", "app", "apple"]
    };
  },
  onLoad() {
    this.historyList = JSON.parse(common_vendor.index.getStorageSync("kw") || "[]");
  },
  methods: {
    input(e) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.kw = e;
        console.log(this.kw);
        this.getSearchList();
      }, 500);
    },
    // 根据搜索关键词，搜索商品建议列表
    async getSearchList() {
      if (this.kw === "") {
        this.searchResults = [];
        return;
      }
      const { data: res } = await common_vendor.index.$http.get("/api/public/v1/goods/qsearch", { query: this.kw });
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      this.searchResults = res.message;
      this.saveSearchHistory();
    },
    gotoDetail(goods_id) {
      common_vendor.index.navigateTo({
        // 指定详情页面的 URL 地址，并传递 goods_id 参数
        url: "/subpkg/goods_detail/goods_detail?goods_id=" + goods_id
      });
    },
    saveSearchHistory() {
      const set = new Set(this.historyList);
      set.delete(this.kw);
      set.add(this.kw);
      this.historyList = Array.from(set);
      common_vendor.index.setStorageSync("kw", JSON.stringify(this.historyList));
    },
    // 清空搜索历史记录
    cleanHistory() {
      this.historyList = [];
      common_vendor.index.setStorageSync("kw", "[]");
    },
    // 点击跳转到商品列表页面
    gotoGoodsList(kw) {
      common_vendor.index.navigateTo({
        url: "/subpkg/goods_list/goods_list?query=" + kw
      });
    }
  },
  computed: {
    historys() {
      return [...this.historyList].reverse();
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2 + _easycom_uni_tag2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons + _easycom_uni_tag)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.input),
    b: common_vendor.p({
      focus: true,
      radius: 100,
      cancelButton: "none"
    }),
    c: $data.searchResults.length !== 0
  }, $data.searchResults.length !== 0 ? {
    d: common_vendor.f($data.searchResults, (item, i, i0) => {
      return {
        a: common_vendor.t(item.goods_name),
        b: "601c20b7-1-" + i0,
        c: i,
        d: common_vendor.o(($event) => $options.gotoDetail(item.goods_id), i)
      };
    }),
    e: common_vendor.p({
      type: "arrowright",
      size: "16"
    })
  } : {
    f: common_vendor.o($options.cleanHistory),
    g: common_vendor.p({
      type: "trash",
      size: "17"
    }),
    h: common_vendor.f($options.historys, (item, i, i0) => {
      return {
        a: i,
        b: common_vendor.o(($event) => $options.gotoGoodsList(item), i),
        c: "601c20b7-3-" + i0,
        d: common_vendor.p({
          text: item
        })
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
