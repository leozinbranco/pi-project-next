// TODO: Criar domain, entities, ports (inbound and outbound)
import { OrdemServico } from 'hooks/useBuscarOrdemServico'
import { Dispatch, ReactNode } from 'react'

export enum EActionTypes {
  SET_VALUE,
}

// export interface IMsg extends IMensagemRequest {
//   mostrar: boolean
// }

export interface IContextState {
  serviceOrderAccessed: OrdemServico
  allServiceOrder: OrdemServico[]
}

export interface IAction {
  type: keyof typeof EActionTypes
  payload: Partial<IContextState>
}

export interface UserContextType extends IContextState {
  enviar: Dispatch<IAction>

  auth: boolean
  setAuth: Dispatch<boolean>
}

export interface IAppProvider {
  children: ReactNode
}
