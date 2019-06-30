<template>
  <div id="app">
    <router-link class="button is-primary " to="votes">votes</router-link>
    <router-link class="button is-primary " to="/">home</router-link>
    <router-link v-if="user==null" class="button is-primary " to="login">login</router-link>
    <router-link v-else class="button is-primary " to="logout">logout</router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app{
  background: url(https://thaipublica.org/wp-content/uploads/2016/11/-e1478309577774.jpg);
    background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: #fff;
}
.button{
  margin: 10px;
}
</style>
<script>
import firebase from "firebase";
export default {
  data(){
    return{
       user: firebase.auth().currentUser
    }
  }
}
</script>

