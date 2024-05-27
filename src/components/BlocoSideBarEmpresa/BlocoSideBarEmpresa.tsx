'use client'
import { Button, Flex, Image } from '@chakra-ui/react'
import { FC } from 'react'
import { useAuth } from 'contexts/auth/auth.hook'

interface ISide {
  onList: () => void
  onTicket: () => void
  onCad: () => void
  accessedPagent: string
}

export const BlocoSideBarEmpresa: FC<ISide> = ({
  onCad,
  onTicket,
  onList,
  accessedPagent,
}) => {
  const { signOut } = useAuth()

  return (
    <Flex
      width="234px"
      height="100vh"
      bgColor="#010A22"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      alignContent="space-around"
    >
      <Flex>
        <Image
          src="images/logoUp.png"
          width="185px"
          height="45px"
          position="relative"
          top="-105"
        />
      </Flex>
      <Flex flexDirection="column" gap="4">
        <Button
          style={{
            backgroundColor: `${
              accessedPagent.startsWith('cad') ? '#FFFFFF' : 'transparent'
            }`,
            color: `${
              accessedPagent.startsWith('cad') ? '#010A22' : '#FFFFFF'
            }`,
          }}
          left="12px"
          textAlign="initial"
          borderStartRadius="20px"
          borderEndRadius="0px"
          width="210px"
          onClick={onCad}
        >
          <Image
            position="relative"
            left="-37px"
            src={`images/${
              accessedPagent.startsWith('cad') ? 'User.png' : 'User-W.png'
            }`}
            width="25px"
            height="25px"
          />
          <span style={{ left: '-27px', position: 'relative' }}>Cadastro</span>
        </Button>
        <Button
          style={{
            backgroundColor: `${
              accessedPagent.startsWith('list') ? '#FFFFFF' : 'transparent'
            }`,
            color: `${
              accessedPagent.startsWith('list') ? '#010A22' : '#FFFFFF'
            }`,
          }}
          left="12px"
          textAlign="initial"
          borderStartRadius="20px"
          borderEndRadius="0px"
          width="210px"
          onClick={onList}
        >
          <Image
            position="relative"
            left="-40px"
            src={`images/${
              accessedPagent.startsWith('list') ? 'home.png' : 'home-w.png'
            }`}
            width="25px"
            height="25px"
          />
          <span style={{ left: '-30px', position: 'relative' }}>Pessoas</span>
        </Button>
        <Button
          style={{
            backgroundColor: `${
              accessedPagent.startsWith('tic') ? '#FFFFFF' : 'transparent'
            }`,
            color: `${
              accessedPagent.startsWith('tic') ? '#010A22' : '#FFFFFF'
            }`,
          }}
          left="12px"
          textAlign="start"
          borderStartRadius="20px"
          borderEndRadius="0px"
          onClick={onTicket}
        >
          <Image
            position="relative"
            left="-40px"
            src={`images/${
              accessedPagent.startsWith('tic')
                ? 'Activity.png'
                : 'Activity-W.png'
            }`}
            width="25px"
            height="25px"
          />
          <span style={{ left: '-30px', position: 'relative' }}>Tickets</span>
        </Button>
      </Flex>
      <Flex justifyItems="end">
        <Button
          top="180px"
          width="200px"
          color="#FFFFFF"
          onClick={signOut}
          _hover={{ bg: '#010A22', color: '#FFFFFF' }}
          border="2px #FFFFFF solid"
          borderRadius="8px"
          bgColor="#010A22"
        >
          Sair
        </Button>
      </Flex>
    </Flex>
  )
}
