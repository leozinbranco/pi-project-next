/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'
import React, { ReactNode, createContext, useCallback, useMemo, useReducer } from 'react'
import { workOrdersReducer } from './work-order.reducer'
import { IWorkOrdersState, workOrderInitialState } from './work-order.types'
import { IWorkOrderActionType } from './work-order.action'
import { OrdemServico } from 'domains/work-orders.domain'
interface IToastContextProps {
  children: ReactNode
}
export const WorkOrdersContext = createContext<IWorkOrdersState>(workOrderInitialState)

const WorkOrderContextProvider = ({ children }: IToastContextProps) => {
  const [state, dispatch] = useReducer(workOrdersReducer, workOrderInitialState)

  const setWorkOrdersRequest = useCallback(() => {
    dispatch({ type: IWorkOrderActionType.WORK_ORDER_REQUEST, payload: undefined })
  }, [])

  const setWorkOrdersReset = useCallback(() => {
    dispatch({
      type: IWorkOrderActionType.WORK_ORDER_RESET,
      payload: undefined
    })
  }, [])

  const setWorkOrdersError = useCallback((error: string) => {
    dispatch({
      type: IWorkOrderActionType.WORK_ORDER_ERROR,
      payload: error
    })
  }, [])

  const setWorkOrdersSuccess = useCallback((workOrders: OrdemServico[], accessedWorkOrder?: OrdemServico) => {
    dispatch({
      type: IWorkOrderActionType.WORK_ORDER_SUCCESS,
      payload: {
        workOrder: workOrders,
        accessedWorkOrder
      }
    })
  }, [])

  const value = useMemo((): IWorkOrdersState => ({
    ...state,
    setWorkOrdersError,
    setWorkOrdersReset,
    setWorkOrdersRequest,
    setWorkOrdersSuccess
  }), [state, setWorkOrdersSuccess, setWorkOrdersError, setWorkOrdersReset, setWorkOrdersRequest])

  return <WorkOrdersContext.Provider value={value}>{children}</WorkOrdersContext.Provider>
}

export default React.memo(WorkOrderContextProvider)
