<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-6">
        <img :src="require(`@/assets/img/${imgpath}`)" class="rounded img-fluid" />
      </div>
      <div class="column is-6">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="scoretext">"{{name}}"</h2>
            <!-- <p>"{{imgpath}}"</p> -->
          </div>
          <div class="column is-12">
            <progress class="progress is-large" value="20" max="100">15%</progress>
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
}
.progress{
    transition: 0.3s all;
}
.scoretext{
    text-align: center;
    font-size: 5rem;
}
</style>

