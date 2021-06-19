import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        movies: [],
        genres: [],
        filteredMovies: [],
        searchedMovies: []
    },
    mutations: {
        setMovies(state, payload) {
            state.movies = payload;
        },
        setGenres(state, payload) {
            state.genres = payload;
        },
        setFilteredMovies(state, payload) {
            state.filteredMovies = payload
        },
        setSearchedMovies(state, payload) {
            state.searchedMovies = payload
        }
    },
    actions: {
        fetchMovies({ commit }) {
          return new Promise((resolve, reject) => {
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

                    const uniqueGenres = Array.from(new Set(collectionOfGenres.map((genre) => genre.id))).map((id) => {
                        return collectionOfGenres.find((genre) => genre.id === id);
                    });

                    commit('setGenres', uniqueGenres);
                    resolve(response)
                    return movies;
                })
                .catch((error) => {
                    console.log(error);
                    reject(error)
                });
              })
        },
        filteredMovies({ state, commit }, payload = "") {
          const result = payload
  
          return commit('setFilteredSites', result)
      },
    },
    getters: {
        getMovies: (state) => state.movies,
        getGenres: (state) => state.genres,
        getFilteredMovies: (state) => state.filteredMovies,
        getSearchedMovies: (state) => state.searchedMovies
    }
});
