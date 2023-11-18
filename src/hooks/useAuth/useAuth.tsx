import axios from 'axios'
import { useRouter } from 'next/navigation'

export interface UsuarioAdm {
  codUsuario: number
  nomeUsuario: string
  cpfUsuario: string
  telefoneUsuario: string
  emailUsuario: string
  emailEmpresa: string
  telefoneEmpresa: string
  empresaUsuario: {
    codEmpresa: number
    cnpjEmpresa: string
    emailEmpresa: string
  }
}

export const useAuth = () => {
  const router = useRouter()
  const autenticaUsuario = async (username: string, password: string): Promise<UsuarioAdm> => {
    try {
      const response = await axios.post('http://localhost:3002/auth/login', {
        username,
        password
      })
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      localStorage.setItem('access-token', response.data.access_token)
      const responsible = response.data as UsuarioAdm
      return responsible
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
