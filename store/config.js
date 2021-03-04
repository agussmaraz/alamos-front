export const state = () => {
    return {
        active_page: 'Home',
    };
};
export const getters = {};
export const actions = {
    setActivePage({ commit }, page) {
        commit('SET_ACTIVE_PAGE', page);
    },
};
export const mutations = {
    SET_ACTIVE_PAGE(state, page) {
        state.active_page = page;
    },
};
