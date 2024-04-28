'use client'
import { Image, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { CardAuth } from '@/components/CardAuth'
import { useAuth } from 'hooks/useAuth'
import { UserContextType } from '@/context/types'
import { AppContext } from '../../context'
import { useContext } from 'react'
export default function Home () {
  const router = useRouter()
  const { autenticaUsuario } = useAuth()
  const { enviar } = useContext(AppContext) as UserContextType
  const handlerCardAuth = async (cpf: string, senha: string) => {
    try {
      const responsible = await autenticaUsuario(cpf, senha)
      void autenticaUsuario(cpf, senha).then(res => {
        enviar({
          type: 'SET_VALUE',
          payload: {
            user: res
          }
        })
      })
      router.push(`upload?cod=${responsible.empresaUsuario.codEmpresa}&user=${responsible.codUsuario}`)
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
      <CardAuth onAuth={async (cpf, senha) => await handlerCardAuth(cpf, senha)} onLogin={handlerLogin} />
    </Flex>
  )
}
