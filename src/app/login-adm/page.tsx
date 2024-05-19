// pages/index.js
'use client'
import { Flex, Box, Heading, Input, Button, Text, Image } from '@chakra-ui/react'
import { useAuth } from 'contexts/auth/auth.hook'
import { useState } from 'react'
// import { useRouter } from 'next/router'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
//   const router = useRouter()
  const { signInAdm } = useAuth()

  const handleLogin = () => {
    // Adicione a lógica de login aqui
    console.log('Login', email, password)
  }

  const handlerCardAuth = () => {
    try {
      signInAdm(email, password)
      // router.push('upload')
      // router.push(`upload?cod=${user.empresaUsuario.codEmpresa}&user=${user.codUsuario}`)
    } catch (err) {
      console.log('error: ', err)
    }
  }

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="white"
    >
      <Flex
        w={{ base: '90%', md: '944px' }}  // 100% increase in width
        h={{ base: 'auto', md: '555px' }}  // 20% increase in height
        bg="white"
        boxShadow="lg"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box
          w="30%"
          bg="#010A22"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Bloco Azul */}
          <Box>
            {/* <Image src='images/img_logo.svg'
            width='258px'
            height='300px'
            /> */}
            <Image src='images/img-login-adm.svg'
              width='258px'
              height='255px'
            />

          </Box>
        </Box>
        <Flex
          w="70%"
          p={8}
          bg="white"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading textAlign="center" mb={4}>Login</Heading>
          <Flex flexDirection="column" justifyContent="space-between"   width={480} >
            <Input 
              border='2px solid #010A22'
              padding='25px'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              mb={25}
                />
                
            <Input 
              border='2px solid #010A22'
              padding='25px'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Senha'
              type='password'
                />
          </Flex>
          <Flex margin='34px auto' gap='15'>

            <Button border='2px solid #010A22' bgColor='#FFFFFF' onClick={handlerCardAuth}>Entrar</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
