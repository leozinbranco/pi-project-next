import { Flex, Heading, Box, Text, Image } from '@chakra-ui/react'


export const CardCreditCardOs = () => {

    return (
        <>
            <Box width='90%' margin='auto'>
                <Box width='350px' height='150px' borderRadius='8' padding='8' mt='5' mb='5' bgColor='#0749F1'>
                    <Flex flexDirection='row' justifyContent='space-between'>
                        <Flex flexDirection='column' gap='2'>
                            <Image
                                src='images/chip.png'
                                width='75px'
                                height='50px'
                            />
                            <Text color='#fff'>
                                145236
                            </Text>
                            <Text color='#fff'>
                                Ordem de Serviço
                            </Text>
                        </Flex>
                        <Image
                            src='images/logo-card.png'
                            width='50px'
                            height='50px'
                            position='relative'
                            top='-5'
                            right='-5'
                        />
                    </Flex>
                </Box>
            </Box>
        </>
    )
}