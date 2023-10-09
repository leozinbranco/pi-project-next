'use client'
import { Image, Flex } from '@chakra-ui/react'
import { CardLogin } from 'components/CardLogin'
export default function Home () {
  return (
    <Flex flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} minH='100vh' padding='6' alignItems='center' justifyContent='center' >
      <Flex flexDirection='column' alignItems='center'>
        <Image src='images/login-page.png'
          width='350px'
          height='350px'
                />
        <Image src='images/slogan.png'
          width='243px'
          height='72px'
                />
      </Flex>
      <CardLogin />
    </Flex>
  )
}
