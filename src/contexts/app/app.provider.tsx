import { AuthProvider } from 'contexts/auth/auth.provider'
import React from 'react'
import ToastContextProvider from '../toast/toast.context'
import WorkOrderContextProvider from '../work-order/work-order.context'
import { TicketProvider } from 'contexts/tickets/tickets.context'

type IAppProviderProps = {
  children: React.ReactNode
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }: IAppProviderProps) => {
  return (
    <TicketProvider>  
      <WorkOrderContextProvider>
        <ToastContextProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ToastContextProvider>
      </WorkOrderContextProvider>
    </TicketProvider>
  )
}
export default AppProvider
