// 从vuex中导入store的构造方法
import { createStore } from 'vuex'
import getters from './getters'

// const modulesFiles = require.context('./modules', true, /\.js$/);
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   const moduleName = modulesFiles.replace(/^\.\/(.*)\.\w+$/, '$1');
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

const store = createStore({
  getters,

})

export default store