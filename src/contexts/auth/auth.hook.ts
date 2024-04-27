import { useContext } from 'react'
import { authContext } from './auth.mock'
import { AuthContext } from './auth.provider'
import { Hook } from './auth.types'

export const useAuth: Hook = () => {
  const context = useContext(AuthContext)
  const isTestEnvironment = process.env.REACT_APP_TEST

  if (isTestEnvironment) {
    return authContext
  }

  if (context) {
    return context
  }

  throw new Error('O contexto de autenticação ainda não está pronto. Verifique o local da sua chamada')
}
