const state = {
  shuju2: '沙加'
}
const getters = {
  skill2: (state) => {
    return state.shuju2.substr(0, 1)
  }
}
const mutations = {
  SET_SHUJU2(state, canshu) {
    state.shuju2 = canshu
  }
}

const actions = {

}

export default {
  state,
  mutations,
  getters,
  actions
}
