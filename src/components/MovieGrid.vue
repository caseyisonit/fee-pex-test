<template>
    <div class="movie-grid-container">
        <div v-for="(movie, index) in movies" :key="movie.index">
        <movie-card :key="index" :movie="movie"></movie-card>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import MovieCard from './MovieCard.vue'

export default {
    components: { MovieCard },
    props: {
        movies: { type: Array, required: true}
    }
    
}
</script>
<style lang="scss">
    .movie-grid-container {
        display: flex;
        align-content: flex-start;
        flex-flow: wrap;
        justify-content: flex-start;
        align-content: space-around;
        margin-left: 21rem;
    }
</style>