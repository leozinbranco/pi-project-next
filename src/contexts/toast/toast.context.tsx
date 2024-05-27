'use client'
import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import { toastReducer } from './toast.reducer'
import { IToastActionType } from './toast.action'
import {
  toastOptionsInitialState,
  IToastContext,
  IToastOptions,
} from './toast.types'
import { useToast } from '@chakra-ui/react'
interface IToastContextProps {
  children: ReactNode
}
export const ToastContext = createContext<IToastContext>(
  toastOptionsInitialState
)

const ToastContextProvider = ({ children }: IToastContextProps) => {
  const [state, dispatch] = useReducer(toastReducer, toastOptionsInitialState)
  const toast = useToast()
  const setRenderToast = useCallback((options: IToastOptions) => {
    dispatch({ type: IToastActionType.TOAST_RENDER, payload: options })
  }, [])

  const setResetToast = useCallback(() => {
    dispatch({
      type: IToastActionType.TOAST_RESET,
      payload: undefined,
    })
  }, [])

  useEffect(() => {
    if (state.toastOptions.isVisible) {
      toast({
        position: 'bottom-right',
        title: state.toastOptions.title,
        description: state.toastOptions.description,
        status: state.toastOptions.status,
        duration: state.toastOptions.duration,
        isClosable: state.toastOptions.isClosable,
      })
    }
  }, [state.toastOptions, toast])
  const value = useMemo((): IToastContext => {
    return {
      toastOptions: state.toastOptions,
      setRenderToast,
      setResetToast,
    }
  }, [setRenderToast, setResetToast, state.toastOptions])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export default React.memo(ToastContextProvider)
