/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { IAuthState, UsuarioAdmResponseAPI } from './auth.types'
import { useRouter } from 'next/navigation'
import { getAuth } from 'services/auth/auth.service'
import { authContext, authUserInitial } from './auth.mock'
import { ToastContext } from '../toast/toast.context'
import { UsuarioAdm } from 'domains/profiles.domain'

interface IAuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<IAuthState>(authContext)

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const router = useRouter()
  const { setRenderToast, setResetToast } = useContext(ToastContext)
  const [state, setState] = useState<IAuthState>(authContext)
  const [user, setUser] = useState<UsuarioAdm>(authUserInitial)

  const removeSession = useCallback(() => {
    localStorage.removeItem('access-token')
    router.push('/login')
  }, [])

  const signIn = useCallback(async (cpf: string, password: string) => {
    try {
      const response: UsuarioAdmResponseAPI = await getAuth(cpf, password)
      const accessToken = response.access_token
      setUser(response.user)
      setState({
        signIn,
        user: response.user,
        signOut,
        token: accessToken
      })
      setRenderToast({
        title: 'Sucesso!',
        description: 'Autenticação feita com sucesso',
        status: 'success',
        isVisible: true,
        duration: 4000,
        isClosable: true
      })
      router.push('/upload')
    } catch (e) {
      const { message } = e as Error

      setRenderToast({
        title: 'Erro ao autenticar!',
        description: message,
        status: 'error',
        isVisible: true,
        duration: 4000,
        isClosable: true
      })
    }
  }, [])

  const signOut = useCallback(() => {
    setResetToast()
    removeSession()
    router.push('/auth')
    setRenderToast({
      title: 'Usuário deslogado!',
      description: 'asdad',
      status: 'success',
      isVisible: true,
      duration: 4000,
      isClosable: true
    })
  }, [removeSession])

  const updateAuthState = useCallback(() => {
    const accessToken = localStorage.getItem('access-token') ?? ''

    setState({
      signIn,
      user,
      signOut,
      token: accessToken
    })
  }, [signIn, signOut])

  useEffect(() => {
    updateAuthState()
  }, [signIn, signOut, updateAuthState])

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}
