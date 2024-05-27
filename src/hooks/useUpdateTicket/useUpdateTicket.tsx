/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCallback, useContext } from 'react'
import { useSWRConfig } from 'swr'
import { updateTicket } from 'services/tickets/updateTicket.service'
import { ToastContext } from 'contexts/toast/toast.context'
import { Ticket } from 'domains/tickets.domain'

export const useUpdateTicket = () => {
  // const { setTickets } = useTickets();
  const { mutate } = useSWRConfig()
  const { setRenderToast, setResetToast } = useContext(ToastContext)

  // useEffect(() => {
  //   if (data && !error && !isLoading) {
  //     setTickets(data.data);
  //   }
  // }, [data, error, isLoading, setTickets]);

  return useCallback(
    async (ticket: Partial<Ticket>, numTicket: number) => {
      try {
        setResetToast()
        await updateTicket(numTicket, ticket)
        void mutate('tickets')
        setRenderToast({
          title: 'Sucesso!',
          description: 'Ticket atualizado com sucesso!',
          status: 'success',
          isVisible: true,
          isClosable: true,
        })
      } catch (e) {
        const { message } = e as Error

        setRenderToast({
          title: 'Erro ao atualizar ticket!',
          description: message,
          status: 'error',
          isVisible: true,
          isClosable: true,
        })
      }
    },
    [setRenderToast, setResetToast, mutate]
  )
}
