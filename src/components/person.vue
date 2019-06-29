<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-6">
        <img :src="require(`@/assets/img/${imgpath}`)" class="rounded img-fluid" />
      </div>
      <div class="column is-6">
        <div class="columns is-multiline">
          <div class="column is-12">
            <!-- <p>"{{imgpath}}"</p> -->
            <transition mode="out-in" name="slide-fade">
              <h2 :key="name" class="scoretext">"{{name}}"</h2>
            </transition>
          </div>
          <div class="column is-12">
            <progress class="progress is-large" :value="this.name" max="500">15%</progress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "person",
  props: ["name", "showscore", "imgpath"],
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
  animation: glow 1s infinite alternate;
}
.progress {
  transition: 0.3s all;
}
.scoretext {
  text-align: center;
  font-size: 5rem;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
    color:#75d640;
  transition: opacity 0.25s;
}

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
@keyframes glow {
  from {
    box-shadow: 0 0 20px -20px #aef4af;
  }
  to {
    box-shadow: 0 0 20px 20px #aef4af;
  }
}
</style>

