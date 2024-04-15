'use client'

import { Card, Text, CardBody, CardHeader, Image, Heading, Flex, Box, Input, Button } from '@chakra-ui/react'
import { FC, HTMLAttributes, useState } from 'react'

export interface ICardLogin extends HTMLAttributes<HTMLDivElement> {
  onClickLogin: (numOs: string, pass: string) => void
}

export const CardLogin: FC<ICardLogin> = ({ onClickLogin }) => {
  const [numOs, setNumOs] = useState<string>()
  const [pass, setPass] = useState<string>()
  return (
    <Card padding='0px 42px 0px 42px' maxW='500px' >
      <CardHeader>
        <Flex gap='4' alignItems='center' flexWrap='wrap' justifyContent='center'>
          <Image src='../images/logo.svg' />
          <Heading textAlign='center'> Login </Heading>
          <Box textAlign='center'>
            <Text>Conecte-se para visualizar a sua Ordem de Serviço</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex flexDirection='column'>
          {/* <Text>Cod. Empresa</Text>
          <Input variant='filled' mb='22px' /> */}
          <Text>Nº O.S</Text>
          <Input variant='filled' mb='22px' onChange={(e) => setNumOs(e.target.value)} />
          <Text >Senha</Text>
          <Input type='password' variant='filled' mb='22px' onChange={(e) => setPass(e.target.value)}/>
          <Flex gap='3' alignItems='center' justifyContent='center'>
            <Button color='white' bgColor='#02043E' size='md' _hover={{ bg: '#212485' }} onClick={() => onClickLogin(numOs, pass)}>
              Conecte-se
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card >
  )
}
