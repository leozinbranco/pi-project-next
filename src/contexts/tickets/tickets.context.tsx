// contexts/TicketContext.js
import { Ticket } from 'domains/tickets.domain'
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
} from 'react'

interface ITicketContext {
  tickets: Ticket[]
  setTickets: (tickets: Ticket[]) => void
  selectedTicket: Ticket | null
  setSelectedTicket: (ticket: Ticket | null) => void
}

const TicketContext = createContext<ITicketContext>({
  tickets: [],
  setTickets: (tickets: Ticket[]) => {},
  selectedTicket: null,
  setSelectedTicket: (ticket: Ticket | null) => {},
})

export const useTickets = () => useContext(TicketContext)
interface ITicketContextProps {
  children: ReactNode
}

const initialStateTicket = {
  numTicket: 0,
  descricaoTicket: '',
  cnpjEmpresaTicket: '',
  statusTicket: '',
  tipoTicket: '',
  dataAberturaTicket: '',
  dataUltimaModTicket: '',
  descricaoAjusteTicket: '',
  codEmpresaTicket: 0,
}
export const TicketProvider = ({ children }: ITicketContextProps) => {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(
    initialStateTicket
  )

  const memoizedValue: ITicketContext = useMemo(
    () => ({
      tickets,
      setTickets,
      selectedTicket,
      setSelectedTicket: (ticket: Ticket | null) => setSelectedTicket(ticket),
    }),
    [tickets, setTickets, selectedTicket, setSelectedTicket]
  )

  return (
    <TicketContext.Provider value={memoizedValue}>
      {children}
    </TicketContext.Provider>
  )
}

export default React.memo(TicketProvider)
