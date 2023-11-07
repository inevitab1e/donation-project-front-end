import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import store from './store'

Vue.prototype.$axios = axios
Vue.use(ElementUI);

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://101.200.164.86:8090'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
