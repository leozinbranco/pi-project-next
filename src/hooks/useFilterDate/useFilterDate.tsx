import axios from 'axios'
import { OrdemServico } from 'domains/work-orders.domain'
import Cookies from 'cookies-js'

export const useFilterDate = () => {
  const filterDate = async (
    startDate: string,
    endDate: string,
    codOs: string
  ): Promise<OrdemServico[]> => {
    // if (startDate === '' || endDate === '') {
    //   alert('Selecione uma data válida para a Data Inicial/Final')
    //   throw
    // }
    try {
      const token = Cookies.get('token')
      const headers = {
        'x-api-key': token,
        'Content-Type': 'application/json;charset=utf-8',
      }
      const config = { headers }
      // const dateS = new Date(startDate).getTime()
      // const dateE = new Date(endDate).getTime()

      // if (dateS > dateE) {
      //   alert('A data inicial deve ser menor que a data final!')
      //   return
      // }
      const res = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_URL +
          '/work-order/filterDate/' +
          startDate +
          '/' +
          endDate +
          '/' +
          codOs,
        config
      )
      const os = res.data as OrdemServico[]
      return os
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  return { filterDate }
}
