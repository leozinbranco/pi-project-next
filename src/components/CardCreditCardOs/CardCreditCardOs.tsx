import { Flex, Box, Text, Image, Link } from '@chakra-ui/react'
// import { OrdemServico } from 'hooks/useBuscarOrdemServico'
import { FC } from 'react'

interface ISecondayCards {
  numOs: string
  handleChangeOs: (numOs: string) => void
}

export const CardCreditCardOs: FC<ISecondayCards> = ({ numOs, handleChangeOs }) => {
  return (
    <>
      <Box width='350px' height='150px' borderRadius='8' padding='8' mt='5' mb='5' bgColor='#0749F1'>
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
