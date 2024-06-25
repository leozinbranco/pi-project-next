/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { IAuthState, UsuarioAdmResponseAPI } from './auth.types'
import { useRouter } from 'next/navigation'
import { getAuth } from 'services/auth/auth.service'
import { authContext, authUserInitial } from './auth.mock'
import Cookies from 'cookies-js'
import { ToastContext } from '../toast/toast.context'
import { UsuarioAdm } from 'domains/profiles.domain'
import { getAuthAdm } from 'services/auth/auth-adm.service'
import axiosInterceptorInstance from 'lib/axios'
import { useToast } from '@chakra-ui/react'

interface IAuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<IAuthState>(authContext)

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const toast = useToast()
  const router = useRouter()
  const { setRenderToast, setResetToast } = useContext(ToastContext)
  const [state, setState] = useState<IAuthState>(authContext)
  const [user, setUser] = useState<UsuarioAdm>(authUserInitial)

  const removeSession = useCallback(() => {
    Cookies.expire('token')
    router.push('/login')
  }, [])

  const signIn = useCallback(async (cpf: string, password: string) => {
    try {
      setRenderToast({
        title: 'Pendente',
        description: 'Obtendo dados...',
        status: 'loading',
        isVisible: true,
        duration: 6000,
        isClosable: true,
      })
      const response: UsuarioAdmResponseAPI = await getAuth(cpf, password)

      const token = response.access_token
      if (token) {
        toast.closeAll()
        Cookies.set('token', token, { expires: 900 })
        // const decoded: UserData = verify(token, secret!) as JwtPayload
        axiosInterceptorInstance.defaults.headers.Authorization = `Bearer ${token}`
        setUser(response.user)
        setResetToast()
        setState({
          signIn,
          signInAdm,
          user: response.user,
          // userData: decoded,
          signOut,
          token,
        })
        setRenderToast({
          title: 'Sucesso!',
          description: 'Autenticação feita com sucesso',
          status: 'success',
          isVisible: true,
          duration: 4000,
          isClosable: true,
        })
        router.push('/upload')
      }
    } catch (e) {
      toast.closeAll()
      console.log('>>> ', e)
      const { message } = e as Error

      setRenderToast({
        title: 'Erro ao autenticar!',
        description: message,
        status: 'error',
        isVisible: true,
        duration: 4000,
        isClosable: true,
      })
    }
  }, [])

  const signInAdm = useCallback(async (email: string, password: string) => {
    try {
      setRenderToast({
        title: 'Pendente',
        description: 'Obtendo dados...',
        status: 'loading',
        isVisible: true,
        duration: 4000,
        isClosable: true,
      })
      const response: UsuarioAdmResponseAPI = await getAuthAdm(email, password)
      const token = response.access_token
      if (token) {
        toast.closeAll()

        Cookies.set('token', token, { expires: 900 })
        // const decoded: UserData = verify(token, secret!) as JwtPayload

        axiosInterceptorInstance.defaults.headers.Authorization = `Bearer ${token}`
        setUser(response.user)
        setState({
          signIn,
          signInAdm,
          user: response.user,
          signOut,
          token,
        })
        setRenderToast({
          title: 'Sucesso!',
          description: 'Autenticação feita com sucesso',
          status: 'success',
          isVisible: true,
          duration: 4000,
          isClosable: true,
        })
        router.push('/cadastro')
      }
    } catch (e) {
      toast.closeAll()

      const { message } = e as Error

      setRenderToast({
        title: 'Erro ao autenticar!',
        description: message,
        status: 'error',
        isVisible: true,
        duration: 4000,
        isClosable: true,
      })
    }
  }, [])

  const signOut = useCallback(() => {
    router.push('/auth')
    setResetToast()
    removeSession()
    setRenderToast({
      title: 'Usuário deslogado!',
      description: '',
      status: 'success',
      isVisible: true,
      duration: 4000,
      isClosable: true,
    })
  }, [removeSession, router, setRenderToast, setResetToast])

  const updateAuthState = useCallback(() => {
    const accessToken = Cookies.get('token') ?? ''

    setState({
      signIn,
      signInAdm,
      user,
      signOut,
      token: accessToken,
    })
  }, [signIn, signOut])

  useEffect(() => {
    updateAuthState()
  }, [signIn, signOut, updateAuthState])

  // TODO: Implementar a função de pegar o usuário do cookie e manter logado
  // useEffect(() => {
  //   async function fetchUserFromCookie() {
  //     const token = Cookies.get('token')
  //     if (token) {
  //       axiosInterceptorInstance.defaults.headers.Authorization = `Bearer ${token}`
  //       const response: UsuarioAdmResponseAPI = await getAuthAdm(
  //         email,
  //         password
  //       )
  //       if (user) {
  //         setUser(response.user)
  //         setState({
  //           signIn,
  //           signInAdm,
  //           user: response.user,
  //           signOut,
  //           token,
  //         })
  //       }
  //     }
  //     setIsLoading(false)
  //   }
  //   void fetchUserFromCookie()
  // }, [])

  // if (!state.token) {
  //   return null
  // }

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}
