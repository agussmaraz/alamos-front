export const state = () => {
  return {
    datos: {
      cedula: '',
      contraseña: '',
    },
  }
}

export const actions = {
  setData({ commit }, data) {
    commit('SET_DATA', data)
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
}
