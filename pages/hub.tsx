import { useContext } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db, storage, signIn, signOut, UserContext } from '../firebase'
import { ref, uploadBytes } from 'firebase/storage'
import {
  Heading,
  Center,
  VStack,
  Text,
  Button,
  Image,
  Input,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

const initialValues = {
  portfolioName: '',
  firstname: '',
  lastname: '',
  location: '',
  phone: '',
  e_mail: '',
  about: '',
  image: '',
  jobRole: '',
  jobs: [],
  education: [],
  aboutMe: {
    shortDescription: '',
    longDescription: '',
  },
  images: [],
  portfolio: [],
  social: {
    linkedin: '',
    facebook: '',
    github: '',
    instagram: '',
    youtube: '',
    blog: '',
  },
  skills: [],
}

const Home: NextPage = () => {
  const { user } = useContext(UserContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ showModal, setShowModal] = useState(false)
  console.log(showModal)
  const name = 'jflakj'

  const initializeUserPortfolio = async () => {
    try {
      await setDoc(doc(db, 'test-users', name), {
        ...initialValues,
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <Center pt={4} minH="100vh" bgColor="gray.700" color="#fff" py={8}>
      <Head>
        <title> Job-talent.org </title>
      </Head>
      <VStack>
        <VStack>
          <Image src="./img/logo_white.png" alt="Job-talent logo" w="150px" />
          <Heading>Job Talent</Heading>
          <Text as="em">
            Write <strong>your</strong> resume
          </Text>
          {user && (
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
          )}
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
          p={16}
          borderRadius={8}
          w={{ base: 'max-content', md: '1200px' }}
          h="800px"
          spacing={4}
        >
          <Heading>Your Portfolios: </Heading>
          <Modal isOpen={isOpen} onClose={onClose} isCentered={ true }>
            <ModalOverlay />
            <ModalContent bgColor="gray.700" color="#fff" border="1px solid #fff">
              <ModalHeader>Portfolio Name</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input />
                </ModalBody>

              <ModalFooter>
                <Button colorScheme="teal" mr={3} onClick={onClose}>
                  Create
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <SimpleGrid columns={4} h="600px">
            a
          </SimpleGrid>
          <Button
            alignSelf="end"
            mr={4}
            size="md"
            variant="ghost"
            border="1px solid #fff"
            _hover={{ color: 'gray.700', bgColor: '#fff' }}
            onClick={ onOpen }
          >
            Add new portfolio
          </Button>
        </VStack>
      </VStack>
    </Center>
  )
}

export default Home
