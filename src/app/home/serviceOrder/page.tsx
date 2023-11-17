'use client'
import { BlocoCardOS } from '@/components/BlocoCardOS'
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
  return (

    <BlocoCardOS onFocusSearch={handleOnFocusSearch} inputRef={inputSearch} onBlurSearch={handleOnBlurSearch} />
  )
}
