import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        movies: {},
        genres: []
    },
    mutations: {
        setMovies(state, payload) {
            state.movies = payload;
        }
    },
    actions: {
        fetchMovies({ commit }) {
                axios.get(`/mock/movies.json`)
                    .then((response) => {
                        console.log(response.data);
                        commit('setMovies', response.data);
                        return response.data;
                    })
                    .catch((error) => {
                      console.log(error)
                    });
        }
    },
    getters: {
        getMovies: (state) => state.movies
    }
});
