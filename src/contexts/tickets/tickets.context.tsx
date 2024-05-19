// contexts/TicketContext.js
import { Ticket } from 'domains/tickets.domain';
import React, { createContext, useState, useContext } from 'react';

interface ITicketContext {
  tickets: Ticket[],
  setTickets: (tickets: Ticket[]) => void,
  selectedTicket: Ticket | null,
  setSelectedTicket: (ticket: Ticket | null) => void
}

const TicketContext = createContext<ITicketContext>({
  tickets: [],
  setTickets: (tickets: Ticket[]) => {},
  selectedTicket: null,
  setSelectedTicket: (ticket: Ticket | null) => {}
});


export const useTickets = () => useContext(TicketContext);

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  // useEffect(() => {
  //   // Simulando uma requisição para obter os tickets
  //   const fetchTickets = () => {
  //     const { data, error, isLoading, mutate } = useSWR<APITicketsResponse>(
  //       'tickets',
  //       getTickets
  //     );
  //     setTickets(data);
  //   };

  //   fetchTickets();
  // }, []);

  return (
    <TicketContext.Provider value={{ tickets, setTickets, selectedTicket, setSelectedTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

export default React.memo(TicketProvider)
