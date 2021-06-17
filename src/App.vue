<template>
  <div id="app">
    <nav-bar></nav-bar>
    <movie-grid></movie-grid>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import MovieCard from "./components/MovieCard.vue";
import MovieGrid from "./components/MovieGrid.vue";
import NavBar from "./components/NavBar.vue";

export default Vue.extend({
  name: "App",
  components: {
    NavBar,
    MovieGrid,
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
