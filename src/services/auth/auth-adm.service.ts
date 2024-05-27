import axios, { AxiosResponse } from 'axios'
import { UsuarioAdmResponseAPI } from 'contexts/auth/auth.types'

export const getAuthAdm = async (email: string, password: string): Promise<UsuarioAdmResponseAPI
> => {
  const response: AxiosResponse = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/admin`, {
    email,
    password
  })
  return response.data as UsuarioAdmResponseAPI
}
