import {
  Card,
  Text,
  CardBody,
  CardHeader,
  Image,
  Heading,
  Flex,
  Box,
  Input,
  Button,
} from '@chakra-ui/react'
import { FC, useState } from 'react'

interface ICardAuth {
  onAuth: (cpf: string, senha: string) => void
  // onLogin: () => void
}

export interface IAuth {
  cpf: string
  senha: string
}

export const CardAuth: FC<ICardAuth> = ({ onAuth }) => {
  const [cpf, setCpf] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const handleClick = () => {
    onAuth(cpf, senha)
  }
  return (
    <Card padding="0px 42px 0px 42px" maxW="500px">
      <CardHeader>
        <Flex
          flex="1"
          gap="4"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Image src="images/logo.svg" />
          <Heading size="md" fontWeight="bold" fontSize="24px">
            {' '}
            Autenticação
          </Heading>
          <Box>
            <Text textAlign="center" maxW="300px">
              Realize a autenticação no sistema para envio de arquivos CSV
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex flexDirection="column" justifyContent="center">
          <Text mb="8px">CPF</Text>
          <Input
            variant="filled"
            mb="22px"
            onChange={(e) => setCpf(e.target.value)}
          />
          <Text mb="8px">Senha</Text>
          <Input
            variant="filled"
            type="password"
            onChange={(e) => setSenha(e.target.value)}
          />
          <Flex w="100%" justifyContent="center" gap="4">
            <Button
              isDisabled={cpf === '' || senha === ''}
              color="white"
              mt="20px"
              bgColor="#02043E"
              size="md"
              onClick={handleClick}
              _hover={{ bg: '#212485' }}
            >
              Conecte-se
            </Button>
            {/* <Button mt='20px' onClick={onLogin}>
              Login
            </Button> */}
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  )
}
