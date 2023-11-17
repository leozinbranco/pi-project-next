import axios from 'axios'
import { useRouter } from 'next/navigation'
export const useAuth = () => {
  const router = useRouter()
  const autenticaUsuario = async (username: string, password: string): Promise<void> => {
    const nestAPI = process.env.NEXT_PUBLIC_BACKEND_URL

    try {
      const response = await axios.post(`${nestAPI}/auth/login`, {
        username,
        password
      })
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      localStorage.setItem('access-token', response.data.access_token)
      // TODO: Utilizar outra estrategia de armazenamento de token
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  const logout = () => {
    localStorage.removeItem('access-token')
    router.push('/login')
  }
  return { autenticaUsuario, logout }
}
