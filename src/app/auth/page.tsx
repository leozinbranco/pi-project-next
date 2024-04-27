/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { Image, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { CardAuth } from '@/components/CardAuth'
import { useAuth } from 'contexts/auth/auth.hook'
export default function Home () {
  const router = useRouter()
  const { signIn, user } = useAuth()
  const handlerCardAuth = (cpf: string, senha: string) => {
    try {
      signIn(cpf, senha)
      router.push(`upload?cod=${user.empresaUsuario.codEmpresa}&user=${user.codUsuario}`)
    } catch (err) {
      console.log('error: ', err)
    }
  }
  const handlerLogin = () => {
    router.push('/login')
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
      <CardAuth onAuth={handlerCardAuth} onLogin={handlerLogin} />
    </Flex>
  )
}
