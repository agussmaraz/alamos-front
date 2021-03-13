export const state = () => {
    return {
        all: [{ id: 1, linea: 'Outback 3.6R ES', marca: 'Subaru', año: 2019, precio: '72.000.000', lugar: 'Bogotá D.C', dueño: 'Dueño Directo' }],
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
    eliminate({ commit, state }, fav) {
        const array = state.all.filter((array) => array.id !== fav);
        commit('DELETE_FAV', array);
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
