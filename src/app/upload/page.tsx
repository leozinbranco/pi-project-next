'use client'
import styles from './upload.module.css'
import { Card, Text, CardBody, IconButton } from '@chakra-ui/react'
import { ModalSupport } from '@/components/ModalSupport'
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
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <IconButton
        variant='outline'
        colorScheme='teal'
        aria-label='Send email'
        onClick={handlerOnOpenModal}
        icon={<BiSupport />}
      />
      <ModalSupport visible={visivel} onClose={handlerOnCloseModal}/>
    </main>
  )
}
