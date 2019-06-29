import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import firebase from 'firebase';

Vue.use(Buefy)

Vue.config.productionTip = false
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAfor52dMGytuaz1HSaP6eJaSO9RVdx3aE",
  authDomain: "webforfun-election.firebaseapp.com",
  databaseURL: "https://webforfun-election.firebaseio.com",
  projectId: "webforfun-election",
  storageBucket: "",
  messagingSenderId: "368871097951",
  appId: "1:368871097951:web:c2d7b75ac665b3b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
