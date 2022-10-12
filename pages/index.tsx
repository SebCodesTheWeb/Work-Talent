import React, { useContext } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { UserContext, promiseSignIn } from '../firebase'
import {
  Heading,
  Center,
  VStack,
  Spinner,
  Text,
  Button,
  Image,
} from '@chakra-ui/react'

const Home: NextPage = () => {
  const { user } = useContext(UserContext)
  const router = useRouter()
  if (user) {
    router.push(`/hub/${user.uid}`)
    return (
      <Center pt={4} minH="100vh" bgColor="gray.700" color="#fff" py={8}>
        <Spinner />
      </Center>
    )
  }

  const handleLogin = () => {
    promiseSignIn().then(({ user }) => {
      router.push(`/hub/${user.uid}`)
    })
  }

  return (
    <Center
      pt={4}
      minH="100vh"
      bgColor="gray.700"
      color="#fff"
      py={8}
      alignItems="start"
    >
      <Head>
        <title> Job-talent.org </title>
      </Head>
      <VStack>
        <VStack p={4}>
          <Image
            src="./img/logo_white.png"
            alt="Job-talent logo"
            w={{ base: '100px', '2xl': '150px' }}
          />
          <Heading size={{ base: 'sm', '2xl': '150px' }}>Work Talent</Heading>
          <Text as="em">
            Write <strong>your</strong> resume
          </Text>
        </VStack>
        <VStack
          alignItems="start"
          mt={4}
          border="1px solid #fff"
          p={16}
          borderRadius={8}
          w={{ base: 'max-content', md: '1000px', '2xl': '1200px' }}
          h={{ base: '500px', '2xl': '800px' }}
          spacing={4}
        >
          <Heading size={{ base: 'md', '2xl': 'lg' }}>
            Your Portfolios:{' '}
          </Heading>
          <Text>Please login to create a new one or edit existing ones.</Text>
          <Button
            mr={4}
            size={{ base: 'sm', '2xl': 'md' }}
            variant="ghost"
            border="1px solid #fff"
            _hover={{ color: 'gray.700', bgColor: '#fff' }}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </VStack>
      </VStack>
    </Center>
  )
}

export default Home
