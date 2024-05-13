import axios from "axios";

export const cadastroFuncionario = () => {
    const cadFuncionario = async () => {
      try {
        const headers = {
          'Content-Type': 'application/json;charset=utf-8'
        }
        const config = { headers }
        const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/cadastro/funcionario/', config)
        return res
      } catch (e) {
        const { message } = e as Error
        throw new Error(message)
      }
    }
    return { cadFuncionario }
  }