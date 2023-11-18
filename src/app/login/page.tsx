'use client'
import { Image, Flex } from '@chakra-ui/react'
import { CardLogin } from 'components/CardLogin'
import { useWorkOrder } from 'hooks/useBuscarOrdemServico'
import { useRouter } from 'next/navigation'
import { AppContext } from '../../context'
import { useContext } from 'react'
import { UserContextType } from '@/context/types'

export default function Home () {
  const { getOs } = useWorkOrder()
  const router = useRouter()
  const { enviar } = useContext(AppContext) as UserContextType

  const handlerCardOs = (numOs: string, pass: string) => {
    getOs(numOs, pass).then(async res => {
      enviar({
        type: 'SET_VALUE',
        payload: {
          dataWorkOrder: res
        }
      })
      await router.push('/home/serviceOrder')
    }).catch(err => console.error(err))
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
      <CardLogin onClickLogin={async (numOs, pass) => handlerCardOs(numOs, pass)}/>
    </Flex>
  )
}
