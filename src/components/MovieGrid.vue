<template>
    <div>
        <div class="search-container">
            <div class="search-icon" role="submit">
                <font-awesome-icon icon="search" />
            </div>
            <input class="search-input" placeholder="Seek" v-model="search" />
        </div>
        <div class="movie-grid-container">
            <div v-for="(movie, index) in filteredMovies" :key="index">
                <movie-card :key="index" :movie="movie"></movie-card>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import MovieCard from './MovieCard.vue';

export default {
    data() {
        return {
            search: ''
        };
    },
    components: { MovieCard },
    props: {
        movies: { type: Array, required: true }
    },
    computed: {
        filteredMovies() {
            const matchedByName = this.movies.filter((movie) => {
                return movie.title.toLowerCase().includes(this.search.toLowerCase());
            });
            return matchedByName;
        }
    }
};
</script>
<style lang="scss">
.search-container {
    padding: 1rem;
    display: block;
    @media (min-width: 415px) {
        padding: 2rem 1.5rem;
        display: flex;
    }
    .search-input {
        color: #000;
        background-color: #fefefe;
        margin: auto;
        height: 2rem;
        padding-left: 0.5rem;
        border: #dddddd 1px solid;
        flex-grow: 2;
        &::placeholder {
            color: #bbbbbb;
            opacity: 100%;
        }
        &:focus-visible {
            outline: none;
        }
    }

    .search-icon {
        display: flex;
        align-content: center;
        background-color: #eeeeee;
        border: #dddddd 1px solid;
        padding: 0 0.5rem;
        align-content: center;
        svg {
            margin: auto;
            color: #aaaaaa;
        }
    }
}

.movie-grid-container {
    display: flex;
    flex-flow: wrap;
    align-content: space-around;
    justify-content: space-evenly;
    padding: 1rem;
    @media (min-width: 415px) {
        padding: 2rem 1.5rem;
    }
}
</style>
