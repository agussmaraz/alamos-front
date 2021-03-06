export const state = () => {
    return {
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
        commit('ADD_FAVS', notif);
    },
};

export const mutations = {
    ADD_FAVS(state, notif) {
        state.all.push(notif);
    },
};
