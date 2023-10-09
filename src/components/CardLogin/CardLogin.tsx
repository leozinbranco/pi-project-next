'use client'

import { Card, Text, CardBody, CardHeader, Image, Heading, Flex, Box, Input, Button } from '@chakra-ui/react'

export const CardLogin = () => {
  return (
    <Card padding='0px 42px 0px 42px' maxW='500px' >
      <CardHeader>
        <Flex gap='4' alignItems='center' flexWrap='wrap' justifyContent='center'>
          <Image src='images/logo.svg' />
          <Heading textAlign='center'> Login </Heading>
          <Box textAlign='center'>
            <Text>Conecte-se para visualizar a sua Ordem de Serviço</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex flexDirection='column'>
          <Text>Cod. Empresa</Text>
          <Input variant='filled' mb='22px' />
          <Text>Nº O.S</Text>
          <Input variant='filled' mb='22px' />
          <Text>Senha</Text>
          <Input variant='filled' mb='22px' />
          <Flex flexDirection='column' alignItems='center' justifyContent='center'>
            <Button color='white' bgColor='#02043E' size='md' _hover={{ bg: '#212485' }}>
              Conecte-se
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card >
  )
}
