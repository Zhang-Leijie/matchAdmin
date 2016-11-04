import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/obj',
    name: 'md-home',
    component(resolve) {
      resolve(require('./vue/main.vue'))
    },
    children: [
        {
            path: '/obj',
            name: 'md-objective',
            component(resolve){
                resolve(require('./vue/pages/objective.vue'))
            }
        }
    ]
  }
]

export default new VueRouter({
  routes
})