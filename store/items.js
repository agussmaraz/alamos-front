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
}
