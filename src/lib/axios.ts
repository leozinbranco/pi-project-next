import axios from 'axios'
const axiosInterceptorInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL // Replace with your API base URL
})

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
    const token = localStorage.getItem('access-token')

    // If token is present add it to request's Authorization Header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  async (error) => {
    // Handle request errors here

    return await Promise.reject(error)
  }
)
// End of Request interceptor

// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response
  },
  async (error) => {
    // Handle response errors here

    return await Promise.reject(error)
  }
)
// End of Response interceptor

export default axiosInterceptorInstance
