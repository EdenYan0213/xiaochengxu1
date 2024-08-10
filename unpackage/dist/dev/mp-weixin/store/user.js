"use strict";
const common_vendor = require("../common/vendor.js");
const moduleUser = {
  // 开启命名空间
  namespaced: true,
  // state 数据
  state: () => ({
    // 收货地址
    address: JSON.parse(common_vendor.index.getStorageSync("address") || "{}")
  }),
  // 方法
  mutations: {
    // 更新收货地址
    updateAddress(state, address) {
      state.address = address;
      this.commit("m_user/saveAddressToStorage");
    },
    // 1. 定义将 address 持久化存储到本地 mutations 方法
    saveAddressToStorage(state) {
      common_vendor.index.setStorageSync("address", JSON.stringify(state.address));
    }
  },
  // 数据包装器
  getters: {
    // 收货详细地址的计算属性
    addstr(state) {
      if (!state.address.provinceName)
        return "";
      return state.address.provinceName + state.address.cityName + state.address.countyName + state.address.detailInfo;
    }
  }
};
exports.moduleUser = moduleUser;
