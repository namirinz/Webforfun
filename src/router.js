import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Votes from './views/Votes.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/votes',
      name: 'votes',
      component: Votes,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    }
  ]
})