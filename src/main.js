import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
// import LoginForm from './components/login/LoginForm'

Vue.use(axios)
Vue.use(ElementUI);

// Vue.component('LoginForm', LoginForm)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
