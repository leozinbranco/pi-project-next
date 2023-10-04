import React, { FC } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Flex,
  Input,
  ModalCloseButton,
  Checkbox,
  Box,
  Textarea,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { BiSupport, BiSolidUser } from 'react-icons/bi'

interface IModalSupport {
  visible: boolean
  onClose: () => void
}
export const ModalSupport: FC<IModalSupport> = ({ visible, onClose }) => {
  return (
    <>

      <Modal isOpen={visible} onClose={onClose} >
        <ModalOverlay />
        <ModalContent minH='500px'>

          <ModalHeader alignItems='center'>
            <Flex justifyContent='center'>
              <BiSupport size={62}/>

            </Flex>
            Suporte</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection='column'>
              {/* <Input variant='filled' placeholder='Filled' /> */}
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <BiSolidUser size={20}/>
                </InputLeftElement>
                <Input type='tel' placeholder='Nome' />
              </InputGroup>
              <Flex flexDirection='column' margin='20px'>
                <Checkbox value='1'>Erro Sistêmico</Checkbox>
                <Checkbox value='2'>Nova Funcionalidade</Checkbox>
                <Checkbox value='3'>Outros</Checkbox>
              </Flex>
              <Textarea placeholder='Escreva aqui detalhes do seu ticket' height='100%'/>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button variant='ghost'>Enviar</Button>
          </ModalFooter>
          {/* </Flex>
          </ Flex> */}
        </ModalContent>
      </Modal>
    </>
  )
}
