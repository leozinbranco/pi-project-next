import { AuthProvider } from 'contexts/auth/auth.provider'
import React from 'react'
import ToastContextProvider from '../toast/toast.context'
import WorkOrderContextProvider from '../work-order/work-order.context'

type IAppProviderProps = {
  children: React.ReactNode
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }: IAppProviderProps) => {
  return (
    <WorkOrderContextProvider>
      <ToastContextProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ToastContextProvider>
    </WorkOrderContextProvider>
  )
}
export default AppProvider
