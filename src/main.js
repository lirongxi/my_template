import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import App from './App.vue'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './theme/index.less'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )

Vue.config.productionTip = false

// Vue.use(iView)





import jsPlumb from 'jsplumb'
Vue.prototype.$jsPlumb = jsPlumb.jsPlumb

Vue.use(iView, {
    transfer: true,
    size: 'large'
});


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')