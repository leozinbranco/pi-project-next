import { IContextState } from './types'
import { OrdemServico } from 'hooks/useBuscarOrdemServico'
export const defaultOs: OrdemServico[] = [{
  codOs: 0,
  numOs: '00000',
  statusOs: 'DEFAULT',
  tipoObjOs: 'DEFAULT',
  tipoOs: 'DEFAULT',
  descricaoAjustesOs: 'DEFAULT',
  observacaoOs: 'DEFAULT',
  telContatoOs: '19000000000',
  emailContatoOs: 'teste@email.com',
  cnpjClienteOs: '00000000000',
  dataAberturaOs: '22/11/23' as unknown as Date, // new Date(),
  dataUltimaModOs: '22/11/23' as unknown as Date, // new Date(),
  atributoValidadorOs: 'DEFAULT',
  codEmpresaOs: 0
}]
export const initialState: IContextState = {
  dataWorkOrder: defaultOs
}
