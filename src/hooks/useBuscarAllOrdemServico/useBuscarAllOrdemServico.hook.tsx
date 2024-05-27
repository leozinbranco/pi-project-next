'use client'
import axios from 'axios'
import { useCallback, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { WorkOrdersContext } from 'contexts/work-order/work-order.context'
import { OrdemServico } from 'domains/work-orders.domain'
import { ToastContext } from 'contexts/toast/toast.context'
import { useToast } from '@chakra-ui/react'

export const useWorkOrderFindAll = () => {
  const { setWorkOrdersRequest, setWorkOrdersSuccess, setWorkOrdersError } =
    useContext(WorkOrdersContext)
  const { setRenderToast, setResetToast } = useContext(ToastContext)
  const router = useRouter()
  const toast = useToast()

  return useCallback(
    async (codOs: string, pass: string) => {
      setWorkOrdersRequest()
      setRenderToast({
        title: 'Pendente',
        description: 'Buscando ordem de serviço...',
        status: 'loading',
        isVisible: true,
        duration: 4000,
        isClosable: true,
      })
      try {
        const headers = {
          'x-api-key': 'aaa',
          'Content-Type': 'application/json;charset=utf-8',
        }
        const config = { headers }
        const queryParams = new URLSearchParams({ codOs, pass })
        const res = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_URL +
            '/work-order/all/' +
            queryParams.get('codOs') +
            '/' +
            queryParams.get('pass'),
          config
        )
        let accessedOs
        const os = res.data as OrdemServico[]

        os.map((os: OrdemServico) => {
          if (os.numOs === codOs) {
            accessedOs = os
          }
          return os
        })
        setWorkOrdersSuccess(os, accessedOs)
        toast.closeAll()

        setRenderToast({
          title: 'Sucesso!',
          description: 'Ordem de serviço encontrada!',
          status: 'success',
          isVisible: true,
          isClosable: true,
        })
        void router.push('/home/serviceOrder')
      } catch (e) {
        toast.closeAll()

        const { message } = e as Error
        setWorkOrdersError(message)
        setRenderToast({
          title: 'Erro ao recuperar ordem de serviço!',
          description: message,
          status: 'error',
          isVisible: true,
          isClosable: true,
        })
      }
    },
    [
      setRenderToast,
      setResetToast,
      setWorkOrdersError,
      setWorkOrdersSuccess,
      setWorkOrdersRequest,
    ]
  )
}
