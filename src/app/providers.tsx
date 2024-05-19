'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import AppProvider from 'contexts/app/app.provider'

const theme = extendTheme({
  colors: {
    teal: {
      100: '#407BFF '
    }
  },
  fonts: {
    heading: `Poppins`,
    body: `Poppins`,
  },

})

export function Providers ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AppProvider>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </AppProvider>
  )
}
