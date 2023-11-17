import { createContext, FC, useReducer, useState } from 'react'
import { reducer } from './reducer'
import { IAppProvider, UserContextType } from './types'
import { initialState } from './variables'

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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
