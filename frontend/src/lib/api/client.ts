import axios from 'axios'

const baseURL =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') ?? 'http://localhost:8000'

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 30_000,
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (import.meta.env.DEV) {
      console.error('[api]', error.response?.status ?? 'network', error.config?.url)
    }
    return Promise.reject(error)
  },
)

/** Prefix for versioned REST routes (Module 2+). */
export const API_V1 = '/api/v1'
