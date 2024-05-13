'use client'
import { Button, Flex, Image } from "@chakra-ui/react";
import { FC } from "react";
import { usePathname } from "next/navigation";

interface IRouting {
  onList: () => void,
  onTicket: () => void,
  onCad: () => void,
}

export const BlocoSideBarEmpresa: FC<IRouting>  = ({onCad, onTicket, onList}) => {
  const pathName = usePathname()
  const bgColorCad = pathName.startsWith('/cad') ? '#FFFFFF' : 'transparent'
  const textColorCad = pathName.startsWith('/cad') ? '#010A22' : '#FFFFFF'
  const bgColorList = pathName.startsWith('/list') ? '#FFFFFF' : 'transparent'
  const textColorList = pathName.startsWith('/list') ? '#010A22' : '#FFFFFF'
  const bgColorTic = pathName.startsWith('/tic') ? '#FFFFFF' : 'transparent'
  const textColorTic = pathName.startsWith('/tic') ? '#010A22' : '#FFFFFF'

    return (
      <Flex width='234px' height='100vh' bgColor='#010A22' flexDirection='column'
        justifyContent='center'  alignItems='center'>
        <Flex flexDirection='column' gap='4'>
          <Button style={{ backgroundColor: `${bgColorCad}`, color: `${textColorCad}` }}
            left='12px' textAlign='initial' borderStartRadius='20px' borderEndRadius='0px' width='210px'
            onClick={onCad}>
            <Image 
              position='relative'
              left='-37px'
              src={`images/${pathName.startsWith('/cad') ? 'User.png' : 'User-W.png'}`}
              width='25px'
              height='25px'
              />
            <span style={{left: '-27px', position: 'relative'}}>
              Cadastro
            </span>
          </Button>
          <Button style={{ backgroundColor: `${bgColorList}`, color: `${textColorList}` }}
            left='12px' textAlign='initial' borderStartRadius='20px' borderEndRadius='0px' width='210px'
            onClick={onList}>
            <Image 
              position='relative'
              left='-40px'
              src={`images/${pathName.startsWith('/list') ? 'home.png' : 'home-w.png'}`}
              width='25px'
              height='25px'
              />
            <span style={{left: '-30px', position: 'relative'}}>
              Pessoas
            </span>
          </Button>
          <Button style={{ backgroundColor: `${bgColorTic}`, color: `${textColorTic}` }}
            left='12px' textAlign='start' borderStartRadius='20px' borderEndRadius='0px'
            onClick={onTicket}
            >
            <Image 
              position='relative'
              left='-40px'
              src={`images/${pathName.startsWith('/tic') ? 'Activity.png' : 'Activity-W.png'}`}
              width='25px'
              height='25px'
              />
            <span style={{left: '-30px', position: 'relative'}}>
              Tickets
            </span>
          </Button>
        </Flex>
        <Flex justifyItems='end'>
          <Button top='180px' width='200px' color='#FFFFFF' _hover={{ bg: '#010A22', color: '#FFFFFF'}} border='2px #FFFFFF solid' borderRadius='8px' bgColor='#010A22'>
            Sair
          </Button>
        </Flex>
      </Flex>
    )
}