<template>
    <div>
        <div class="search-filter-container">
            <div class="search-container">
                <div class="search-icon" role="submit">
                    <font-awesome-icon icon="search" />
                </div>
                <input class="search-input" placeholder="Seek" v-model="search" />
            </div>
            <div class="filter-conatiner">
                <select v-model="selectedGenre" aria-placeholder="Filter">
                    <option value="view all">View All</option>
                    <option v-for="(genre, index) in genres" :value="genre.title" :key="index">
                        {{ genre.title }}
                    </option>
                </select>
            </div>
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
            search: '',
            selectedGenre: ''
        };
    },
    components: { MovieCard },
    props: {
        movies: { type: Array, required: true },
        genres: { type: Array, required: true }
    },
    computed: {
        filteredMovies() {
            let tempMovies = this.movies;

            if (this.search != '' && this.search) {
                tempMovies = tempMovies.filter((movie) => {
                    //checks movie title
                    if (movie.title.toLowerCase().includes(this.search.toLowerCase())) {
                        return movie;
                    }
                    //checks genre
                    else if (
                        movie.genre.some((singleGenre) => {
                            return singleGenre.title.toLowerCase().includes(this.search.toLowerCase());
                        })
                    ) {
                        return movie;
                    }
                    //checks actor
                    else if (
                        movie.actors.some((actor) => {
                            return actor.name.toLowerCase().includes(this.search.toLowerCase());
                        })
                    ) {
                        return movie;
                    }
                });
            } else if (this.selectedGenre === 'view all') {
                return tempMovies;
            } else if (this.selectedGenre !== '' && this.selectedGenre) {
                tempMovies = tempMovies.filter((movie) => {
                    return movie.genre.some((singleGenre) => {
                        return singleGenre.title.toLowerCase().includes(this.selectedGenre.toLowerCase());
                    });
                });
            }

            return tempMovies;
        }
    }
};
</script>
<style lang="scss">
.search-container {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: auto;
    @media (min-width: 415px) {
        padding: 2rem 1.5rem;
        flex-shrink: 2;
        width: 33vw;
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
