export const state = () => {
    return {
        filter: 'Carro',
    };
};
export const getters = {};
export const actions = {
    setFilter({ commit }, data) {
        commit('SET_FILTER', data);
    },
};
export const mutations = {
    SET_FILTER(state, data) {
        state.filter = data;
    },
};
