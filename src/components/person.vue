<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-6">
        <img :src="require(`@/assets/img/${imgpath}`)" class="rounded img-fluid" />
      </div>
      <div class="column is-6">
        <div v-if="name!=null" class="columns is-multiline">
          <div class="column is-12">
            <!-- <p>"{{imgpath}}"</p> -->
            <transition mode="out-in" name="slide-fade">
              <h2 :key="name" class="scoretext">"{{name}}"</h2>
            </transition>
          </div>
          <div class="column is-12">
            <progress class="progress is-primary is-large" :value="this.name" :max="maxscore">15%</progress>
          </div>
        </div>
        <div v-else class="columns is-multiline">
          <div class="column is-12">
            <progress class="progress is-large is-primary" max="100">15%</progress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "person",
  props: ["name", "showscore", "imgpath", "maxscore"],
  data() {
    return {};
  }
};
</script>
<style scoped>
img {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  animation: glow 2s infinite alternate;
}
.progress::-webkit-progress-value {
  transition: width 0.5s ease;
}
.scoretext {
  text-align: center;
  font-size: 5rem;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  color: #ed4a4a;
  transition: opacity 0.25s;
}

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
@keyframes glow {
  from {
    box-shadow: 0 0 30px 30px #4562e6;
  }
  to {
    box-shadow: 0 0 30px -30px #ed4a4a;
  }
}
</style>

