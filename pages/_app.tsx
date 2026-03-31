import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { UserContext, useUserData } from '../firebase/useUserData'

const CustomSteps = {
  baseStyle: () => {
    return {
      label: {
        color: '#fff',
      },
      iconLabel: {
        color: '#fff',
      },
      stepIconContainer: {
        backgroundColor: '#2D3748 !important',
      },
    }
  },
}

const theme = extendTheme({
  components: {
    Steps: CustomSteps,
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  const userData = useUserData()
  return (
    <ChakraProvider theme={theme}>
      <UserContext.Provider value={userData}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp
