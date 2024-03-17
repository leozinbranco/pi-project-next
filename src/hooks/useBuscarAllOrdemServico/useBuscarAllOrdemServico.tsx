import axios from 'axios'

export interface OrdemServico {
  codOs: number
  numOs: string
  statusOs: string
  tipoObjOs: string
  tipoOs: string
  descricaoAjustesOs: string
  observacaoOs: string
  telContatoOs: string
  emailContatoOs: string
  cnpjClienteOs: string
  dataAberturaOs: Date
  dataUltimaModOs: Date
  atributoValidadorOs: string
  codEmpresaOs: number
}

export const useWorkOrderFindAll = () => {
  const getAllOs = async (codOs: string, pass: string): Promise<OrdemServico[]> => {
    try {
      // const token = localStorage.getItem('access-token')
      const headers = {
        'x-api-key': 'aaa',
        'Content-Type': 'application/json;charset=utf-8'
      }
      const nestAPI = process.env.NEXT_PUBLIC_BACKEND_URL
      const config = { headers }
      const queryParams = new URLSearchParams({ codOs, pass })
      const res = await axios.get('http://localhost:3002' + '/work-order/all/' + queryParams.get('codOs') + '/' + queryParams.get('pass'), config)
      const os = res.data as OrdemServico[]
      return os
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  return { getAllOs }
}
