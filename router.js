import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var Index = require('~/vue/index.vue')
console.dir(Index)
const routes = [
	{
	  path: '/',
	  name: 'm-index',
	  component: Index
	}
]

export default new VueRouter({
  routes
})