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
import Vue from 'vue';
import GenreTag from './GenreTag.vue';

export default {
    components: { GenreTag },
    props: {
        movie: { type: Object, required: true }
    },
    computed: {
        cssProps() {
            return '--background-color: ' + this.movie.randomColor;
        }
    }
};
</script>
<style lang="scss">
.card-container {
    background-color: var(--background-color);
    box-shadow: 0.25rem 0.25rem 0.75rem #bbbbbb;
    width: 18rem;
    height: 20rem;
    display: block;
    margin: 1rem;
}

.content-container {
    background-color: white;
    position: relative;
    display: flex;
    top: 1rem;
    width: 14rem;
    height: 16rem;
    margin: auto;
    border: 1px solid #eeeeee;
    padding: 1rem;
    h2 {
        font-size: 2.25rem;
        line-height: 2.25rem;
    }
    .genre-container {
        position: absolute;
        bottom: 0;
        left: 0;
    }
}
</style>
