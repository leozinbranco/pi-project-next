import axios from 'axios'
import { useRouter } from 'next/navigation'

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
      const res = await axios.get('http://localhost:3002/work-order?' + queryParams, config)
      const os = res.data as OrdemServico
      return os
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  return { getOs }
}
