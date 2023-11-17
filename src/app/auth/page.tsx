'use client'
import { Image, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { CardAuth } from '@/components/CardAuth'
import { useAuth } from 'hooks/useAuth'
export default function Home () {
  const router = useRouter()
  const { autenticaUsuario } = useAuth()
  const handlerCardAuth = async (cpf: string, senha: string) => {
    try {
      await autenticaUsuario(cpf, senha)
      router.push('/upload')
    } catch (err) {
      console.log('error: ', err)
    }
  }
  return (
    <Flex flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} minH='100vh' padding='6' alignItems='center' justifyContent='center' >
      <Flex flexDirection='column' alignItems='center'>
        <Image src='images/auth-page.png'
          width='350px'
          height='350px'
        />
        <Image src='images/slogan.png'
          width='243px'
          height='72px'
        />
      </Flex>
      <CardAuth onAuth={async (cpf, senha) => await handlerCardAuth(cpf, senha)} />
    </Flex>
  )
}
