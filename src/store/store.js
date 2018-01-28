import Vue from 'vue'
import Vuex from 'vuex'
// import bus from '../bus'
// import axios from 'axios'
Vue.use(Vuex) // 注册插件
let store = new Vuex.Store({
  state: {
    axiosData: [],
    sum: 0,
    title: '我的购物车'
  },
  mutations: { // 同步
    sAxios (state, data) {
      state.axiosData = data
    },
    fAxios (state) {
      state.sum = 0  // 让金额清零
      state.axiosData.map((v) => {
        v.content.map((val) => {
          if (val.bool) {
            state.sum += val.sum
          }
        })
      })
    },
    checkAll (state, val) {
      val.bool = !val.bool
      if (val.bool) {
        val.content.map((v, k) => {
          v.bool = true
        })
      } else {
        val.content.map((v, k) => {
          v.bool = false
        })
      }
    },
    isCheckAll (state, val) {
      // 单选时判断是否全选
      let thatBool = true
      val.content.map((v) => {
        if (!v.bool) {
          thatBool = false
        }
      })
      val.bool = thatBool
    },
    del (state, arr) {
      let sIndex = arr[0]
      let index = arr[1]
      state.axiosData[sIndex].content.splice(index, 1)
      if (state.axiosData[sIndex].content.length === 0) {
        state.axiosData.splice(sIndex, 1) // 删除整个大项 删除第一层
      }
    },
    add (state, arr) {
      let val = arr[0]  // val
      let con = arr[1]  // + -
      if (con === '+') {
        val.number += 1
      } else {
        val.number -= 1
      }
      val.sum = val.number * val.price
    }
  },
  actions: { // 异步
    sAxios (store) { // 获取数据源
      fetch('src/mock/data/data.json').then(function (data) {
        return data.json()
      }).then(function (data) {
        store.commit('sAxios', data)
      })
      // axios({
      //   url: '/api/shoppingCar',
      //   method: 'POST'
      // }).then(data => {
      //   store.commit('sAxios', data.data)
      // })
    },
    fAxios (store) {  // 计算总金额
      store.commit('fAxios')
    },
    checkAll (store, val) {
      store.commit('checkAll', val) // 点击全选时
      store.dispatch('fAxios')  // 重置金额
    },
    isCheckAll (store, val) {  // 单选时 是否全选
      store.commit('isCheckAll', val)
    },
    del (store, arr) { // 点击删除时
      store.commit('del', arr)  // commit和dispatch一样只能传一个参数
      store.dispatch('fAxios')  // 重置金额
    },
    add (store, arr) {
      store.commit('add', arr) // 加减
      store.dispatch('fAxios')  // 重置金额  计算总金额
    }
  }
})
export default{
  store
}
