<template>
  <div class="home">
    <h2>Posts</h2>
    <div class="post" v-for="oi in allPosts" :key="oi.id"> 
      <h3>{{oi.datum}} {{oi.patId}} </h3>
      <h2> {{oi.mnTitle}} </h2>
      <p v-for="i in oi.pakomps":key="i.id" >{{i.menge}} {{i.pkBez}}</p>
    </div>
  post
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// @ is an alias to /src

export default {
  name: 'home',

  //computed: mapGetters(["allPosts"]),
  computed:
  {
    allPosts()
    {
      return this.$store.getters.allPosts
    }
  },


  async mounted()
  {
    this.$store.dispatch("fetchPosts");
    //console.log(allPosts())
  }

};
</script>
<style>
#app{
  text-align: center;
  margin: 60px auto;
  width: 400px;  
}

.post{
  border:1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>