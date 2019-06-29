<template>
  <div class="votes">
    <div class="container is-fullhd">
      <div class="columns is-multiline">
        <section class="column is-12 head">
          <p class="is-size-1">Voting result</p>
          <span class="bar"></span>
        </section>
        <section class="column columns is-multiline is-12 sec2">
          <div class="column is-6" v-for="i in members" :key="i">
            <person :name="i.score" :imgpath="i.imgpath"></person>
          </div>
          <div class="column is-10">
              <input @keyup.enter="vote" class="input is-rounded is-medium" type="text" placeholder="Rounded input" v-model="votename">
          </div>
          <div class="column is-2">
              <button class="button is-outlined" @click="vote">Submit</button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import person from "@/components/person.vue";
export default {
  name: "votes",
  data() {
    return {
      value: "test",
      win: true,
      votename: '',
      members: [
        {
          score: "0",
          imgpath: "person1.jpg"
        },
        {
          score: "0",
          imgpath: "person2.jpg"
        }
      ]
    };
  },
  components: {
    person
  },
  methods: {
      vote(){
          alert(this.votename)
      }
  }
};
</script>
<style scoped>
.head p {
  text-align: center;
}
.sec2 {
  background: #e5e5e5;
  margin: auto;
  text-align: center;
  min-height: 600px;
}
.bar {
  width: 100px;
  height: 5px;
  background: blue;
}
</style>