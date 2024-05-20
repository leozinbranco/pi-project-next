import axios from "axios";
import { Funcionario } from "domains/employees.domain";

export const cadastroFuncionario = async (employees: Funcionario): Promise<Funcionario> => {
    try {
        const headers = {
          'Content-Type': 'application/json',
        } 
      const config = { headers }
      const res = await axios.post('http://localhost:3002' + '/up-next/cadastroFunc/' + employees.cnpjEmpresa, {
        nomeUsuario: employees.nome,
        cpfUsuario: employees.document,
        telefoneUsuario: employees.telefone,
        emailUsuario: employees.email,
        senhaUsuario: employees.senha,
        empresaUsuarioCnpj: {
          connect: {
            cnpjEmpresa: employees.cnpjEmpresa
          }
        }
      }, config)
      return res.data as Funcionario
    } catch (e) {
      const { message } = e as Error
      alert('Ocorreu um erro. Por favor, verifique os dados e tente novamente.')
      throw new Error(message)
    }
  
}

export const deleteFuncionario = async (codFuncionario: number): Promise<[]> => {
  try {
     const headers = {
      'Content-Type': 'application/json;charset=utf-8'
    } 
     const config = { headers }
     const res = await axios.post('http://localhost:3002' + '/up-next/removeFunc/' +  codFuncionario, [], config)
     return res.data as []
  } catch (e) {
    const { message } = e as Error
    alert(message)
    throw new Error(message)
  }
}

export const buscaFuncionario = async (codFuncionario: number): Promise<Funcionario> => {
  try {
     const headers = {
      'Content-Type': 'application/json;charset=utf-8'
    } 
     const config = { headers }
     const res = await axios.get('http://localhost:3002' + '/up-next/funcionarioUn/' +  codFuncionario, config)
     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
     return res.data.data[0].data[0] as Funcionario
  } catch (e) {
    const { message } = e as Error
    alert(message)
    throw new Error(message)
  }
}

export const editaFuncionario = async (employees: Funcionario): Promise<Funcionario> => {
  try {
      const headers = {
        'Content-Type': 'application/json',
      } 
    const config = { headers }
    const res = await axios.post('http://localhost:3002' + '/up-next/editaFunc/' + employees.cnpjEmpresa, {
      codUsuario: employees.cod,
      nomeUsuario: employees.nome,
      cpfUsuario: employees.document,
      telefoneUsuario: employees.telefone,
      emailUsuario: employees.email,
      senhaUsuario: employees.senha,
      empresaUsuarioCnpj: {
        connect: {
          cnpjEmpresa: employees.cnpjEmpresa
        }
      }
    }, config)
    return res.data as Funcionario
  } catch (e) {
    const { message } = e as Error
    alert('Ocorreu um erro. Por favor, verifique os dados e tente novamente.')
    throw new Error(message)
  }

}