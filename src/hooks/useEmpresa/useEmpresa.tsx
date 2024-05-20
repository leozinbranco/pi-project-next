import axios from "axios";
import { Empresas } from "domains/enterprises.domain";

export const cadastroEmpresa = async (enterprises: Empresas): Promise<Empresas> => {

      try {
         const headers = {
          'Content-Type': 'application/json;charset=utf-8'
        } 
         const config = { headers }
         const res = await axios.post('http://localhost:3002' + '/up-next/cadastroEmp/', {
          razaoSocialEmpresa: enterprises.nome,
          nomeFantasiaEmpresa: enterprises.fancyName,
          cnpjEmpresa: enterprises.document,
          emailEmpresa: enterprises.email,
          areaAtuacaoEmpresa: enterprises.area,
          telefoneEmpresa: enterprises.telefone,
          enderecoEmpresa: enterprises.enderecoComp
         }, config)
         return res.data as Empresas
      } catch (e) {
        const { message } = e as Error
        alert('Ocorreu um erro. Por favor, verifique os dados e tente novamente.')
        throw new Error(message)
      }
  }

  export const deleteEmpresa = async (codEmpresa: number): Promise<[]> => {

    try {
       const headers = {
        'Content-Type': 'application/json;charset=utf-8'
      } 
       const config = { headers }
       const res = await axios.post('http://localhost:3002' + '/up-next/removeEmp/' +  codEmpresa, [], config)
       return res.data as []
    } catch (e) {
      const { message } = e as Error
      alert('Ocorreu um erro. Por favor, tente novamente.')
      throw new Error(message)
    }
}

export const buscaEmpresa = async (codEmpresa: number): Promise<Empresas> => {
  try {
     const headers = {
      'Content-Type': 'application/json;charset=utf-8'
    } 
     const config = { headers }
     const res = await axios.get('http://localhost:3002' + '/up-next/empresaUn/' +  codEmpresa, config)
     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
     return res.data.data[0].data[0] as Empresas
  } catch (e) {
    const { message } = e as Error
    throw new Error(message)
  }
}

export const editaEmpresa = async (enterprises: Empresas): Promise<Empresas> => {

  try {
     const headers = {
      'Content-Type': 'application/json;charset=utf-8'
    } 
     const config = { headers }
     const res = await axios.post('http://localhost:3002' + '/up-next/editaEmp/', {
      codEmpresa: enterprises.cod,
      razaoSocialEmpresa: enterprises.nome,
      nomeFantasiaEmpresa: enterprises.fancyName,
      cnpjEmpresa: enterprises.document,
      emailEmpresa: enterprises.email,
      areaAtuacaoEmpresa: enterprises.area,
      telefoneEmpresa: enterprises.telefone,
      enderecoEmpresa: enterprises.enderecoComp
     }, config)
     return res.data as Empresas
  } catch (e) {
    const { message } = e as Error
    throw new Error(message)
  }
}