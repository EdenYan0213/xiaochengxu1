import {createStore} from 'vuex'
import moduleCart from '@/store/cart.js'
import moduleUser from './user.js'

const store = createStore({
  modules: {
    // 挂载购物车的 vuex 模块，模块内成员的访问路径被调整为 m_cart，例如：
    // 购物车模块中 cart 数组的访问路径是 m_cart/cart
    'm_cart': moduleCart,
    'm_user': moduleUser,

  }
})
export default store