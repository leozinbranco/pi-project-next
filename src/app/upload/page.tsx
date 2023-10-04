'use client'
import styles from './upload.module.css'
import { Image, Flex, IconButton } from '@chakra-ui/react'
import { ModalSupport } from '@/components/ModalSupport'
import { CardUpload } from 'components/CardUpload'
import { useState } from 'react'
import { BiSupport } from 'react-icons/bi'
export default function UploadPage () {
  const [visivel, setVisivel] = useState(false)
  const handlerOnCloseModal = () => {
    setVisivel(false)
    console.log('Abriu modal')
  }
  const handlerOnOpenModal = () => {
    setVisivel(true)
  }

  return (
    <main className={styles.main}>
      <Flex flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} minH='100vh' padding='6' alignItems='center' justifyContent='center' >
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
        <CardUpload />
        <IconButton
          variant='outline'
          colorScheme='teal'
          aria-label='Send email'
          onClick={handlerOnOpenModal}
          icon={<BiSupport />}
      />
        <ModalSupport visible={visivel} onClose={handlerOnCloseModal}/>
      </Flex>
    </main>
  )
}
