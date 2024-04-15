import { Flex, Heading, Box, Input, Text, FormControl, FormLabel, ChakraProvider, Button } from '@chakra-ui/react'
import React, { FC, useContext, useState, useRef } from 'react'
import { CardDataOs } from '../CardDataOs'
import { CardCreditCardOs } from '../CardCreditCardOs'
import { BlocoContato } from '../BlocoContato'
import { AppContext } from '@/context/Context'
import { UserContextType } from '@/context/types'
import { useFilterDate } from 'hooks/useFilterDate/useFilterDate'
import { useFilterCodOs } from 'hooks/useFilterCodOs/useFilterCodOs'
import { useRouter } from 'next/navigation'

interface IFocusInput {
  onFocusSearch: () => void
  onBlurSearch: () => void
  inputRef: React.Ref<HTMLInputElement>
}

export const BlocoCardOS: FC<IFocusInput> = ({ onFocusSearch, inputRef, onBlurSearch }) => {
  const router = useRouter()
  const startDateRef = useRef<HTMLInputElement>(null)
  const endDateRef = useRef<HTMLInputElement>(null)
  const searchPersonRef = useRef<HTMLInputElement>(null)
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

  const urlParams = new URLSearchParams(window.location.search)
  const numOs = urlParams?.get('numOs')

  const { filterDate } = useFilterDate()
  const { filterNumberOs } = useFilterCodOs()
  const handleFilterDate = (numOs: string, startDate: string, endDate: string) => {
    filterDate(startDate, endDate, numOs).then(res => {
      let accessedOs
      const filteredOs = res.map((os) => {
        if (os.numOs === numOs) { accessedOs = os }
        return os
      }) as OrdemServico[]
      enviar({
        type: 'SET_VALUE',
        payload: {
          serviceOrderAccessed: accessedOs,
          allServiceOrder: filteredOs
        }
      })
    }).catch(err => console.error(err))
  }

  const handleFilterCodOs = (numberOs: string) => {
    filterNumberOs(numberOs).then(res => {
      let accessedOs
      const filteredOs = res[0].EmpresaOs
        ? res.map((os) => {
          if (os) { accessedOs = os }
          return os
        }) as OrdemServico[]
        : undefined
      if (filteredOs === undefined) {
        alert('Nenhuma Ordem de Serviço foi encontrada!')
        return
      }
      enviar({
        type: 'SET_VALUE',
        payload: {
          serviceOrderAccessed: accessedOs,
          allServiceOrder: filteredOs
        }
      })
    }).catch(err => console.error(err))
  }

  const [startDate, setSelectedStartDate] = useState(formatDate(new Date()))
  const [endDate, setSelectedEndDate] = useState(formatDate(new Date()))

  function formatDate (date: Date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  function getEndDate (): string {
    if (endDateRef.current && endDateRef.current.value.length > 0) {
      return endDateRef.current.value
    }
    return ''
  }

  function getStartDate (): string {
    if (startDateRef.current && startDateRef.current.value.length > 0) {
      return startDateRef.current.value
    }
    return ''
  }

  function getNumberOs (): string {
    if (searchPersonRef.current && searchPersonRef.current.value.length > 0) {
      return searchPersonRef.current.value
    }
    return ''
  }

  return (
    <>
      <Box width='90%' pt='5' pb='5' margin='auto'>
        <Heading color='#02043E'>
          Ordens de Serviço
        </Heading>
        <Flex flexDirection='row' justifyContent='space-around'>
          <Flex gap="3">
            <ChakraProvider>
              <FormControl>
                <Flex align="center" alignItems='end'>
                  <FormLabel htmlFor="date" width="90px" color="#02043E" fontWeight="bolder">Data Inicial</FormLabel>
                  <Input
                    w="150px"
                    id="date"
                    placeholder="Selecione a Data"
                    name='startDate'
                    size="md"
                    type="date"
                    ref={startDateRef}
                    value={startDate}
                    onChange={(e) => setSelectedStartDate(e.target.value)}
                    onBlur={() => handleFilterDate(numOs, getStartDate(), getEndDate())}
                    />
                </Flex>
              </FormControl>
            </ChakraProvider>

            <ChakraProvider>
              <FormControl>
                <Flex align="center">
                  <FormLabel htmlFor="date" width="90px" color="#02043E" fontWeight="bolder">Data Final</FormLabel>
                  <Input
                    w="150px"
                    id="date"
                    placeholder="Selecione a Data"
                    name='endDate'
                    size="md"
                    type="date"
                    ref={endDateRef}
                    value={endDate}
                    onChange={(e) => setSelectedEndDate(e.target.value)}
                    onBlur={() => handleFilterDate(numOs, getStartDate(), getEndDate())}
                    />
                </Flex>
              </FormControl>
            </ChakraProvider>
          </Flex>

          <Flex gap='2'>
            <Input
              borderRadius='20px'
              borderColor='#02043E'
              width='350px'
              placeholder='Pesquisar'
              bgRepeat='no-repeat'
              bgPosition='10px'
              ref={searchPersonRef}
              onBlur={onFocusSearch}
              onFocus={onBlurSearch}
              />
            <Button onClick={() => handleFilterCodOs(getNumberOs())} color="#FFF" bgColor="#FFF">
              <img src="../../images/search.png" />
            </Button>
          </Flex>
        </Flex>
      </Box >
      <CardDataOs dataOs={serviceOrderAccessed}/>
      <Flex flexDirection='row' width='90%' alignSelf='center' justifyContent='flex-start' p='4'>
        { allServiceOrder && allServiceOrder.length > 0
          ? allServiceOrder.map(os => {
            return (<Flex marginRight={50} key={os.numOs}>
              <CardCreditCardOs numOs={os.numOs} razaoSocial={os.EmpresaOs.razaoSocialEmpresa} handleChangeOs={handleChangeOsSelected}/>
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
