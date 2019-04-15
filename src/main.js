import Vue from 'vue'
import App from './App.vue'
import YmapPlugin from 'vue-yandex-maps'

import store from './components/store'
import router from './components/router'

Vue.use(YmapPlugin)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')