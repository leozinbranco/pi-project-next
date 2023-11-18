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
      await autenticaUsuario(cpf, senha)
      autenticaUsuario(cpf, senha).then(res => {
        enviar({
          type: 'SET_VALUE',
          payload: {
            dataResp: res
          }
        })
      })
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
