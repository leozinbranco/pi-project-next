'use client'

// import { useLogin } from '@/hooks'
import { Flex, Text, Link, Image, Divider, Box } from '@chakra-ui/react'
import { FiHome, FiUsers, FiLogOut } from 'react-icons/fi'

const menuItems = [
  { id: 1, label: 'Dashboard', icon: () => <FiHome size={20} color='#FFFFFF' />, link: '/home' },
  { id: 2, label: 'Cadastrar cliente', icon: () => <FiUsers size={20} color='#FFFFFF' />, link: '/home/inserir/cliente' }
]

export const Sidebar = () => {
  // const { logout } = useLogin()

  return (
    <Flex h='100vh' bgColor='#02043E' width={250} minW={250} flexDirection='column' >
      <Flex h='10%' paddingLeft={5} paddingBottom={3} paddingTop={5} paddingRight={5} alignItems='center'>
        <Image src='../../images/logo-white.svg' width={35} />
        <Text marginLeft={3} color='white' fontSize={32} width='100%' whiteSpace='nowrap' fontFamily='Poppins'>
          Order Flow
        </Text>
      </Flex>
      <Box position='relative' padding='4'>
        <Divider orientation='horizontal' />
      </Box>
      <Flex flexDirection='column'>
        {menuItems.map(({ icon, label, link }) => (
          <Link href={link} color='#FFFFFF' key={label}>
            <Flex flexDirection='row' padding={4}>
              <Flex marginRight={5} alignItems='center'>
                {icon()}
              </Flex>
              <Text>
                {label}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
      <Flex flexDirection='column' >
        <Flex padding='4' >
          <Divider orientation='horizontal' />
        </Flex>
        <Flex justifyContent='center' flexDirection='column' h='100%'>
          <Link color='#FFFFFF' marginLeft={5} onClick={() => console.log()}>
            <Flex flexDirection='row' >
              <Flex marginRight={5} alignItems='center'>
                <FiLogOut size={20} color='#FFFFFF' />
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
