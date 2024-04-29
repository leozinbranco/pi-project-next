import axios from 'axios'
import { OrdemServico } from 'domains/work-orders.domain'

export const useWorkOrder = () => {
  const getOs = async (codOs: string, pass: string): Promise<OrdemServico> => {
    try {
      const token = localStorage.getItem('access-token')
      const headers = {
        'x-api-key': token,
        'Content-Type': 'application/json;charset=utf-8'
      }
      const config = { headers }
      const queryParams = new URLSearchParams({ codOs, pass }).toString()
      const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/work-order?' + queryParams, config)
      const os = res.data as OrdemServico
      console.log(os)
      return os
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  return { getOs }
}

export const findOs = async (numOs: string) => {
  try {
    const token = localStorage.getItem('access-token')
    const headers = {
      'x-api-key': token,
      'Content-Type': 'application/json;charset=utf-8'
    }
    const config = { headers }
    const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/work-order/one/' + numOs, config)
    const os = res.data as OrdemServico
    return os
  } catch (e) {
    const { message } = e as Error
    throw new Error(message)
  }
}
