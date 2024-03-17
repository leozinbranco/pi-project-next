import { Flex, Box, Text, Image, Link } from '@chakra-ui/react'
import { OrdemServico, findOs } from 'hooks/useBuscarOrdemServico'
import { useRouter } from 'next/navigation'
// import { OrdemServico } from 'hooks/useBuscarOrdemServico'
import { AppContext, UserContextType } from '../../context'
import { FC, MouseEvent, useContext } from 'react'

interface ISecondayCards {
  numOs: string
  handleChangeOs: (numOs: string) => OrdemServico
}

export const CardCreditCardOs: FC<ISecondayCards> = ({ numOs, handleChangeOs }) => {
  const { enviar } = useContext(AppContext) as UserContextType
  const router = useRouter()
  const handleClick = (event: MouseEvent<HTMLImageElement>): void => {
    findOs(numOs).then((res) => {
      const accessedOs = res
      enviar({
        type: 'SET_VALUE',
        payload: {
          serviceOrderAccessed: accessedOs
        }
      })
      router.push('/home/serviceOrder')
    }).catch((error) => { console.log(error) })
  }
  return (
    <>
      <Box width='350px' height='150px' borderRadius='8' padding='8' mt='5' mb='5' bgColor='#0749F1' onClick={handleClick} cursor='pointer'>
        <Flex flexDirection='row' justifyContent='space-between'>
          <Flex flexDirection='column' gap='2'>
            <Image
              src='../../images/chip.png'
              width='75px'
              height='50px'
              />
            <Text color='#fff'>
              {numOs}
            </Text>
            <Text color='#fff'>
              Ordem de Serviço
            </Text>
          </Flex>
          <Image
            src='../../images/logo-card.png'
            width='50px'
            height='50px'
            position='relative'
            top='-5'
            right='-5'
            />
        </Flex>
      </Box>
    </>
  )
}
