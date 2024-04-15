'use client'
import { AppContext } from '@/context/Context'
import { ToastContext } from '@/context/toast/toast.context'
import { UserContextType } from '@/context/types'
import axios from 'axios'
import { OrdemServico } from 'hooks/useBuscarOrdemServico'
import { useCallback, useContext } from 'react'
import { useRouter } from 'next/navigation'

export const useWorkOrderFindAll = () => {
  const { enviar } = useContext(AppContext) as UserContextType
  const { setRenderToast, setResetToast } = useContext(ToastContext)
  const router = useRouter()

  return useCallback(async (codOs: string, pass: string) => {
    setResetToast()
    try {
      const headers = {
        'x-api-key': 'aaa',
        'Content-Type': 'application/json;charset=utf-8'
      }
      const config = { headers }
      const queryParams = new URLSearchParams({ codOs, pass })
      const res = await axios.get('http://localhost:3002' + '/work-order/all/' + queryParams.get('codOs') + '/' + queryParams.get('pass'), config)
      if (res) {
        setRenderToast({
          title: 'Sucesso!',
          description: 'Ordem de serviço encontrada com sucesso',
          status: 'success',
          isVisible: true,
          duration: 4000,
          isClosable: true
        })
      }
      const os = res.data as OrdemServico[]
      let accessedOs

      const filteredOs = os.map((os: OrdemServico) => {
        if (os.numOs === codOs) { accessedOs = os }
        return os
      })
      enviar({
        type: 'SET_VALUE',
        payload: {
          serviceOrderAccessed: accessedOs,
          allServiceOrder: filteredOs
        }
      })
      void router.push('/home/serviceOrder')
    } catch (e) {
      const { message } = e as Error
      setRenderToast({
        title: 'Erro ao recuperar ordem de serviço!',
        description: message,
        status: 'error',
        isVisible: true,
        isClosable: true
      })
    }
  }, [setRenderToast, setResetToast, enviar])
}
