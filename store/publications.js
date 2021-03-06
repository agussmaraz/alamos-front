export const state = () => {
    return {
        active: null,
        all: {},
    };
};

export const getters = {};

export const actions = {
    setActive({ commit }, publication) {
        commit('SET_ACTIVE', publication);
    },
    addPublication({ commit }, publication) {
        commit('ADD_PUBLICATION', publication);
    },
    addMessage({ commit }, message) {
        commit('NEW_MESSAGE', message);
    },
};

export const mutations = {
    SET_ACTIVE(state, publication) {
        state.active = publication;
    },
    ADD_PUBLICATION(state, publication) {
        state.all[publication.id] = publication;
    },
    NEW_MESSAGE(state, message) {
        const conversation = state.all[message.publication].chats.find((chat) => chat.contact === message.from || chat.contact === message.to);

        conversation.status = 'unread';
        conversation.messages.push(message);
    },
};
