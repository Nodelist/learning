import axios from 'axios';

// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建 axios实例
const service = axios.create({
    baseURL: 'http://localhost:8090/iserver/services/',
    timeout: 20000
})

// request拦截
// service.interceptors.request.use(config => {
// })

export default service