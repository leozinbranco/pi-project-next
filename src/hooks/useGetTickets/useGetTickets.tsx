/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect } from "react";
import { useTickets } from "contexts/tickets/tickets.context";
import { APITicketsResponse } from "domains/tickets.domain";
import { getTickets } from "services/tickets/getTickets.service";
import useSWR from "swr";

export const useGetTickets = () => {
  const { setTickets } = useTickets();
  const { data, error, isLoading, mutate } = useSWR<APITicketsResponse>('tickets', getTickets);

  useEffect(() => {
    if (data && !error && !isLoading) {
      setTickets(data.data);
    }
  }, [data, error, isLoading, setTickets]);

  return {
    tickets: data?.data,
    isLoading,
    error,
    mutate,
  };
};
