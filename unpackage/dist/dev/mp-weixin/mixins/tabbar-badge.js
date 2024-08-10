"use strict";
const common_vendor = require("../common/vendor.js");
const badgeMix = {
  computed: {
    ...common_vendor.mapGetters("m_cart", ["total"])
  },
  watch: {
    // 监听 total 值的变化
    total() {
      this.setBadge();
    }
  },
  onShow() {
    this.setBadge();
  },
  methods: {
    setBadge() {
      common_vendor.index.setTabBarBadge({
        index: 2,
        text: this.total + ""
        // 注意：text 的值必须是字符串，不能是数字
      });
    }
  }
};
exports.badgeMix = badgeMix;
