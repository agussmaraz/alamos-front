export const state = () => {
    return {
        detalles: false,
    };
};
export const getters = {};
export const actions = {
    openDetalle({ commit }, data) {
        commit('OPEN_DETALLE', data);
    },
    closeDetalle({ commit }, data) {
        commit('CLOSE_DETALLE', data);
    },
};
export const mutations = {
    OPEN_DETALLE(state, data) {
        state.detalles = true;
    },
    CLOSE_DETALLE(state, data) {
        state.detalles = false;
    },
};
