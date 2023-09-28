'use client'
import { Image, Flex } from '@chakra-ui/react'
import { CardAuth } from '@/components/CardAuth'
export default function Home () {
  const handlerCardAuth = (cpf: string, senha: string) => {
    console.log('cpf: ', cpf)
    console.log('senha: ', senha)
  }
  return (
    <Flex flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} minH='100vh' padding='6' alignItems='center' justifyContent='center' >
      <Image src='images/auth-page.svg'/>
      <CardAuth onAuth={handlerCardAuth}/>
    </Flex>
  )
}
