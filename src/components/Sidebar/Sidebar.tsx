'use client'
import { Flex, Text, Link, Image } from '@chakra-ui/react'
import { FC } from 'react'

interface IRedirectAuth {
  onReturn: () => void
}

export const Sidebar: FC<IRedirectAuth> = ({ onReturn }) => {
  return (
    <Flex h='100%' bgColor='#02043E' width='100%' flexDirection='row' justifyContent="space-between" padding={2}>
      <Flex h='10%' paddingLeft={2} paddingBottom={3} paddingTop={5} paddingRight={5} alignItems='center'>
        <Image src='../../images/logo-white.svg' width={35} />
        <Text color='white' fontSize={32} width='100%' whiteSpace='nowrap' fontFamily='Poppins'>
          Order Flow
        </Text>
      </Flex>
      <Flex flexDirection='column' >
        <Flex justifyContent='center' flexDirection='column' h='100%'>
          <Link color='#FFFFFF' marginLeft={5} onClick={onReturn}>
            <Flex flexDirection='row' >
              <Flex marginRight={5} alignItems='center'>
              </Flex>
              <Text>
                Sair
              </Text>
            </Flex>
          </Link>

        </Flex>
      </Flex>
    </Flex>
  )
}
