import imgurApi from '../../apis/imgur';
import qs from 'qs';

const state = {
    token: null
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    login: () => imgurApi.login(),
    finalizeLogin: ({ commit }, hash) => {
        const extractedQuery = qs.parse(hash.replace('#', ''));
        commit('setToken', extractedQuery.access_token);
    },
    logout: ({ commit }) => {
        commit('setToken', null);
    }
}

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}