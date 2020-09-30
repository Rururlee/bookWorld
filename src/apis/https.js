import axios from 'axios'

// 新建axios實例
const instance = axios.create({
    baseURL: 'https://ruru-read.firebaseio.com/'
})

// request攔截器
instance.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

// response攔截器
instance.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})

// 導出函數
export default function (method, url, data = null) {
    method = method.toLowerCase()
    if (method == 'post') {
        return instance.post(url, { params: data })
    } else if (method == 'get') {
        return instance.get(url, { params: data })
    }else{
        console.log('未知的method:'+method)
        return false
    }
}