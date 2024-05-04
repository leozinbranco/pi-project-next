import { Flex, Box, Text, Image } from '@chakra-ui/react'
import { findOs } from 'hooks/useBuscarOrdemServico'
import { useRouter } from 'next/navigation'
import { FC, MouseEvent, useContext } from 'react'
import { WorkOrdersContext } from 'contexts/work-order/work-order.context'

interface ISecondayCards {
  numOs: string
  razaoSocial: string
}

export const CardCreditCardOs: FC<ISecondayCards> = ({ numOs, razaoSocial }) => {
  const { workOrders, setWorkOrdersSuccess } = useContext(WorkOrdersContext)
  const router = useRouter()
  const handleClick = (event: MouseEvent<HTMLImageElement>): void => {
    findOs(numOs).then((res) => {
      const accessedOs = res
      setWorkOrdersSuccess(
        workOrders!, accessedOs
      )
      router.push('/home/serviceOrder?numOs=' + res.numOs)
    }).catch((error) => { console.log(error) })
  }
  return (
    <>
      <Box width='250px' height='100px' borderRadius='8' padding='8' mt='5' mb='5' bgColor='#02043E' onClick={handleClick} cursor='pointer'>
        <Flex flexDirection='row' justifyContent='space-between'>
          <Flex flexDirection='column' gap='2'>
            <Flex flexDirection='row' gap='2' alignContent='center'>
              <Image
                src='../../images/chip.png'
                width='45px'
                height='30px'
                />
              <Text color='#fff'>
                {numOs}
              </Text>
            </Flex>
            <Text color='#fff'>
              {razaoSocial}
            </Text>
          </Flex>
          <Image
            src='../../images/logo-card.png'
            width='20px'
            height='20px'
            position='relative'
            top='-5'
            right='-5'
            />
        </Flex>
      </Box>
    </>
  )
}
