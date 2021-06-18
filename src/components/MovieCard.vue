<template>
    <div class="card-container" :style="cssProps">
    <div class="content-container">
        <h2>{{ movie.title }}</h2>
        <div class="genre-container">
        <genre-tag :genres="movie.genre"></genre-tag>
        </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import GenreTag from "./GenreTag.vue"

export default {
    components: { GenreTag },
    props: {
        movie: { type: Object, required: true},
    },
    computed: {
        randomColor() { const color = "#" + Math.floor(Math.random()*16777215).toString(16);
        return color},
    
        cssProps() {
            return '--background-color: ' + this.randomColor;
        }
    }
}
</script>
<style lang="scss">
    .card-container {
        background-color: var(--background-color);
        box-shadow: .25rem .25rem .75rem #bbbbbb;
        width: 18rem;
        height: 20rem;
        display: block;
        margin-bottom: 1rem;
    @media (min-width: 415px) {
        margin: 1rem 0 0 1rem;
    }
    }

    .content-container {
        background-color: white;
        position: relative;
        display: flex;
        top: 1rem;
        width: 16rem;
        height: 18rem;
        margin: auto;
        border: 1px solid #eeeeee;
        h2 {
            font-size: 2rem;
        }
        .genre-container {
            position: absolute;
            bottom: 0;
        }
    }
</style>