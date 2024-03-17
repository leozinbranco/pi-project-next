'use client'
import { Image, Flex } from '@chakra-ui/react'
import { CardLogin } from 'components/CardLogin'
import { useRouter } from 'next/navigation'
import { AppContext } from '../../context'
import { useContext } from 'react'
import { UserContextType } from '@/context/types'
import { useWorkOrderFindAll } from 'hooks/useBuscarAllOrdemServico'
import { OrdemServico } from 'hooks/useBuscarOrdemServico/useBuscarOrdemServico'

export default function Home () {
  const { getAllOs } = useWorkOrderFindAll()
  const router = useRouter()
  const { enviar } = useContext(AppContext) as UserContextType

  const handlerCardOs = (numOs: string, pass: string) => {
    getAllOs(numOs, pass).then(res => {
      let accessedOs
      const filteredOs = res.map((os) => {
        if (os.numOs === numOs) { accessedOs = os }
        return os
      }) as OrdemServico[]
      enviar({
        type: 'SET_VALUE',
        payload: {
          serviceOrderAccessed: accessedOs,
          allServiceOrder: filteredOs
        }
      })
      router.push('/home/serviceOrder')
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
