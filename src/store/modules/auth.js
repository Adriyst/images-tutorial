import imgurApi from '../../apis/imgur';

const state = {
    token: null
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    login: () => imgurApi.login(),
    finalizeLogin: ({ commit }) => {
        commit('setToken', '');
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