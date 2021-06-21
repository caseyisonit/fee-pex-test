<template>
    <div>
        <div class="search-filter-container">
            <div class="flex-container">
                <div class="icon">
                    <font-awesome-icon icon="search" />
                </div>
                <input class="input" placeholder="Seek" v-model="search" />
            </div>
            <div class="flex-container seperator">— or —</div>
            <div class="flex-container">
                <div class="icon">
                    <font-awesome-icon icon="filter" />
                </div>
                <select v-model="selectedGenre" name="genres" class="input">
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
            selectedGenre: 'view all'
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
        
            //search input
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
            }
            //clears genre selector
            else if (this.selectedGenre === 'view all') {
                return tempMovies;
            }
            // genre selector filter
            else if (this.selectedGenre !== '' && this.selectedGenre) {
                tempMovies = tempMovies.filter((movie) => {
                    return movie.genre.some((singleGenre) => {
                        return singleGenre.title.toLowerCase().includes(this.selectedGenre.toLowerCase());
                    });
                });
            }

            return tempMovies;
        }
        
    },
};
</script>
<style lang="scss">
.search-filter-container {
    display: flex;
    flex-flow: wrap;
    align-content: center;
    justify-content: center;
    background-color: #303030;
}

.flex-container {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: stretch;
    padding: 1rem;
    min-width: 18rem;
}
    .seperator {
        color: #ffffff;
        width: auto;
        min-width: auto;
        margin: auto 0;
    }
.input {
    color: #ffffff;
    background-color: #333333;
    // margin: auto;
    padding: .5rem;
    padding-left: 0.5rem;
    border: #666 1px solid;
    flex-grow: 2;
    &::placeholder {
        color: #bbbbbb;
        opacity: 100%;
    }
    &:focus-visible {
        outline: #999999 1px solid;
    }
}
.icon {
    display: flex;
    align-content: center;
    background-color: #030303;
    border: #666 1px solid;
    border-right: none;
    padding: 0 0.5rem;
    align-content: center;
    svg {
        margin: auto;
        color: #aaaaaa;
    }
}

.movie-grid-container {
    display: flex;
    flex-flow: wrap;
    align-content: space-around;
    justify-content: center;
    padding: 1rem;
    @media (min-width: 415px) {
        padding: 2rem 1.5rem;
    }
}
</style>
