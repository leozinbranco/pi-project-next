import axios, { AxiosResponse } from 'axios'
import { APITicketsResponse } from 'domains/tickets.domain'
import Cookies from 'cookies-js'

export const getTickets = async (): Promise<APITicketsResponse
> => {
    const token = Cookies.get('token')
    const headers = {
    'x-api-key': token,
    'Content-Type': 'application/json;charset=utf-8'
    }
    const response: AxiosResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/support`, { headers })
    return response.data as APITicketsResponse
}
