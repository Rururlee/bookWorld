import req from './https.js'

// 定義接口
export const apiGetBookList = () => req('get','booklist.json')