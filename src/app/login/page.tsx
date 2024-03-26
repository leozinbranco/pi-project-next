/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { AppContext } from '@/context/Context'
import { ToastContext } from '@/context/toast/toast.context'
import { UserContextType } from '@/context/types'
import { Image, Flex } from '@chakra-ui/react'
import { CardLogin } from 'components/CardLogin'
import { useWorkOrderFindAll } from 'hooks/useBuscarAllOrdemServico'
import { useContext } from 'react'

export default function Home () {
  const { serviceOrderAccessed } = useContext(AppContext) as UserContextType
  const getAllOs = useWorkOrderFindAll()
  const { setRenderToast } = useContext(ToastContext)

  const handlerCardOs = async (numOs: string, pass: string) => {
    await getAllOs(numOs, pass)
    if (serviceOrderAccessed) {
      setRenderToast({
        title: 'Sucesso!',
        description: 'Ordem de serviço encontrada com sucesso',
        status: 'success',
        isVisible: true,
        duration: 4000,
        isClosable: true
      })
    }
  }
  return (
    <Flex flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} minH='100vh' padding='6' alignItems='center' justifyContent='center' >
      <Flex flexDirection='column' alignItems='center'>
        <Image src='../images/login-page.png'
          width='350px'
          height='350px'
                />
        <Image src='../images/slogan.png'
          width='243px'
          height='72px'
                />
      </Flex>
      <CardLogin onClickLogin={handlerCardOs}/>
    </Flex>
  )
}
