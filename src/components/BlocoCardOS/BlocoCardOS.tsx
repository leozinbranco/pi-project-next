import { Flex, Heading, Box, Input } from '@chakra-ui/react'
import React, { FC, useContext } from 'react'
import { CardDataOs } from '../CardDataOs'
import { CardCreditCardOs } from '../CardCreditCardOs'
import { AppContext } from '@/context/Context'
import { UserContextType } from '@/context/types'

interface IFocusInput {
  onFocusSearch: () => void
  onBlurSearch: () => void
  inputRef: React.Ref<HTMLInputElement>
}

export const BlocoCardOS: FC<IFocusInput> = ({ onFocusSearch, inputRef, onBlurSearch }) => {
  const { dataWorkOrder } = useContext(AppContext)

  return (
    <>
      <Box width='90%' pt='5' pb='5' margin='auto'>
        <Heading color='#02043E'>
          Ordens de Serviço
        </Heading>
        <Flex flexDirection='column' alignItems='end' mt='5'>

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
      </Box >
      <CardDataOs dataOs={dataWorkOrder}/>
      <CardCreditCardOs dataOs={dataWorkOrder} />
    </>
  )
}
