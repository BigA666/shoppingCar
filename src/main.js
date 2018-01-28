import Vue from 'vue'
import App from './App'
import mock from './mock'
import store from './store/store'

mock.bootstrap()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  ...store,
  render: h => h(App)
})
