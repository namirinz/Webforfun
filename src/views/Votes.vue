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
            <person
              :name="i.score"
              :imgpath="i.imgpath"
              :maxscore="members[0].score+members[1].score"
            ></person>
          </div>
          <div class="column is-5">
            <transition mode="out-in" name="slide-fade">
              <input
                @keyup.enter="vote"
                class="input is-rounded is-medium"
                type="text"
                placeholder="โปรดเลือกคนดี ของสังคม"
                v-model="votename"
              />
            </transition>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import router from "../router";
import person from "@/components/person.vue";
import { db } from "../main";
import firebase from "firebase";
const axios = require("axios");
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
        router.push("/login");
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
          score: null,
          imgpath: "person1.jpg"
        },
        { id: 1, name: "B", score: null, imgpath: "person2.jpg" }
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
            console.log("vote 0");
            // console.log("==================", result);
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
            console.log("vote 1");
            // console.log("==================", result);
          })
          .catch(e => {
            console.log(e);
          });
      }
      this.votename = "";
      this.updatedate();
    },
    updatedate() {
      db.collection("users").onSnapshot(querySnapshot => {
        let count0 = 0,
          count1 = 0;
        console.log(querySnapshot.size);
        querySnapshot.forEach(function(doc) {
          if (doc.data().vote == 0) {
            count0++;
          } else {
            count1++;
          }
          //   console.log("Current data: ", doc.data());
        });
        console.log("count0", count0);
        console.log("count1", count1);
        this.members[0].score = count0;
        this.members[1].score = count1;
      });
    }
  }
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