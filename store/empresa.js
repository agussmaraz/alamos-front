import axios from 'axios';
import Vue from 'vue';
import validaciones from '../services/validaciones';

export const state = () => {
    return {
        datos: {
            correo: '',
            nombre: '',
            razon: '',
            nit: '',
            telefono: '',
            celular: '',
            direccion: '',
            ciudad: '',
            localidad: '',
            contraseña: '',
            repetirContraseña: '',
            confirmacion: '',
        },
        usuario: '',
        validacion: {
            componente1: false,
            componente2: false,
            componente3: false,
            componente4: false,
            componente5: false,
            componente6: false,
            componente7: false,
        },
        errores: {},
    };
};

export const getters = {};

export const actions = {
    clearErrors({ commit }, errores = null) {
        commit('CLEAR_ERRORS', errores);
    },
    validateComponente1({ state, dispatch }) {
        dispatch('clearErrors', ['correo', 'confirmacion']);

        const correoValidacion = validaciones.email(state.datos.correo);
        const confirmacionValidacion = validaciones.emailConfirmacion(state.datos.correo, state.datos.confirmacion);

        if (correoValidacion !== true) {
            dispatch('setError', { name: 'correo', error: correoValidacion });
            return false;
        }

        if (confirmacionValidacion !== true) {
            dispatch('setError', {
                name: 'confirmacion',
                error: confirmacionValidacion,
            });
            return false;
        }

        return true;
    },
    validateComponente2({ state, dispatch }) {
        dispatch('clearErrors', ['nombre', 'razon', 'nit']);

        const nombre = validaciones.nombreEmpresa(state.datos.nombre);
        const razon = validaciones.razonSocial(state.datos.razon);
        const nit = validaciones.nit(state.datos.nit);

        if (nombre !== true) {
            dispatch('setError', { name: 'nombre', error: nombre });
            return false;
        }

        if (razon !== true) {
            dispatch('setError', { name: 'razon', error: razon });
            return false;
        }
        if (nit !== true) {
            dispatch('setError', { name: 'nit', error: nit });
            return false;
        }
        return true;
    },

    validateComponente3({ state, dispatch }) {
        dispatch('clearErrors', ['telefono', 'celular']);

        const telefono = validaciones.telefono(state.datos.telefono);
        const celular = validaciones.celular(state.datos.celular);

        if (telefono !== true) {
            dispatch('setError', { name: 'telefono', error: telefono });
            return false;
        }
        if (celular !== true) {
            dispatch('setError', { name: 'celular', error: celular });
            return false;
        }
        return true;
    },

    validateComponente4({ state, dispatch }) {
        dispatch('clearErrors', ['direccion', 'ciudad', 'localidad']);

        const direccion = validaciones.direccion(state.datos.direccion);
        const ciudad = validaciones.ciudad(state.datos.ciudad);
        const localidad = validaciones.localidad(state.datos.localidad);

        if (direccion !== true) {
            dispatch('setError', { name: 'direccion', error: direccion });
            return false;
        }

        if (ciudad !== true) {
            dispatch('setError', { name: 'ciudad', error: ciudad });
            return false;
        }
        if (localidad !== true) {
            dispatch('setError', { name: 'localidad', error: localidad });
            return false;
        }
        return true;
    },

    validateComponente5({ state, dispatch }) {
        dispatch('clearErrors', ['contraseña', 'repetirContraseña']);

        const contraseña = validaciones.contraseña(state.datos.contraseña);
        const repetirContraseña = validaciones.repetirContraseña(state.datos.contraseña, state.datos.repetirContraseña);
        if (contraseña !== true) {
            dispatch('setError', { name: 'contraseña', error: contraseña });
            return false;
        }

        if (repetirContraseña !== true) {
            dispatch('setError', {
                name: 'repetirContraseña',
                error: repetirContraseña,
            });
            return false;
        }

        return true;
    },

    setError({ commit }, error) {
        commit('SET_ERROR', error);
    },
    openDetalle({ commit }, data) {
        commit('OPEN_DETALLE', data);
    },
    closeDetalle({ commit }, data) {
        commit('CLOSE_DETALLE', data);
    },
    setData({ commit }, data) {
        commit('SET_DATA', data);
    },
    register({ dispatch }, data) {
        const objeto = {};
        objeto.id_type = 'nit';
        objeto.id_number = data.nit;
        objeto.id_sent = false;
        objeto.first_name = '';
        objeto.last_name = '';
        objeto.business_name = data.nombre;
        objeto.birthday = new Date();
        objeto.gender = '';
        objeto.phone_mobile = data.celular;
        objeto.phone_land = data.telefono;
        objeto.email = data.correo;
        objeto.password = data.contraseña;
        objeto.role = 20;
        objeto.country = 'CO';
        objeto.region = data.localidad;
        objeto.city = data.ciudad;
        objeto.address = data.direccion;
        objeto.status = 0;
        axios.post('https://auth.alamosautos.co/users/register', objeto).then((user) => dispatch('auth/setUser', user, { root: true }));
    },
    setUser({ commit }, data) {
        commit('SET_USER', data);
    },
    validate({ commit }, data) {
        commit('VALIDATE', data);
    },
};

export const mutations = {
    CLEAR_ERRORS(state, errors) {
        if (errors === null) {
            state.errores = {};
        } else {
            for (let i = 0; i < errors.length; i++) {
                const error = errors[i];

                if (state.errores[error]) {
                    delete state.errores[error];
                }
            }
        }
    },
    SET_ERROR(state, error) {
        Vue.set(state.errores, error.name, error);
    },
    OPEN_DETALLE(state, data) {
        state.detalles = true;
    },
    CLOSE_DETALLE(state, data) {
        state.detalles = false;
    },
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
    VALIDATE(state, data) {
        state.validacion[data.componente] = data.valor;
    },
};
