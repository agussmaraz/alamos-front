export const state = () => ({
  otros: [],
  seguridad: [],
  confort: [],
})
export const getters = {}
export const actions = {
  addData({ commit }, data) {
    commit('ADD_DATA', data)
  },
  getData({ commit }, data) {
    commit('GET_DATA', data)
  },
  setData({ commit }, data) {
    commit('SET_DATA', data)
  },
  deleteData({ commit }, data) {
    commit('DELETE_DATA', data)
  },
}
export const mutations = {
  ADD_DATA(state, data) {
    state.otros.push(data)
  },
  GET_DATA(state, data) {
    state.seguridad.push(data)
  },
  SET_DATA(state, data) {
    state.confort.push(data)
  },
  DELETE_DATA(state, data) {
    const index = state[data.tipo].findIndex((e) => e.name === data.dato.name)
    state[data.tipo].splice(index, 1)
  },
}
