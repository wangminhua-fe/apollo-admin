import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 5000,
})

service.interceptors.response.use(
  // 请求成功
  (response) => {
    debugger
    const { success, data, message } = response.data
    // 判断当前请求是否成功，成功后返回解析后的内容，失败的话展示提示信息
    if (success) {
      return data
    }
    ElMessage.error(message)
    return Promise.reject(new Error(message))
  },
  // 请求失败
  (error) => {
    debugger
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
