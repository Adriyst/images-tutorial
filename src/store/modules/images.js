import imgurApi from '../../apis/imgur';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages({ commit, rootState }) {
        const { token } = rootState.auth;
        const response = await imgurApi.fetchImages(token);
        commit('setImages', response.data.data);
    },
    uploadImage: () => {}
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};