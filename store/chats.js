export const state = () => {
    return {
        active: null,
        all: {
            1: {
                publication: {
                    id: 1,
                    title: 'Honda civic 2019',
                },
                contact: 'agus',
                status: 'read',
                messages: [
                    { id: 324, from: 'agus', to: 'nico', publication: 1, text: 'tengo un auto', time: 1614819503960, read: true },
                    { id: 327, from: 'agus', to: 'nico', publication: 1, text: 'lo querés?', time: 1614819507960, read: true },
                    { id: 329, from: 'nico', to: 'agus', publication: 1, text: 'si', time: 1614819509960, read: false },
                ],
            },
        },
    };
};

export const getters = {};

export const actions = {
    setChats({ commit }, chats) {
        commit('SET_CHATS', chats);
    },
    addMessage({ commit }, message) {
        commit('NEW_MESSAGE', message);
    },
};

export const mutations = {
    SET_CHATS(state, chats) {
        state.all = chats;
    },
    NEW_MESSAGE(state, message) {
        const conversation = state.all[message.publication];

        if (!conversation) {
            state.all[message.publication] = {
                publication: message.publication,
                contact: message.from,
                status: 'unread',
                messages: [message],
            };
        } else {
            state.all[message.publication].status = 'unread';
            state.all[message.publication].messages.push(message);
        }
    },
};
