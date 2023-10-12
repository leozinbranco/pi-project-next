
import { Card, CardBody, Flex, Image, Button, CardHeader, Heading, Box, Input } from '@chakra-ui/react'
import React, { FC } from 'react'
import { CardDataOs } from '../CardDataOs'

interface IFocusInput {
    onFocusSearch: () => void
    onBlurSearch: () => void
    inputRef: React.Ref<HTMLInputElement>
}

export const CardOS: FC<IFocusInput> = ({ onFocusSearch, inputRef, onBlurSearch }) => {
    return (
        <>
            <Box width='90%' pt='5' pb='5' margin='auto'>
                <Heading color='#02043E'>
                    Ordens de Serviço
                </Heading>
                <Flex flexDirection='column' alignItems='end' mt='16'>

                    <Input
                        borderRadius='20px'
                        borderColor='#02043E'
                        width='300px'
                        placeholder='       Pesquisar'
                        bgImage='images/search.png'
                        bgRepeat='no-repeat'
                        bgPosition='10px'
                        ref={inputRef}
                        onFocus={onFocusSearch}
                        onBlur={onBlurSearch}
                    />
                </Flex>
            </Box >
            <CardDataOs />
        </>
    )
}