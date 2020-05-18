import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(vuex)
new Vue({
  vuetify,
  router,
  vuex,
  render: h => h(App)
}).$mount('#app')
