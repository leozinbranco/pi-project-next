import { IWorkOrderActionType } from './work-order.action'
import { IWorkOrderActions, IWorkOrdersState } from './work-order.types'

export const workOrdersReducer = (state: IWorkOrdersState, action: IWorkOrderActions): IWorkOrdersState => {
  switch (action.type) {
    case IWorkOrderActionType.WORK_ORDER_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
        accessedWorkOrder: null,
        workOrders: null,
        statusRequest: 'PROCESSING'
      }
    case IWorkOrderActionType.WORK_ORDER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        workOrders: null,
        accessedWorkOrder: null,
        statusRequest: 'ERROR'
      }
    case IWorkOrderActionType.WORK_ORDER_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        workOrders: action.payload.workOrder,
        accessedWorkOrder: action.payload.accessedWorkOrder,
        statusRequest: 'SUCCESS'
      }

    default:
      return state
  }
}
