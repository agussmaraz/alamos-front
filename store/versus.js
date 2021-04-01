export const state = () => {
    return {
        comparacion: [],
    };
};
export const getters = {};
export const actions = {
    setVersus({ commit, state }, data) {
        if (state.comparacion.length < 3) {
            commit('SET_VERSUS', data);
        }
    },
    eliminate({ commit, state }, item) {
        console.log(item);
        const array = state.comparacion.filter((array) => array.id !== item);
        commit('DELETE_FAV', array);
    },
};
export const mutations = {
    SET_VERSUS(state, data) {
        state.comparacion.push(data);
    },
    DELETE_FAV(state, fav) {
        state.comparacion = fav;
    },
};
