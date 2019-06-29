import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Votes from './views/Votes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/votes',
      name: 'votes',
      component: Votes
    },
  ]
})
