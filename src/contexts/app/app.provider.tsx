import { AuthProvider } from 'contexts/auth/auth.provider'
import React from 'react'

type IAppProviderProps = {
  children: React.ReactNode
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }: IAppProviderProps) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
export default AppProvider
