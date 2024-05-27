import axios from "axios";
import { ToastContext } from "contexts/toast/toast.context";
import { Empresas } from "domains/enterprises.domain";
import { useContext } from "react";

interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

export const useCadastroEmpresa = () => {
  const { setRenderToast } = useContext(ToastContext)
    const cadEmp = async (enterprises: Empresas): Promise<Empresas|undefined> => {
      try {
         const headers = {
          'Content-Type': 'application/json;charset=utf-8'
        } 
         const config = { headers }
         const res = await axios.post('http://localhost:3002' + '/up-next/cadastroEmp/', {
          razaoSocialEmpresa: enterprises.nome,
          nomeFantasiaEmpresa: enterprises.nomeFantasia,
          cnpjEmpresa: enterprises.documento,
          emailEmpresa: enterprises.email,
          areaAtuacaoEmpresa: enterprises.area,
          telefoneEmpresa: enterprises.telefone,
          enderecoEmpresa: enterprises.enderecoComp
         }, config)
         setRenderToast({
          title: 'Sucesso!',
          description: 'Empresa cadastrada com sucesso!',
          status: 'success',
          isVisible: true,
          isClosable: true
        })
         return res.data as Empresas
      } catch (e) {
        const { response } = e as ErrorResponse
        setRenderToast({
          title: 'Erro ao cadastrar uma empresa!',
          description: response.data.message,
          status: 'error',
          isVisible: true,
          isClosable: true
        })
        return undefined;
      }
    }

    return { cadEmp }
  }

  export const useDeleteEmpresa = async (codEmpresa: number): Promise<[]|undefined> => {
    const { setRenderToast } = useContext(ToastContext)

    try {
       const headers = {
        'Content-Type': 'application/json;charset=utf-8'
      } 
       const config = { headers }
       const res = await axios.post('http://localhost:3002' + '/up-next/removeEmp/' +  codEmpresa, [], config)
       setRenderToast({
        title: 'Sucesso!',
        description: 'Empresa deletada com sucesso!',
        status: 'success',
        isVisible: true,
        isClosable: true
      })
       return res.data as []
    } catch (e) {
      const { response } = e as ErrorResponse
      setRenderToast({
        title: 'Erro ao deletar uma empresa!',
        description: response.data.message,
        status: 'error',
        isVisible: true,
        isClosable: true
      })
      return undefined;
    }
}

export const useBuscaEmpresa = () => {
  const { setRenderToast } = useContext(ToastContext)
  const buscaEmp = async (codEmpresa: number): Promise<Empresas|undefined> => {

    try {
       const headers = {
        'Content-Type': 'application/json;charset=utf-8'
      } 
       const config = { headers }
       const res = await axios.get('http://localhost:3002' + '/up-next/empresaUn/' +  codEmpresa, config)
       setRenderToast({
        title: 'Sucesso!',
        description: 'Empresa encontrada com sucesso!',
        status: 'success',
        isVisible: true,
        isClosable: true
      })
       // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
       return res.data.data[0].data[0] as Empresas
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

  return { buscaEmp }

}

export const useEditaEmpresa = () => {
  const { setRenderToast } = useContext(ToastContext)
  const editEmp = async (enterprises: Empresas): Promise<Empresas|undefined> => {
    try {
      const headers = {
       'Content-Type': 'application/json;charset=utf-8'
     } 
      const config = { headers }
      const res = await axios.post('http://localhost:3002' + '/up-next/editaEmp/', {
       codEmpresa: enterprises.codigo,
       razaoSocialEmpresa: enterprises.nome,
       nomeFantasiaEmpresa: enterprises.nomeFantasia,
       cnpjEmpresa: enterprises.documento,
       emailEmpresa: enterprises.email,
       areaAtuacaoEmpresa: enterprises.area,
       telefoneEmpresa: enterprises.telefone,
       enderecoEmpresa: enterprises.enderecoComp
      }, config)
      setRenderToast({
       title: 'Sucesso!',
       description: 'Empresa atualizada com sucesso!',
       status: 'success',
       isVisible: true,
       isClosable: true
     })
      return res.data as Empresas
   } catch (e) {
     const { response } = e as ErrorResponse
     setRenderToast({
       title: 'Erro ao atualizar uma empresa!',
       description: response.data.message,
       status: 'error',
       isVisible: true,
       isClosable: true
     })
     return undefined;
   }
  }

  return { editEmp }
  
}