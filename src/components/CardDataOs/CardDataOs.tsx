import { Flex, Text, Image, Box, Input } from '@chakra-ui/react'
import React from 'react'

export const CardDataOs = () => {
  return (
    <>
      <Box bgColor='#02043E' margin='auto' width='90%' height='520px' color='#FFF' fontWeight='bolder' borderRadius='8'>
        <Flex flexDirection='row' columnGap='36' padding='5' justifyContent='space-around'>
          <Flex flexDirection='column' gap='5' alignItems='center'>
            <Flex flexDirection='row' alignItems='center' gap='4'>
              <Image
                src='../../images/number.png'
                width='20px'
                height='20px'
              />
              <Flex flexDirection='column'>
                <Text>Nº O.S</Text>
                <Input borderColor='transparent' disabled borderBottom='2px solid #fff' value='414' />
              </Flex>
            </Flex>

            <Flex flexDirection='row' alignItems='center' gap='4'>
              <Image
                src='../../images/config.png'
                width='20px'
                height='20px'
              />
              <Flex flexDirection='column'>
                <Text>Tipo O.S</Text>
                <Input borderColor='transparent' disabled borderBottom='2px solid #fff' />
              </Flex>
            </Flex>

            <Flex flexDirection='row' alignItems='center' gap='4'>
              <Image
                src='../../images/config.png'
                width='20px'
                height='20px'
              />
              <Flex flexDirection='column'>
                <Text>Tipo Objeto</Text>
                <Input borderColor='transparent' disabled borderBottom='2px solid #fff' />
              </Flex>
            </Flex>

            <Flex flexDirection='row' alignItems='center' gap='4'>
              <Image
                src='../../images/status.png'
                width='20px'
                height='20px'
              />
              <Flex flexDirection='column'>
                <Text>Status O.S</Text>
                <Input borderColor='transparent' disabled borderBottom='2px solid #fff' />
              </Flex>
            </Flex>

            <Flex flexDirection='row' alignItems='center' gap='3'>
              <Image
                src='../../images/calendar.svg'
                width='20px'
                height='20px'
              />
              <Flex flexDirection='column'>
                <Text>Data de Cadastro</Text>
                <Input borderColor='transparent' disabled borderBottom='2px solid #fff' />
              </Flex>
            </Flex>

            <Flex flexDirection='row' alignItems='center' gap='3'>
              <Image
                src='../../images/calendar.svg'
                width='20px'
                height='20px'
              />
              <Flex flexDirection='column'>
                <Text>Data de Atualização</Text>
                <Input borderColor='transparent' disabled borderBottom='2px solid #fff' />
              </Flex>
            </Flex>

          </Flex>

          <Flex flexDirection='column' gap='10' alignItems='right'>
            <Flex flexDirection='row' alignItems='center' gap='4'>
              <Image
                src='../../images/messages.png'
                width='20px'
                height='20px'
              />
              <Flex flexDirection='column'>
                <Text>Descrição Ajuste</Text>
                <Input borderColor='transparent' disabled borderBottom='2px solid #fff' />
              </Flex>
            </Flex>

            <Flex flexDirection='row' alignItems='center' gap='4'>
              <Image
                src='../../images/messages.png'
                width='20px'
                height='20px'
              />
              <Flex flexDirection='column'>
                <Text>Observações</Text>
                <Input borderColor='transparent' disabled borderBottom='2px solid #fff' />
              </Flex>
            </Flex>

            <Flex flexDirection='row' alignItems='center' gap='4'>
              <Image
                src='../../images/responsible.png'
                width='20px'
                height='20px'
              />
              <Flex flexDirection='column'>
                <Text>Responsável O.S</Text>
                <Input borderColor='transparent' disabled borderBottom='2px solid #fff' />
              </Flex>
            </Flex>

            <Flex flexDirection='row' alignItems='center' gap='4'>
              <Image
                src='../../images/call.png'
                width='20px'
                height='20px'
              />
              <Flex flexDirection='column'>
                <Text>Telefone Empr.</Text>
                <Input borderColor='transparent' disabled borderBottom='2px solid #fff' />
              </Flex>
            </Flex>

            <Flex flexDirection='row' alignItems='center' gap='4'>
              <Image
                src='../../images/notification.png'
                width='20px'
                height='20px'
              />
              <Flex flexDirection='column'>
                <Text>E-mail Empr.</Text>
                <Input borderColor='transparent' disabled borderBottom='2px solid #fff' />
              </Flex>
            </Flex>

          </Flex>
        </Flex>
      </Box>
    </>
  )
}
