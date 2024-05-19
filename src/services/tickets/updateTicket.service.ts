import axios, { AxiosResponse } from 'axios'
import { APITicketsResponse, Ticket } from 'domains/tickets.domain'

export const updateTicket = async (numTicket: number, ticket: Partial<Ticket>): Promise<APITicketsResponse
> => {
    const token = localStorage.getItem('access-token')
    const headers = {
        'x-api-key': token,
        'Content-Type': 'application/json;charset=utf-8'
    }
    const response: AxiosResponse = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/support/${numTicket}`, ticket, { headers })
    return response.data as APITicketsResponse
}
