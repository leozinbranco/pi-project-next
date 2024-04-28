import { ToastContext } from '@/context/toast/toast.context'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

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
  const { setRenderToast, setResetToast } = useContext(ToastContext)
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
      setRenderToast({
        title: 'Sucesso!',
        description: 'Ordem de serviço encontrada com sucesso',
        status: 'success',
        isVisible: true,
        duration: 4000,
        isClosable: true
      })
      return responsible
      // TODO: Utilizar outra estrategia de armazenamento de token
    } catch (e) {
      const { message } = e as Error
      setRenderToast({
        title: 'Erro na autenticação!',
        description: message,
        status: 'error',
        isVisible: true,
        isClosable: true
      })
      throw new Error(message)
    }
  }
  const logout = () => {
    setResetToast()
    localStorage.removeItem('access-token')
    router.push('/login')
    setRenderToast({
      title: 'Sucesso!',
      description: 'Usuário deslogado com sucesso',
      status: 'success',
      isVisible: true,
      duration: 4000,
      isClosable: true
    })
  }
  return { autenticaUsuario, logout }
}
