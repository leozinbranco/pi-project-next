import axios from "axios";
import { ToastContext } from "contexts/toast/toast.context";
import { Funcionario } from "domains/employees.domain";
import { useContext } from "react";

interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

export const useCadastraFuncionario = () => {
  const { setRenderToast } = useContext(ToastContext)
  const cadFunc = async ( employees: Funcionario): Promise<Funcionario| undefined> => {
    try {
        const headers = {
          'Content-Type': 'application/json',
        } 
      const config = { headers }
      const res = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/up-next/cadastroFunc/' + employees.cnpjEmpresa, {
        nomeUsuario: employees.nome,
        cpfUsuario: employees.documento,
        telefoneUsuario: employees.telefone,
        emailUsuario: employees.email,
        senhaUsuario: employees.senha,
        empresaUsuarioCnpj: {
          connect: {
            cnpjEmpresa: employees.cnpjEmpresa
          }
        }
      }, config)
      setRenderToast({
        title: 'Sucesso!',
        description: 'Funcionário cadastrado com sucesso!',
        status: 'success',
        isVisible: true,
        isClosable: true
      })
      return res.data as Funcionario
    } catch (e) {
      const { response } = e as ErrorResponse
      setRenderToast({
        title: 'Erro ao cadastrar o funcionário!',
        description: response.data.message,
        status: 'error',
        isVisible: true,
        isClosable: true
      })
      return undefined;
    }
  }

  return { cadFunc }
  
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const useDeleteFuncionario = async (codFuncionario: number): Promise<void | undefined> => {
  const { setRenderToast } = useContext(ToastContext)

  try {
     const headers = {
      'Content-Type': 'application/json;charset=utf-8'
    } 
     const config = { headers }
     await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/up-next/removeFunc/' +  codFuncionario, [], config)
     setRenderToast({
      title: 'Sucesso!',
      description: 'Funcionário deletado com sucesso!',
      status: 'success',
      isVisible: true,
      isClosable: true
    })
  } catch (e) {
    const { response } = e as ErrorResponse
    setRenderToast({
      title: 'Erro ao cadastrar o funcionário!',
      description: response.data.message,
      status: 'error',
      isVisible: true,
      isClosable: true
    })
    return undefined;
  }
}

export const useBuscaFuncionario = () => {
  const { setRenderToast } = useContext(ToastContext)

  const buscaFuncionario = async (codFuncionario: number): Promise<Funcionario|undefined> => {
    try {
       const headers = {
        'Content-Type': 'application/json;charset=utf-8'
      } 
       const config = { headers }
       const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/up-next/funcionarioUn/' +  codFuncionario, config)
       setRenderToast({
        title: 'Sucesso!',
        description: 'Funcionário encontrado com sucesso!',
        status: 'success',
        isVisible: true,
        isClosable: true
      })
       // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
       return res.data.data[0].data[0] as Funcionario
    } catch (e) {
      const { response } = e as ErrorResponse
      setRenderToast({
        title: 'Erro ao buscar uma empresa!',
        description: response.data.message,
        status: 'error',
        isVisible: true,
        isClosable: true
      })
      return undefined;    
    }
  }
  return { buscaFuncionario }
}

export const useEditaFuncionario = () => {
  const { setRenderToast } = useContext(ToastContext)

  const editFunc = async (employees: Funcionario): Promise<Funcionario|undefined> => {

    try {
        const headers = {
          'Content-Type': 'application/json',
        } 
      const config = { headers }
      const res = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/up-next/editaFunc/' + employees.cnpjEmpresa, {
        codUsuario: employees.codigo,
        nomeUsuario: employees.nome,
        cpfUsuario: employees.documento,
        telefoneUsuario: employees.telefone,
        emailUsuario: employees.email,
        senhaUsuario: employees.senha,
        empresaUsuarioCnpj: {
          connect: {
            cnpjEmpresa: employees.cnpjEmpresa
          }
        }
      }, config)
      setRenderToast({
        title: 'Sucesso!',
        description: 'Funcionário atualizado com sucesso!',
        status: 'success',
        isVisible: true,
        isClosable: true
      })
      return res.data as Funcionario
    } catch (e) {
      const { response } = e as ErrorResponse
      setRenderToast({
        title: 'Erro ao cadastrar o funcionário!',
        description: response.data.message,
        status: 'error',
        isVisible: true,
        isClosable: true
      })
      return undefined;
    }
  }

  return { editFunc }

}