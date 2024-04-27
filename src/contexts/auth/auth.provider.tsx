/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { IAuthState, UsuarioAdmResponseAPI } from './auth.types'
import { useRouter } from 'next/navigation'
import { getAuth } from 'services/auth/auth.service'
import { UsuarioAdm } from 'domains/profiles'
import { authUserInitial } from './auth.mock'
import ToastContextProvider from '../toast/toast.context'

interface IAuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<IAuthState | null>(null)

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const router = useRouter()
  const [state, setState] = useState<IAuthState | null>(null)
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
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }, [])

  const signOut = useCallback(() => {
    removeSession()
    router.push('/login')
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

  return <AuthContext.Provider value={state}><ToastContextProvider>{children}</ToastContextProvider></AuthContext.Provider>
}
