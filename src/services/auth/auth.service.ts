import axios, { AxiosResponse } from 'axios'
import { UsuarioAdmResponseAPI } from 'contexts/auth/auth.types'

export const getAuth = async (cpf: string, password: string): Promise<UsuarioAdmResponseAPI
> => {
  const response: AxiosResponse = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth`, {
    cpf,
    password
  }
  ,
  { 
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    }
  })
  return response.data as UsuarioAdmResponseAPI
}
