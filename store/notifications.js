export const state = () => {
    return {
        all: [
            {
                id: 1,
                title: '¡Auto Match!',
                text: '¡Felicitaciones! Tu oferta ha sido aceptada por el vendedor',
                date: Date.now(),
                icon: 'NotifCar',
                link: '/notifications/match/1',
            },
        ],
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
};

export const mutations = {
    ADD_NOTIFICATION(state, notif) {
        state.all.push(notif);
    },
};
