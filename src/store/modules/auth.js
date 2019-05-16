import imgurApi from '../../apis/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    login: () => imgurApi.login(),
    finalizeLogin: ({ commit }, hash) => {
        const extractedQuery = qs.parse(hash.replace('#', ''));
        commit('setToken', extractedQuery.access_token);
        window.localStorage.setItem('imgur_token', extractedQuery.access_token);
        router.push('/');
    },
    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
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