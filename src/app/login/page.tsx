'use client'
import { Image, Flex, Button } from '@chakra-ui/react'
import { CardLogin } from 'components/CardLogin'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { useWorkOrderFindAll } from 'hooks/useBuscarAllOrdemServico'
import { OrdemServico } from 'domains/work-orders.domain'
import { WorkOrdersContext } from 'contexts/work-order/work-order.context'

export default function Home () {
  const getWorks = useWorkOrderFindAll()
  const { setWorkOrdersSuccess } = useContext(WorkOrdersContext)
  const router = useRouter()

  const handlerCardOs = (numOs: string, pass: string) => {
    getWorks(numOs, pass).then((res) => {
      const allWorkOrders = res as unknown as OrdemServico[]
      let accessedOs: OrdemServico | null
      accessedOs = null
      const filteredOs = allWorkOrders.map((os: OrdemServico) => {
        if (os.numOs === numOs) { accessedOs = os }
        return os
      })
      setWorkOrdersSuccess(
        filteredOs, accessedOs!
      )
      router.push('/home/serviceOrder?numOs=' + filteredOs[0].numOs)
    }).catch(err => console.error(err))
  }

  const handlerAuth = () => {
    router.push('/auth')
  }
  return (
    <Flex flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} minH='100vh' padding='6' alignItems='center' justifyContent='center' >

      <Flex>
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
        <CardLogin onClickLogin={(numOs, pass) => handlerCardOs(numOs, pass)} />

      </Flex>
      <Button mt='-460' ml='-178' mb='4' onClick={handlerAuth}>
        Autenticação Emp.
      </Button>
    </Flex>
  )
}
