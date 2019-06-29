import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import firebase from 'firebase';
import 'firebase/firestore'
import {
  config
} from "./firebase";

Vue.use(Buefy)

Vue.config.productionTip = false
// Your web app's Firebase configuration

// Initialize Firebase

router.beforeEach((to, from, next) => {
  if (!to.meta.protected) { //route is public, don't check for authentication
    next()
  } else { //route is protected, if authenticated, proceed. Else, login
    let unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next()
      } else {
        router.push('/login')
      }
    })
    unsubscribe()
  }
})
new Vue({
  router,
  created() {
    firebase.initializeApp(config)
  },
  render: h => h(App)
}).$mount('#app')

export const db = firebase.firestore()