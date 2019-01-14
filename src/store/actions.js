import { getAppName } from '@/api/app.js'


const actions = {
  adianna({ commit }) {
    getAppName().then(res => {
      commit('SET_NAME', res.info)
      // // 也可以使用解构赋值
      // const { info: { shuju5 } } = res
      // commit('SET_NAME',shuju5)
    }).catch(err => {
      console.log('我错了')
    })
  }
}
export default actions

//action函数接受一个与store实例具有相同方法和属性的context对象，因此你可以调用context.commit
//提交一个Mutation,或者通过context.state和context.getters获取state和getters
//用es2015解构赋值
// adianna(context) {
//   const commit = context.commit('woshiyigemutation')
// }
//就等于
// adianna({ commit }) {
//   commit('woshiyigemutation')
// }
