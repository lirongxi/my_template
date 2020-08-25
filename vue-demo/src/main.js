import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import App from './App.vue'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './theme/index.less'

Vue.config.productionTip = false

// Vue.use(iView)

Vue.use(iView, {
	transfer: true,
	size: 'large'
});

new Vue({
	router:router,
  	render: h => h(App),
}).$mount('#app')
