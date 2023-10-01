import { Card, CardBody, Flex, Image, Button, CardHeader, Heading, Box, Input } from '@chakra-ui/react'
import { useRouter } from 'next/router';

export const CardUpload = () => {
  return (
    <Card padding='0px 42px 0px 42px' maxW='500px'>
      <CardHeader>
        <Flex gap='4' alignItems='center' flexWrap='wrap' justifyContent='center'>
          <Image src='images/logo.svg' />
          <Heading textAlign='center'> Upload </Heading>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex flexDirection='column' justifyContent='center' alignItems='center'>
          <Box padding='8' w='100%' border='2px dashed #02043E'>
            <Image src='images/cloud.png' margin='auto' />
            <Input type='file' style={{ display: 'none' }} />
            Arraste e solte arquivos ou <b>navegue</b>
          </Box>
          <Box mt='25' mb='25' opacity='0.5'>
            Formatos Suporados: CSV
          </Box>
          <Flex flexDirection='column' alignItems='center' justifyContent='center'>
            <Button color='white' bgColor='#02043E' size='md' _hover={{ bg: '#212485' }}>
              Upload de Arquivos
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  )
}
