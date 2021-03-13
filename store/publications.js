import Vue from 'vue';

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
    setMessageAsRead({ commit }, message) {
        commit('SET_MESSAGE_AS_READ', message);
    },
};

export const mutations = {
    SET_ACTIVE(state, publication) {
        state.active = publication;
    },
    ADD_PUBLICATION(state, publication) {
        state.all[publication.id] = publication;
    },
    SET_MESSAGE_AS_READ(state, message) {
        message.read = true;
    },
    NEW_MESSAGE(state, message) {
        const conversation_index = state.all[message.owner_id].chats.findIndex((chat) => chat.contact === message.from || chat.contact === message.to);

        Vue.set(state.all[message.owner_id].chats[conversation_index], 'status', 'unread');

        Vue.set(state.all[message.owner_id].chats[conversation_index], 'messages', [...state.all[message.owner_id].chats[conversation_index].messages, message]);
    },
};
