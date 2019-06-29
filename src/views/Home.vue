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
