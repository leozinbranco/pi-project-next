'use client'
import { Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

export const BlocoContato: FC = () => {
  return (
    <Flex bgColor='#02043E' width='100%' flexDirection='row' padding={2} justifyContent='space-between'>
      <span>
        <Text color='#FFFFFF' fontSize={16} fontWeight="bold">
          Email: contato@upnext.com.br
        </Text>
      </span>
      <span>
        <Text color='#FFFFFF' fontSize={16} fontWeight="bold">
          Linkedin: https://br.linkedin.com/in/up-next
        </Text>
      </span>
      <span>
        <Text color='#FFFFFF' fontSize={16} fontWeight="bold">
          Número: (11) 98765-4321
        </Text>
      </span>
    </Flex>

  )
}
