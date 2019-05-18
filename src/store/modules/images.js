import imgurApi from '../../apis/imgur';
import { router } from '../../main';

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
    async uploadImages({ rootState }, images) {
        const { token } = rootState.auth;
        await imgurApi.uploadImages(images, token);
        router.push('/');
    }
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