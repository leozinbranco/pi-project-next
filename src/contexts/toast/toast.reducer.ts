import { IToastActionType } from './toast.action'
import { IToastActions, IToastContext } from './toast.types'

export const toastReducer = (state: IToastContext, action: IToastActions): IToastContext => {
  switch (action.type) {
    case IToastActionType.TOAST_RENDER:
      return {
        ...state,
        toastOptions: {
          ...state.toastOptions,
          title: action.payload.title,
          description: action.payload.description,
          status: action.payload.status,
          isVisible: true
        }
      }
    case IToastActionType.TOAST_RESET:
      return {
        ...state,
        toastOptions: {
          ...state.toastOptions,
          title: '',
          description: '',
          status: 'success',
          isVisible: false
        }
      }

    default:
      return state
  }
}
