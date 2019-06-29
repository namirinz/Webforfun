<template>
  <div class="home">
    <section>
      <b-button @click="clickMe">Click Me</b-button>
      <b-button type="is-primary">Primary</b-button>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import firebase from 'firebase'
  // mounted () {
  //   let data = firebase.database().ref(this.path)
  //   let self = this
  //   data.on('value', function(snapshot) {
  //       self.value = snapshot.val()
  //   })
  // }
export default {
  name: "home",
  components: {},
  methods: {
    clickMe() {
      this.$notification.open("Clicked!!");
    }
  }
};
</script>
