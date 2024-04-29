/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'
import { Image, Flex, IconButton } from '@chakra-ui/react'
import { ModalSupport } from '@/components/ModalSupport'
import { CardUpload } from 'components/CardUpload'
import React, { useRef, useState, useContext } from 'react'
import styles from './upload.module.css'
import axios, { AxiosError } from 'axios'
import { AuthContext } from 'contexts/auth/auth.provider'
import { useAuth } from 'contexts/auth/auth.hook'

export default function UploadPage () {
  const { signOut } = useAuth()
  const [visivel, setVisivel] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const inputRefSup = useRef<HTMLInputElement>(null)
  const checkBoxError = useRef<HTMLInputElement>(null)
  const checkBoxNewFeature = useRef<HTMLInputElement>(null)
  const checkBoxOther = useRef<HTMLInputElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const textRef = useRef<HTMLInputElement>(null)
  const textRefArea = useRef<HTMLInputElement>(null)
  const cnpjEmpresa = useRef<HTMLInputElement>(null)
  const codEmpresa = useRef<HTMLInputElement>(null)

  const handlerOnCloseModal = () => {
    setVisivel(false)
  }
  const handlerOnOpenModal = () => {
    setVisivel(true)
  }

  const handlerOnReturn = () => {
    signOut()
  }

  const handleOnFile = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleOnFileSelect = () => {
    if (boxRef.current && inputRef.current) {
      const fileReverse = inputRef.current.value.split('').reverse().join('')
      const indexBar = fileReverse.indexOf('\\')
      const file = fileReverse.slice(0, indexBar).split('').reverse().join('')

      boxRef.current.style.display = 'block'
      boxRef.current.innerText = file
    }
  }

  const handlerSendSuport = async () => {
    if (inputRefSup.current && checkBoxError.current && checkBoxNewFeature.current && checkBoxOther.current && textAreaRef.current && cnpjEmpresa.current && codEmpresa.current) {
      if (!checkBoxError.current.checked && !checkBoxNewFeature.current.checked && !checkBoxOther.current.checked && textRef.current) {
        textRef.current.hidden = false
        return false
      }
      if ((checkBoxError.current.checked || checkBoxNewFeature.current.checked || checkBoxOther.current.checked) && textRef.current) {
        textRef.current.hidden = true
      }

      if (textAreaRef.current.value === '     ' && textRefArea.current) {
        textRefArea.current.hidden = false
        return false
      }
      if (textAreaRef.current.value !== '     ' && textRefArea.current) {
        textRefArea.current.hidden = true
      }

      let typeTicket: string = ''
      if (checkBoxError.current.checked) {
        typeTicket = 'Erro Sistêmico'
      } else if (checkBoxNewFeature.current.checked) {
        typeTicket = 'Nova Funcionalidade'
      } else {
        typeTicket = 'Outros'
      }
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/suport/`,
          {
            statusTicket: 'dede',
            tipoTicket: String(typeTicket),
            descricaoTicket: textAreaRef.current.value,
            descricaoAjusteTicket: typeTicket,
            dataAberturaTicket: new Date(),
            dataUltimaModTicket: new Date(),

            empresaTicket: {
              connect: {
                codEmpresa: Number(codEmpresa.current.value)
              }
            },
            cnpjTicket: {
              connect: {
                cnpjEmpresa: cnpjEmpresa.current.value
              }
            }
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              Authorization: localStorage.getItem('access-token')
            }
          }
        )
        alert(response.data.message)
        handlerOnCloseModal()
      } catch (error) {
        if (error instanceof AxiosError) { alert(error.message) }
      }
    }
  }

  const handleSendFile = async () => {
    if (inputRef.current) {
      const urlParams = new URLSearchParams(window.location.search)
      if (inputRef.current.files?.length === 0) {
        alert('Insira um arquivo para realizar o upload!')
        return false
      }
      const formData = new FormData()
      formData.append('file', inputRef.current.files[0], inputRef.current?.files[0].name)
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload/${urlParams.get('cod')}/${urlParams.get('user')}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: localStorage.getItem('access-token')
          }
        }
        )
        alert(response.data.message)
      } catch (error) {
        alert(error?.response?.data?.message)
      }
    }
  }

  const { user } = useContext(AuthContext)

  class UploadComponent extends React.Component {
    handleDrop = (event: any) => {
      event.preventDefault()
      const files = event.dataTransfer.files
      if (boxRef.current) {
        boxRef.current.style.display = 'block'
        boxRef.current.innerText = files[0].name
      }
    }

    render () {
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
            <Flex flexDirection='column'>
              <CardUpload onReturn={handlerOnReturn} onFile={handleOnFile} inputRef={inputRef} boxRef={boxRef} onFileSelect={handleOnFileSelect} onDrop={this.handleDrop} sendFile={handleSendFile} />
              <IconButton
                aria-label='Send email'
                onClick={handlerOnOpenModal}
                colorScheme='transparent'
                height='100px'
                justifyContent='end'
                icon={<Image
                  src='images/suport.png'
                  width='60px'
                  height='60px'
                  onClick={handlerOnOpenModal}
                                />}
                            />

            </Flex>
          </Flex>
          <ModalSupport
            visible={visivel}
            onClose={handlerOnCloseModal}
            sendSuport={handlerSendSuport}
            checkBoxError={checkBoxError}
            checkBoxNewFeature={checkBoxNewFeature}
            checkBoxOther={checkBoxOther}
            inputRef={inputRefSup} textAreaRef={textAreaRef}
            textRef={textRef}
            textRefArea={textRefArea}
            user={user}
            cnpjEmpresa={cnpjEmpresa}
            codEmpresa={codEmpresa}/>
        </main>
      )
    }
  }

  return <UploadComponent />
}
