import { createContext, FC, useReducer, useState } from 'react'
import { reducer } from './reducer'
import { IAppProvider, UserContextType } from './types'
import { initialState } from './variables'
import ToastContextProvider from './toast/toast.context'

export const AppContext = createContext<UserContextType | null>(null)

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  const [state, enviar] = useReducer(reducer, initialState)
  const [auth, setAuth] = useState<boolean>(false)

  const value: UserContextType = {
    ...state,
    enviar,

    auth,
    setAuth
  }
  return <AppContext.Provider value={value}><ToastContextProvider>
    {children}
  </ToastContextProvider>
  </AppContext.Provider>
}
