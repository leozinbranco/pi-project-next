'use client'
import { BlocoCardOS } from '@/components/BlocoCardOS'
import { Flex } from '@chakra-ui/react'
import { Sidebar } from 'components/Sidebar'
import { useRef } from 'react'
import { useAuth } from 'hooks/useAuth'

export default function Home () {
  const inputSearch = useRef<HTMLInputElement>(null)
  const { logout } = useAuth()

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
  const handlerOnReturn = () => {
    logout()
  }

  return (<section><Flex flexDirection='column' marginLeft='auto' marginRight='auto' width='100%' >
    <Sidebar onReturn={handlerOnReturn}/>
    <Flex width='100%' height='100vh' flexDirection='column' >
      <BlocoCardOS onFocusSearch={handleOnFocusSearch} inputRef={inputSearch} onBlurSearch={handleOnBlurSearch} />
    </Flex>
  </Flex></section>
  )
}
