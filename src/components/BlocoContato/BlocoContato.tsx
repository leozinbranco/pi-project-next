'use client'
import { Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

export const BlocoContato: FC = () => {
  return (
    <Flex bgColor='#02043E' width='100%' flexDirection='row' padding={2}>
      <Flex flexDirection='column' >
        <Flex justifyContent='center' flexDirection='column' h='100%'>
          <Text color='#FFFFFF' fontSize={32} fontWeight="bold">
            Contato
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
