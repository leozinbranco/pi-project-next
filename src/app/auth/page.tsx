import styles from './auth.module.css'
import { Card, Text, CardBody, CardHeader, Image, Heading, Flex, Box, Input, Button } from '@chakra-ui/react'
// import AuthImage from '../../assets/auth-page.png'
export default function Home() {
  return (
    <main className={styles.main}>
      <Flex flexDirection='column' alignItems='center'>
        <Image src='images/auth-page.png'
          width='400px'
          height='400px' />
        <Image src="images/slogan.png"
          width='243px'
          height='72px'
        />
      </Flex>
      <Card padding='0px 42px 0px 42px' maxW='500px'>
        <CardHeader >
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap' justifyContent='center'>
            <Image src='images/logo.svg' />
            <Heading size='md' fontWeight='bold' fontSize='24px'> Autenticação</Heading>
            <Box>
              <Text textAlign='center' maxW='300px'>Realize a autenticação no sistema para envio de arquivos CSV</Text>
            </Box>

          </Flex>
        </CardHeader>
        <CardBody>
          <Flex flexDirection='column' justifyContent='center' >

            <Text mb='8px'>CNPJ</Text>
            <Input variant='filled' mb='22px' />
            <Text mb='8px'>Senha</Text>
            <Input variant='filled' />
            <Flex w='100%' justifyContent='center'>
              <Button color='white' mt='67px' bgColor='#02043E' size='md'>
                Conecte-se
              </Button>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </main>
  )
}
