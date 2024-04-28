'use client'
import { Image, Flex, Button } from '@chakra-ui/react'
import { CardLogin } from 'components/CardLogin'
import { useRouter } from 'next/navigation'
import { useWorkOrderFindAll } from 'hooks/useBuscarAllOrdemServico'

export default function Home () {
  const getAllOs = useWorkOrderFindAll()
  const router = useRouter()

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
        <CardLogin onClickLogin={() => getAllOs}/>

      </Flex>
      <Button mt='-460' ml='-178' mb='4' onClick={handlerAuth}>
        Autenticação Emp.
      </Button>
    </Flex>
  )
}
