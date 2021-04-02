import Api from '../services/api';
import Session from '../services/session';

export const state = () => {
    return {
        datos: {
            cedula: '',
            contraseña: '',
        },
        errors: {
            user: false,
            password: false,
        },
        usuario: null,
        logged_in: false,
    };
};

export const actions = {
    setData({ commit }, data) {
        commit('SET_DATA', data);
    },
    login({ commit, dispatch }, data) {
        commit('SET_ERROR', null);

        return Api.login(data.cedula, data.contraseña)
            .then((user) => {
                Session.save(user.Token.token);
                dispatch('setUser', user);
            })
            .catch((err) => {
                if (err.response && err.response.data && err.response.data.error) {
                    commit('SET_ERROR', err.response.data.error);
                }
            });
    },
    logout({ commit }) {
        commit('LOGOUT');
    },
    setUser({ commit }, user) {
        commit('SET_USER', user);
    },
};
export const mutations = {
    SET_DATA(state, data) {
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const propiedad = data[key];
                state.datos[key] = propiedad;
            }
        }
    },
    SET_ERROR(state, error) {
        if (error === null) {
            state.errors.user = false;
            state.errors.password = false;
        } else if (error.includes('user')) {
            state.errors.user = 'Usuario es inválido';
        } else {
            state.errors.password = 'Contraseña incorrecta';
        }
    },
    SET_USER(state, data) {
        state.usuario = data;
        state.logged_in = true;
    },
    LOGOUT(state) {
        state.logged_in = false;
        state.usuario = null;
    },
};
