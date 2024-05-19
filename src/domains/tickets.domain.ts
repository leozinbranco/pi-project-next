export interface Ticket {
    numTicket: number,
    statusTicket: string,
    tipoTicket: string,
    descricaoTicket: string,
    dataAberturaTicket: string,
    dataUltimaModTicket: string,
    descricaoAjusteTicket: string,
    cnpjEmpresaTicket: string,
    codEmpresaTicket: number
}

export interface APITicketsResponse  {
    data: Ticket[],
    message: string,
    status: string
}