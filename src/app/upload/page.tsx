import styles from './upload.module.css'
import { Card, CardBody, Flex, Image, Button, CardHeader, Heading, Box, Input } from '@chakra-ui/react'
import { useRef } from 'react';

export default function Home() {
  return (
    <main className={styles.main} >
      <Flex flexDirection='column' alignItems='center'>
        <Image src='images/upload-page.png'
          width='350px'
          height='350px'
        />
        <Image src='images/slogan.png'
          width='243px'
          height='72px'
        />
      </Flex>
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
              <Button color='white' bgColor='#02043E' size='md'>
                Upload de Arquivos
              </Button>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </main>
  )
}
