import useSWR from "swr";

export const useSwr = (url: string)  => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data } = useSWR(url, async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Falha ao carregar os dados da API');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await response.json();
  });

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data
  };
}