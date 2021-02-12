import Vue from 'vue'
import validaciones from '../services/validaciones'

export const state = () => {
  return {
    datos: {
      correo: '',
      nombre: '',
      apellido: '',
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
      fecha: '',
      genero: '',
      cedula: '',
      tipoCedula: '',
      identificacion: '',
    },
    errores: {},
  }
}
export const getters = {}
export const actions = {
  setData({ commit }, data) {
    commit('SET_DATA', data)
  },
  validateComponente1({ state, dispatch }) {
    dispatch('clearErrors', ['correo', 'confirmacion'])

    const correoValidacion = validaciones.emailParticular(state.datos.correo)
    const confirmacionValidacion = validaciones.emailConfirmacionParticular(
      state.datos.correo,
      state.datos.confirmacion
    )

    if (correoValidacion !== true) {
      dispatch('setError', { name: 'correo', error: correoValidacion })
      return false
    }

    if (confirmacionValidacion !== true) {
      dispatch('setError', {
        name: 'confirmacion',
        error: confirmacionValidacion,
      })
      return false
    }

    return true
  },
  validateComponente2({ state, dispatch }) {
    dispatch('clearErrors', ['nombre', 'apellido', 'genero'])

    const nombreValidacion = validaciones.nombreParticular(state.datos.nombre)
    const apellidoValidacion = validaciones.apellidoParticular(
      state.datos.apellido
    )
    const generoValidacion = validaciones.generParticlar(state.datos.genero)

    if (nombreValidacion !== true) {
      dispatch('setError', { name: 'nombre', error: nombreValidacion })
      return false
    }

    if (apellidoValidacion !== true) {
      dispatch('setError', { name: 'apellido', error: apellidoValidacion })
      return false
    }
    if (generoValidacion !== true) {
      dispatch('setError', { name: 'genero', error: generoValidacion })
      return false
    }

    return true
  },
  validateComponente3({ state, dispatch }) {
    dispatch('clearErrors', ['tipoCedula', 'cedula', 'fecha'])

    const tipoCedulaValidacion = validaciones.tipoCedulaParticular(
      state.datos.tipoCedula
    )
    const cedulaValidacion = validaciones.cedulaParticular(state.datos.cedula)
    const fecha = validaciones.fechaParticular(state.datos.fecha)

    if (tipoCedulaValidacion !== true) {
      dispatch('setError', { name: 'tipoCedula', error: tipoCedulaValidacion })
      return false
    }

    if (cedulaValidacion !== true) {
      dispatch('setError', { name: 'cedula', error: cedulaValidacion })
      return false
    }
    if (fecha !== true) {
      dispatch('setError', { name: 'fecha', error: fecha })
      return false
    }

    return true
  },

  validateComponente4({ state, dispatch }) {
    dispatch('clearErrors', ['telefono', 'celular'])

    const telefono = validaciones.telefonoParticular(state.datos.telefono)
    const celular = validaciones.celularParticular(state.datos.celular)

    if (telefono !== true) {
      dispatch('setError', { name: 'telefono', error: telefono })
      return false
    }
    if (celular !== true) {
      dispatch('setError', { name: 'celular', error: celular })
      return false
    }
    return true
  },
  validateComponente5({ state, dispatch }) {
    dispatch('clearErrors', ['direccion', 'ciudad', 'localidad'])

    const direccion = validaciones.direccionParticular(state.datos.direccion)
    const ciudad = validaciones.ciudadParticular(state.datos.ciudad)
    const localidad = validaciones.localidadParticular(state.datos.localidad)

    if (direccion !== true) {
      dispatch('setError', { name: 'direccion', error: direccion })
      return false
    }

    if (ciudad !== true) {
      dispatch('setError', { name: 'ciudad', error: ciudad })
      return false
    }
    if (localidad !== true) {
      dispatch('setError', { name: 'localidad', error: localidad })
      return false
    }
    return true
  },
  setError({ commit }, error) {
    commit('SET_ERROR', error)
  },
  clearErrors({ commit }, errores = null) {
    commit('CLEAR_ERRORS', errores)
  },
}

export const mutations = {
  SET_DATA(state, data) {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const propiedad = data[key]
        state.datos[key] = propiedad
      }
    }
  },
  CLEAR_ERRORS(state, errors) {
    if (errors === null) {
      state.errores = {}
    } else {
      for (let i = 0; i < errors.length; i++) {
        const error = errors[i]

        if (state.errores[error]) {
          delete state.errores[error]
        }
      }
    }
  },
  SET_ERROR(state, error) {
    Vue.set(state.errores, error.name, error)
  },
}
