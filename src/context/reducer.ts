import { IAction, IContextState } from './types'

export const reducer = (
  state: IContextState,
  action: IAction
): IContextState => {
  switch (action.type) {
    case 'SET_VALUE':
      const values = action.payload
      return { ...state, ...values }
    default:
      return state
  }
}
