'use client'
import { BlocoCardOS } from '@/components/BlocoCardOS'
import { Flex, Box } from '@chakra-ui/react'
import { Sidebar } from 'components/Sidebar'
import { useRef } from 'react'

export default function Home () {
  const inputSearch = useRef<HTMLInputElement>(null)

  const handleOnFocusSearch = () => {
    if (inputSearch.current) {
      inputSearch.current.value = '      '
    }
  }

  const handleOnBlurSearch = () => {
    if (inputSearch.current) {
      inputSearch.current.placeholder = '       Pesquisar'
      inputSearch.current.value = ''
    }
  }
  return (<section><Flex marginLeft='auto' marginRight='auto' width='100%' >
    <Box >
      <Sidebar />
    </Box>
    <Flex width='100%' height='100vh' flexDirection='column' >
      <BlocoCardOS onFocusSearch={handleOnFocusSearch} inputRef={inputSearch} onBlurSearch={handleOnBlurSearch} />
    </Flex>
  </Flex></section>
  )
}
