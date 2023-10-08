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
  InputLeftElement,
  Image
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
        <ModalContent minH='500px' borderRadius='20px'>

          <ModalHeader alignItems='center'>
            <Flex justifyContent='center'>
              <Image
                src='images/message-suport.png'
                width='65px'
                height='65px'
              />

            </Flex>
          </ModalHeader>
          <ModalBody>
            <Flex flexDirection='column'>
              {/* <Input variant='filled' placeholder='Filled' /> */}
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <Image
                    src='images/profile.png'
                  />
                </InputLeftElement>
                <Input
                  borderRadius='20px'
                  type='tel'
                />
              </InputGroup>
              <Flex flexDirection='column' margin='20px'>
                <Checkbox value='1' fontWeight='bolder'>Erro Sistêmico</Checkbox>
                <Checkbox value='2' fontWeight='bolder'>Nova Funcionalidade</Checkbox>
                <Checkbox value='3' fontWeight='bolder'>Outros</Checkbox>
              </Flex>
              <InputGroup>
                <Image
                  src='images/message.png'
                  position='absolute'
                  top='9px'
                  left='9px'
                />
                <Textarea
                  borderRadius='20px'
                  height='100%'
                  rows={6}
                  defaultValue='     '
                />
              </InputGroup>
            </Flex>
          </ModalBody>

          <ModalFooter style={{ display: 'flex', justifyContent: 'center' }}>
            <Button colorScheme='red' borderRadius='20px' mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme='green' borderRadius='20px'>Enviar</Button>
          </ModalFooter>
          {/* </Flex>
          </ Flex> */}
        </ModalContent>
      </Modal>
    </>
  )
}
