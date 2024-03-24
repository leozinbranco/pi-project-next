import { Flex, Heading, Box, Input, Text } from '@chakra-ui/react'
import React, { FC, useContext } from 'react'
import { CardDataOs } from '../CardDataOs'
import { CardCreditCardOs } from '../CardCreditCardOs'
import { BlocoContato } from '../BlocoContato'
import { AppContext } from '@/context/Context'
import { UserContextType } from '@/context/types'

interface IFocusInput {
  onFocusSearch: () => void
  onBlurSearch: () => void
  inputRef: React.Ref<HTMLInputElement>
}

export const BlocoCardOS: FC<IFocusInput> = ({ onFocusSearch, inputRef, onBlurSearch }) => {
  const { serviceOrderAccessed, allServiceOrder, enviar } = useContext(AppContext) as UserContextType
  const handleChangeOsSelected = (numOs: string) => {
    let accessedOs
    const filteredOs = allServiceOrder.filter((os) => {
      if (os.numOs === numOs) { accessedOs = os }
      return os
    })
    enviar({
      type: 'SET_VALUE',
      payload: {
        serviceOrderAccessed: accessedOs,
        allServiceOrder: filteredOs
      }
    })
  }
  return (
    <>
      <Box width='90%' pt='5' pb='5' margin='auto'>
        <Flex justifyContent='space-between'>
          <Heading color='#02043E'>
            Ordens de Serviço
          </Heading>
          <Flex flexDirection='column' alignItems='end'>

            <Input
              borderRadius='20px'
              borderColor='#02043E'
              width='300px'
              placeholder='       Pesquisar'
              bgImage='../../images/search.png'
              bgRepeat='no-repeat'
              bgPosition='10px'
              ref={inputRef}
              onFocus={onFocusSearch}
              onBlur={onBlurSearch}
            />
          </Flex>
        </Flex>
      </Box >
      <CardDataOs dataOs={serviceOrderAccessed}/>
      <Flex flexDirection='row' width='90%' alignSelf='center' justifyContent='flex-start' p='4'>
        { allServiceOrder && allServiceOrder.length > 0
          ? allServiceOrder.map(os => {
            return (<Flex marginRight={50} key={os.numOs}>
              <CardCreditCardOs numOs={os.numOs} handleChangeOs={handleChangeOsSelected}/>
            </Flex>)
          }
          )
          : <Flex><Text color='#02043E' fontWeight='bold'> Não existem outras ordens de serviço.</Text></Flex>

        }
      </Flex>

      <BlocoContato />

    </>
  )
}
