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
  dataAtualizacaoOs: Date
  atributoValidadorOs: string
  EmpresaOs: EmpresaOs
  codEmpresaOs: number
}

interface EmpresaOs {
  razaoSocialEmpresa: string
  telefoneEmpresa: string
  emailEmpresa: string
}

export const useFilterCodOs = () => {
  const filterNumberOs = async (codOs: string) => {
    try {
      const token = localStorage.getItem('access-token')
      const headers = {
        'x-api-key': token,
        'Content-Type': 'application/json;charset=utf-8'
      }
      const config = { headers }
      if (codOs === null || codOs.trim() === '') {
        alert('Digite um número de O.S válido!')
        return
      }
      const res = await axios.get('http://localhost:3002' + '/work-order/filterCodOs/' + codOs, config)
      const os = res.data as OrdemServico
      return [os]
    } catch (e) {
      const { message } = e as Error
      throw new Error(message)
    }
  }
  return { filterNumberOs }
}
