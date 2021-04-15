export const state = () => {
    return {
        modal: {
            imperfecciones: false,
            motoImperfecciones: false,
            otroImperfecciones: false,
            documento: false,
            correo: false,
            ordenar: false,
            versus: false,
            multipleVersus: false,
            seleccionFiltro: false,
            filtroOrdenar: false,
        },
    };
};
export const getters = {};
export const actions = {
    openModal({ commit }, data) {
        commit('OPEN_MODAL', data);
    },
    closeModal({ commit }, data) {
        commit('CLOSE_MODAL', data);
    },
};
export const mutations = {
    OPEN_MODAL(state, data) {
        state.modal[data.modal] = true;
    },
    CLOSE_MODAL(state, data) {
        state.modal[data.modal] = false;
    },
};
