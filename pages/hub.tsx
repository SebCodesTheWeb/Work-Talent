import { useContext } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db, storage, signIn, signOut, UserContext } from '../firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { Heading, Center, VStack, Text, Button, Image } from '@chakra-ui/react'

const Home: NextPage = () => {
  const { user } = useContext(UserContext)

  return (
    <Center pt={4} minH="100vh" bgColor="gray.700" color="#fff" py={8}>
      <Head>
        <title> Job-talent.org </title>
      </Head>
      <VStack>
        <VStack>
        <Image src='./img/logo_white.png' alt="Job-talent logo" w="150px"/>
        <Heading>Job Talent</Heading>
          <Text as="em">
            Write <strong>your</strong> resume
          </Text>
          <Button
            mr={4}
            size="md"
            variant="ghost"
            border="1px solid #fff"
            _hover={{ color: 'gray.700', bgColor: '#fff' }}
            onClick={signOut}
          >
            Sign Out
          </Button>
          {user ? (
            <Text>Welcome back: {user.displayName} </Text>
          ) : (
            <Button
              mr={4}
              size="md"
              variant="ghost"
              border="1px solid #fff"
              _hover={{ color: 'gray.700', bgColor: '#fff' }}
              onClick={signIn}
            >
              Log In
            </Button>
          )}
        </VStack>
        <VStack
          alignItems="start"
          mt={4}
          border="1px solid #fff"
          p={ 16 }
          borderRadius={8}
          w={{ base: 'max-content', md: '1200px' }}
          h="800px"
          spacing={4}
        >
          <Heading>Your Portfolios: </Heading>
        </VStack>
      </VStack>
    </Center>
  )
}

export default Home
