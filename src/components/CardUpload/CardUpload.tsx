import { Card, CardBody, Flex, Image, Button, CardHeader, Heading, Box, Input } from '@chakra-ui/react'
import React, { FC } from 'react'

interface IRedirectAuth {
  onReturn: () => void
  onFile: () => void
  onFileSelect: () => void
  onDrop: (event: any) => void
  inputRef: React.Ref<HTMLInputElement>
  boxRef: React.Ref<HTMLDivElement>
}

export const CardUpload: FC<IRedirectAuth> = ({ onReturn, onFile, onFileSelect, onDrop, inputRef, boxRef }) => {
  return (
    <>

      <Card padding='0px 42px 0px 42px' maxW='500px'>
        <CardHeader>
          <Flex gap='4' alignItems='center' flexWrap='wrap' justifyContent='center'>
            <Image src='images/logo.svg' />
            <Heading textAlign='center'> Upload </Heading>
          </Flex>
        </CardHeader>
        <CardBody onDrop={onDrop}>
          <Flex flexDirection='column' justifyContent='center' alignItems='center'>
            <Box padding='8' w='100%' border='2px dashed #02043E' onClick={onFile}>
              <Image src='images/cloud.png' margin='auto' />
              <Input type='file' ref={inputRef} style={{ display: 'none' }} onChange={onFileSelect} />
              Arraste e solte arquivos ou <b>navegue</b>
            </Box>
            <Box ref={boxRef} style={{ display: 'none' }} >
              Arquivo
            </Box>
            <Box mt='25' mb='25' opacity='0.5'>
              Formatos Suporados: CSV
            </Box>
            <Flex flexDirection='row' gap='4' alignItems='center' justifyContent='center'>
              <Button color='white' bgColor='#02043E' size='md' _hover={{ bg: '#212485' }}>
                Upload de Arquivos
              </Button>
              <Button onClick={onReturn}>
                Sair
              </Button>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </>
  )
}
