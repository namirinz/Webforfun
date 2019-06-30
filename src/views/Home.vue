<template>
  <div class="home">
    <div class="container is-fullhd">
      <div class="columns is-multiline">
        <section class="column is-12 head">
          <p class="is-size-1">Voting result</p>
          <!-- <p>{{user}}</p> -->
        </section>
        <section class="column columns is-multiline is-12 sec2">
          <div class="column is-6" v-for="i in members" :key="i">
            <person :name="i.score" :imgpath="i.imgpath" :maxscore='members[0].score+members[1].score'></person>
          </div>
          <div class="column is-12">
            <transition name="fade">
              <h1 v-if="win" class="is-size-2">Congratulation to XXXX</h1>
            </transition>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import person from "@/components/person.vue";
import firebase from "firebase";
import router from '../router'
const axios = require("axios");
export default {
  name: "home",
  beforeCreate: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user.ra;
        console.log(user.ra);
        axios
          .get(
            "https://us-central1-webforfun-election.cloudfunctions.net/helloWorld/candidate/0",
            { headers: { Authorization: `Bearer ${this.user}` } }
          )
          .then(result => {
            this.members[0].score = result.data.count;
          });
        axios
          .get(
            "https://us-central1-webforfun-election.cloudfunctions.net/helloWorld/candidate/1",
            { headers: { Authorization: `Bearer ${this.user}` } }
          )
          .then(result2 => {
            this.members[1].score = result2.data.count;
          });
        // alert(this.user)
      } else {
        router.push("/login")
      }
    });
  },
  data() {
    return {
      value: "test",
      user: "",
      win: true,
      test: "",
      members: [
        {
          score: null,
          imgpath: "person1.jpg"
        },
        {
          score: null,
          imgpath: "person2.jpg"
        }
      ]
    };
  },
  components: {
    person
  },
  computed: {
    // score1() {}
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.head{
  background: rgba(0, 0, 0, 0.65);
  max-width: 300px;
  margin: 20px auto;
  border-radius: 15px;
}
.head p {
  text-align: center;
}
.sec2 {
  background: rgba(150, 150, 150, 0.5);
  margin: auto;
  text-align: center;
  min-height: 600px;
  border-radius: 15px;
}
.bar {
  width: 100px;
  height: 5px;
  background: blue;
}
</style>

