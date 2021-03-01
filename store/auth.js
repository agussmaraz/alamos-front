import axios from 'axios';

export const state = () => {
    return {
        datos: {
            cedula: '',
            contraseña: '',
        },
        usuario: null,
    };
};

export const actions = {
    setData({ commit }, data) {
        commit('SET_DATA', data);
    },
    login({ commit, dispatch }, data) {
        const objeto = {};
        objeto.id = data.cedula;
        objeto.password = data.contraseña;
        axios.post('https://auth.alamosautos.co/users/login', objeto).then((res) => dispatch('setUser', res.data.data));
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
    SET_USER(state, data) {
        state.usuario = data;
    },
};
