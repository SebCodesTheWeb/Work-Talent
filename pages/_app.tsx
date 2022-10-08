import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { StepsStyleConfig } from 'chakra-ui-steps'
import { Dict } from '@chakra-ui/utils'
import { UserContext, useUserData } from '../firebase/useUserData'

const CustomSteps = {
  ...StepsStyleConfig,
  baseStyle: (props: {
    [x: string]: any
    colorScheme: string
    colorMode: 'light' | 'dark'
    orientation: 'vertical' | 'horizontal' | undefined
    theme: Dict<any>
  }) => {
    return {
      ...StepsStyleConfig.baseStyle(props),
      label: {
        ...StepsStyleConfig.baseStyle(props).label,
        color: '#fff',
      },
      iconLabel: {
        ...StepsStyleConfig.baseStyle(props).iconLabel,
        color: '#fff',
      },
      stepIconContainer: {
        ...StepsStyleConfig.baseStyle(props).stepIconContainer,
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
