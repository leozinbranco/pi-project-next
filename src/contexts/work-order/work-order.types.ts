import { OrdemServico } from 'domains/work-orders.domain'
import { IWorkOrderActionType } from './work-order.action'

type WorkOrdersContextStatusRequest = 'INITIAL' | 'PROCESSING' | 'SUCCESS' | 'ERROR'

export interface IWorkOrdersCommom {
  statusRequest: WorkOrdersContextStatusRequest
  setWorkOrdersRequest: () => void
  setWorkOrdersError: (error: string) => void
  setWorkOrdersSuccess: (workOrder: OrdemServico[], accessedWorkOrder?: OrdemServico) => void
  setWorkOrdersReset: () => void
}

export interface IWorkOrdersInitialState extends IWorkOrdersCommom {
  isLoading: true
  error: null
  workOrders: null
  accessedWorkOrder?: null
  statusRequest: 'INITIAL'
}

export interface IWorkOrdersRequest extends IWorkOrdersCommom {
  isLoading: true
  error: null
  accessedWorkOrder?: null
  workOrders: null
  statusRequest: 'PROCESSING'
}

export interface IWorkOrdersSuccess extends IWorkOrdersCommom {
  isLoading: false
  error: null
  workOrders: OrdemServico[]
  accessedWorkOrder?: OrdemServico
  statusRequest: 'SUCCESS'
}

export interface IWorkOrdersError extends IWorkOrdersCommom {
  isLoading: false
  error: string
  accessedWorkOrder?: null
  workOrders: null
  statusRequest: 'ERROR'
}

export type IWorkOrdersState = IWorkOrdersError | IWorkOrdersSuccess | IWorkOrdersRequest | IWorkOrdersInitialState

export const workOrderInitialState: IWorkOrdersState = {
  accessedWorkOrder: null,
  workOrders: null,
  isLoading: true,
  error: null,
  statusRequest: 'INITIAL',
  setWorkOrdersRequest: () => undefined,
  setWorkOrdersError: () => undefined,
  setWorkOrdersReset: () => undefined,
  setWorkOrdersSuccess: () => undefined
}
interface IWorkOrderActionRequest {
  type: IWorkOrderActionType.WORK_ORDER_REQUEST
  payload: undefined
}

interface IWorkOrderActionError {
  type: IWorkOrderActionType.WORK_ORDER_ERROR
  payload: string
}

interface IWorkOrderActionSuccess {
  type: IWorkOrderActionType.WORK_ORDER_SUCCESS
  payload: {
    workOrder: OrdemServico[]
    accessedWorkOrder?: OrdemServico
  }
}

interface IWorkOrderActionReset {
  type: IWorkOrderActionType.WORK_ORDER_RESET
  payload: undefined
}

export type IWorkOrderActions = IWorkOrderActionRequest | IWorkOrderActionError | IWorkOrderActionSuccess | IWorkOrderActionReset
