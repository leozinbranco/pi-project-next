import axios from 'axios'
import { OrdemServico } from 'domains/work-orders.domain'

export const useWorkOrderFindAll = () => {
  const getAllOs = async (codOs: string, pass: string): Promise<OrdemServico[]> => {
    try {
      // const token = localStorage.getItem('access-token')
      const headers = {
        'x-api-key': 'aaa',
        'Content-Type': 'application/json;charset=utf-8'
      }
      const config = { headers }
      const queryParams = new URLSearchParams({ codOs, pass })
      const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/work-order/all/' + queryParams.get('codOs') + '/' + queryParams.get('pass'), config)
      const os = res.data as OrdemServico[]
      return os
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  return { getAllOs }
}
