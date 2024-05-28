import axios from 'axios'
import { OrdemServico } from 'domains/work-orders.domain'

export const useFilterCodOs = () => {
  const filterNumberOs = async (codOs: string) => {
    try {
      const token = localStorage.getItem('access-token')
      const headers = {
        'x-api-key': token,
        'Content-Type': 'application/json;charset=utf-8'
      }
      const config = { headers }
      // if (codOs === null || codOs.trim() === '') {
      //   alert('Digite um número de O.S válido!')
      //   return
      // }
      const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/work-order/filterCodOs/' + codOs, config)
      const os = res.data as OrdemServico
      return os
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  return { filterNumberOs }
}
