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
        }
    },
    actions: {
        fetchMovies({ commit }) {
            return (resolve, reject) => {
                axios
                    .get(`assets/movies.json`)
                    .then((response) => {
                        console.log(response);
                        commit('setMovies', response);
                        resolve(response);
                        return response;
                    })
                    .catch((error) => {
                        reject(error);
                    });
            };
        }
    },
    getters: {
        getMovies: (state) => state.movies
    }
});
