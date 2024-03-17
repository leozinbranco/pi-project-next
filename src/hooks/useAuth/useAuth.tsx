import axios from 'axios'
import { useRouter } from 'next/navigation'

export interface UsuarioAdm {
  codUsuario: number
  nomeUsuario: string
  cpfUsuario: string
  telefoneUsuario: string
  emailUsuario: string
  senhaUsuario: string
  codEmpresaUsuario: number
  empresaUsuario: Empresa
}

interface Empresa {
  codEmpresa: number
  emailEmpresa: string
  cnpjEmpresa: string
}

export const useAuth = () => {
  const router = useRouter()
  const autenticaUsuario = async (cpf: string, password: string): Promise<UsuarioAdm> => {
    try {
      const response = await axios.post('http://localhost:3002/auth', {
        cpf,
        password
      })
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      localStorage.setItem('access-token', response.data.access_token)
      const responsible = response.data.user as UsuarioAdm
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
