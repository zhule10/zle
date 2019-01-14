import Vue from 'vue'

const mutations = {
  SET_NAME(state, params) {
    state.shuju1 = params.shuju5
  },
  SET_SKILL(state) {
    Vue.set(state, 'shuju3', '米罗')
  }
}
export default mutations
