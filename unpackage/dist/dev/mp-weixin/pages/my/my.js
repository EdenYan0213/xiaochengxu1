"use strict";
const mixins_tabbarBadge = require("../../mixins/tabbar-badge.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  mixins: [mixins_tabbarBadge.badgeMix],
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
