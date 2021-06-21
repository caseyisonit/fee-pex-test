<template>
    <div class="card-container" :style="cssProps">
        <div class="content-container">
            <div class="title-container">
            <h1>{{ movie.title }}</h1>
            </div>
            <div class="actor-container" v-for="(actor, index) in movie.actors" :key="index">
                <h3>{{ actor.name }}</h3>
            </div>
            <div class="genre-container">
                <genre-tag :genres="movie.genre"></genre-tag>
            </div>
        </div>
    </div>
</template>
<script>
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
    height: 24rem;
    margin: 1rem;
}

.content-container {
    background-color: white;
    position: relative;
    display: flex;
    flex-flow: column;
    top: 1rem;
    width: 14rem;
    height: 16rem;
    margin: auto;
    border: 1px solid #eeeeee;
    padding: 1rem;

    .title-container {
        height: 16rem;
    }

    .genre-container {
        position: absolute;
        bottom: -4.25rem;
        left: 0;
    }

    .actor-container {
        display: flex;
        justify-content: center;
        h3 {
            margin: .5rem 0;
        }
    }
}
</style>
