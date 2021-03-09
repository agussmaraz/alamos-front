export const state = () => {
    return {
        all: [],
    };
};

export const getters = {
    read(state) {
        return state.all.filter((fav) => fav.opened === true);
    },
    unread(state) {
        return state.all.filter((fav) => fav.opened === false);
    },
};

export const actions = {
    add({ commit }, fav) {
        commit('ADD_FAVS', fav);
    },
    eliminate({ commit }, fav) {
        const array = state.all.filter((array) => array !== fav);
        console.log(array);
        // commit('DELETE_FAV', array);
    },
};

export const mutations = {
    ADD_FAVS(state, fav) {
        state.all.push(fav);
    },
    DELETE_FAV(state, fav) {
        state.all = fav;
    },
};
