export const state = () => {
    return {
        active: null,
        all: [],
    };
};

export const getters = {
    read(state) {
        return state.all.filter((notif) => notif.opened === true);
    },
    unread(state) {
        return state.all.filter((notif) => notif.opened === false);
    },
};

export const actions = {
    add({ commit }, notif) {
        commit('ADD_NOTIFICATION', notif);
    },
    setActive({ commit }, notif) {
        commit('SET_ACTIVE', notif);
    },
};

export const mutations = {
    ADD_NOTIFICATION(state, notif) {
        state.all.push(notif);
    },
    SET_ACTIVE(state, notif) {
        state.active = notif;
    },
};
