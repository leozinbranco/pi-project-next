import { IToastActionType } from './toast.action'

export interface IToastOptions {
  title: string
  description: string
  status: 'success' | 'error' | 'loading'
  isVisible: boolean
  duration?: number
  isClosable: boolean
}

export interface IToastContext {
  toastOptions: IToastOptions
  setRenderToast: ({ title, status, description, isVisible }: IToastOptions) => void
  setResetToast: () => void
}

export const toastOptionsInitialState: IToastContext = {
  toastOptions: {
    title: '',
    description: '',
    status: 'success',
    isVisible: false,
    isClosable: false
  },
  setRenderToast: () => undefined,
  setResetToast: () => undefined
}
interface IToastActionRender {
  type: IToastActionType.TOAST_RENDER
  payload: IToastOptions
}

interface IToastActionReset {
  type: IToastActionType.TOAST_RESET
  payload: undefined
}

export type IToastActions = IToastActionRender | IToastActionReset
