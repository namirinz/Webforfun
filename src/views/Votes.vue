<template>
  <div class="votes">
    <div class="container is-fullhd">
      <div class="columns is-multiline">
        <section class="column is-12 head">
          <p class="is-size-1">Voting result</p>
          <span class="bar"></span>
        </section>
        <section class="column columns is-multiline is-12 sec2 is-centered">
          <div class="column is-6" v-for="i in members" :key="i">
            <person :name="i.score" :imgpath="i.imgpath"></person>
          </div>
          <div class="column is-5">
            <input
              @keyup.enter="vote"
              class="input is-rounded is-medium"
              type="text"
              placeholder="Rounded input"
              v-model="votename"
            />
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
const axios = require("axios");
// let db = firebase.firestore();
export default {
  name: "votes",
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
        alert("nooo");
      }
    });
  },
  data() {
    return {
      value: "test",
      win: true,
      votename: "",
      socreall: [0, 0],
      user: "",
      members: [
        {
          id: 0,
          name: "A",
          score: 0,
          imgpath: "person1.jpg"
        },
        { id: 1, name: "B", score: 0, imgpath: "person2.jpg" }
      ]
    };
  },
  components: {
    person
  },
  methods: {
    vote() {
      if (this.votename.toLowerCase() == "b") {
        axios
          .get(
            "https://us-central1-webforfun-election.cloudfunctions.net/helloWorld/vote/0",
            { headers: { Authorization: `Bearer ${this.user}` } }
          )
          .then(result => {
            console.log("==================", result);
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        console.log(this.user);
        axios
          .get(
            "https://us-central1-webforfun-election.cloudfunctions.net/helloWorld/vote/1",
            { headers: { Authorization: `Bearer ${this.user}` } }
          )
          .then(result => {
            console.log("==================", result);
          })
          .catch(e => {
            console.log(e);
          });
      }
      this.votename = "";
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