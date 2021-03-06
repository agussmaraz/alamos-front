export const state = () => {
    return {
        active: null,
    };
};

export const getters = {};

export const actions = {
    setActive({ commit }, chat) {
        commit('SET_ACTIVE', chat);
    },
};

export const mutations = {
    SET_ACTIVE(state, chat) {
        state.active = chat;
    },
};
