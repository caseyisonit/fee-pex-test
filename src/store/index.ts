import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        movies: [],
        genres: []
    },
    mutations: {
        setMovies(state, payload) {
            state.movies = payload;
        },
        setGenres(state, payload) {
            state.genres = payload;
        }
    },
    actions: {
        fetchMovies({ commit }) {
            axios
                .get(`/mock/movies.json`)
                .then((response) => {
                    const movies = response.data;
                    commit('setMovies', movies);
                    const collectionOfGenres : any[] = [];

                    movies.forEach((movie) => {
                        movie.genre.forEach((singleGenre) => {
                            collectionOfGenres.push(singleGenre);
                        });
                    });

                    const uniqueGenres = Array.from(new Set(collectionOfGenres.map((a) => a.id))).map((id) => {
                        return collectionOfGenres.find((a) => a.id === id);
                    });

                    commit('setGenres', uniqueGenres);
                    return movies;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    getters: {
        getMovies: (state) => state.movies,
        getGenres: (state) => state.genres
    }
});
