export const state = () => {
    return {
        active: null,
        current_message: '',
    };
};

export const getters = {};

export const actions = {
    setActive({ commit }, chat) {
        commit('SET_ACTIVE', chat);
    },
    setCurrentMessage({ commit }, message) {
        commit('SET_CURRENT_MESSAGE', message);
    },
};

export const mutations = {
    SET_ACTIVE(state, chat) {
        state.active = chat;
    },
    SET_CURRENT_MESSAGE(state, message) {
        state.current_message = message;
    },
};
