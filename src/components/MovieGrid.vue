<template>
    <div class="movie-grid-container">
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>
    </div>
</template>
<script>
import MovieCard from './MovieCard.vue'
export default {
    components: { MovieCard },
    
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