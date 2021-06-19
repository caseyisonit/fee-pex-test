<template>
    <div id="app">
        <nav-bar></nav-bar>
        <movie-grid :movies="movies" ></movie-grid>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import HelloWorld from './components/HelloWorld.vue';
import MovieCard from './components/MovieCard.vue';
import MovieGrid from './components/MovieGrid.vue';
import NavBar from './components/NavBar.vue';

export default Vue.extend({
    name: 'App',
    
    components: {
        NavBar,
        MovieGrid
    },
    created() {
          this.$store.dispatch('fetchMovies');
    },
    computed: {
        ...mapState(['movies', 'genres'])
    }
});
</script>

<style lang="scss">
body {
    margin: 0;
}

#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: url('assets/so-white.png');
}
h1,h2,h3,h4,h5,h6 {
  font-weight: 100;
}
</style>
