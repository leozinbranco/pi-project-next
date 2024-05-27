/* eslint-disable @typescript-eslint/no-misused-promises */
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
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  InputGroup,
  InputLeftElement,
  Image,
} from '@chakra-ui/react'
import { UsuarioAdm } from 'domains/profiles.domain'

interface IModalSupport {
  visible: boolean
  onClose: () => void
  sendSuport: () => Promise<false | undefined>
  inputRef: React.Ref<HTMLInputElement>
  checkBoxError: React.Ref<HTMLInputElement>
  checkBoxNewFeature: React.Ref<HTMLInputElement>
  checkBoxOther: React.Ref<HTMLInputElement>
  textAreaRef: React.Ref<HTMLTextAreaElement>
  textRef: React.Ref<HTMLInputElement>
  textRefArea: React.Ref<HTMLInputElement>
  user: UsuarioAdm
}
export const ModalSupport: FC<IModalSupport> = ({
  user,
  visible,
  onClose,
  sendSuport,
  inputRef,
  checkBoxError,
  checkBoxNewFeature,
  checkBoxOther,
  textAreaRef,
  textRef,
  textRefArea,
}) => {
  return (
    <>
      <Modal isOpen={visible} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minH="500px" borderRadius="20px">
          <ModalHeader alignItems="center">
            <Flex justifyContent="center">
              <Image
                src="images/message-suport.png"
                width="65px"
                height="65px"
              />
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Flex flexDirection="column">
              {/* <Input variant='filled' placeholder='Filled' /> */}
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Image src="images/profile.png" />
                </InputLeftElement>
                <Input
                  borderRadius="20px"
                  value={user.empresaUsuarioCnpj.emailEmpresa ?? ''}
                  ref={inputRef}
                  disabled
                />
              </InputGroup>
              <Flex flexDirection="column" margin="20px">
                <RadioGroup>
                  <Stack spacing={2} direction="column">
                    <Radio
                      value="1"
                      required
                      borderRadius="2"
                      ref={checkBoxError}
                      fontWeight="bolder"
                    >
                      Erro Sistêmico
                    </Radio>
                    <Radio
                      value="2"
                      required
                      borderRadius="2"
                      ref={checkBoxNewFeature}
                      fontWeight="bolder"
                    >
                      Nova Funcionalidade
                    </Radio>
                    <Radio
                      value="3"
                      required
                      borderRadius="2"
                      ref={checkBoxOther}
                      fontWeight="bolder"
                    >
                      Outros
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Text color="red" fontWeight="bolder" hidden ref={textRef}>
                  Selecione ao menos uma das opções acima!
                </Text>
              </Flex>
              <Flex flexDirection="column">
                <InputGroup>
                  <Image
                    src="images/message.png"
                    position="absolute"
                    top="9px"
                    left="9px"
                  />
                  <Textarea
                    borderRadius="20px"
                    height="100%"
                    rows={6}
                    defaultValue="     "
                    ref={textAreaRef}
                    required
                  />
                </InputGroup>
                <Text color="red" fontWeight="bolder" hidden ref={textRefArea}>
                  Insira uma descrição válida para o problema encontrado!
                </Text>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              colorScheme="red"
              borderRadius="20px"
              mr={3}
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="green"
              borderRadius="20px"
              onClick={async () => await sendSuport()}
            >
              Enviar
            </Button>
          </ModalFooter>
          {/* </Flex>
          </ Flex> */}
        </ModalContent>
      </Modal>
    </>
  )
}
