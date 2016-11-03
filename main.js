import style from '~/style/main.less'

// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'

import router from './router.js'

window.router = router

const app = new Vue({
  	router
}).$mount('#app')

window.app = app