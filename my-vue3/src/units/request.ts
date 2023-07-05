import axios from 'axios';

// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建 axios实例
const service = axios.create({
    baseURL: 'http://192.168.10.128:8090/iserver/services/',
    timeout: 60000
})

// request拦截
service.interceptors.request.use(config => {
    return config
})
service.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err);
})

export default service