/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { Image, Flex } from '@chakra-ui/react'
import { CardLogin } from 'components/CardLogin'
import { useWorkOrderFindAll } from 'hooks/useBuscarAllOrdemServico'

export default function Home () {
  const getAllOs = useWorkOrderFindAll()

  const handlerCardOs = async (numOs: string, pass: string) => {
    await getAllOs(numOs, pass)
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
