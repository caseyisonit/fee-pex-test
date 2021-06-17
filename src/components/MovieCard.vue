<template>
    <div class="card-container">
        <h2>{{ movie.title }}</h2>
        <genre-tag :genres="movie.genre"></genre-tag>
    </div>
</template>
<script>
import Vue from 'vue'
import GenreTag from "./GenreTag.vue"

export default {
    components: { GenreTag },
    props: {
        movie: { type: Object, required: true}
    }
}
</script>
<style lang="scss">
    .card-container {
        background-color: darkgray;
        width: 18rem;
        height: 400px;
        display: block;
        margin-bottom: 1rem;
    @media (min-width: 415px) {
        margin: 1rem 0 0 1rem;
    }
    }
</style>