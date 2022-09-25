import React, { useContext, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore'
import {
  db,
  storage,
  signIn,
  signOut,
  UserContext,
  promiseSignOut,
} from '../../firebase'
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

const Home: NextPage = ({ portfolios }: any) => {
  const { user } = useContext(UserContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [portfolioName, setPortfolioName] = useState('')
  const router = useRouter()

  const handleLogOut = () => {
    promiseSignOut().then((user) => {
      router.push('/hub')
    })
  }

  const initializeUserPortfolio = async () => {
    try {
      await setDoc(doc(db, 'test-users', portfolioName), {
        userId: user?.uid,
        portfolioName,
        ...initialValues,
      })
      router.reload()
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    onClose()
  }

  const editPortfolio = (index: number) => {
    router.push(`/edit/${user?.uid}/${portfolios[index].portfolioName}`)
  }

  return (
    <Center pt={4} minH="100vh" bgColor="gray.700" color="#fff" py={8}>
      <Head>
        <title> Job-talent.org </title>
      </Head>
      <VStack>
        <VStack p={4}>
          <Image src="/img/logo_white.png" alt="Job-talent logo" w="150px" />
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
            onClick={handleLogOut}
          >
            Sign Out
          </Button>
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
          <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
            <ModalOverlay />
            <ModalContent
              bgColor="gray.700"
              color="#fff"
              border="1px solid #fff"
            >
              <ModalHeader>Portfolio Name</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  value={portfolioName}
                  onChange={(e) => setPortfolioName(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="teal"
                  mr={3}
                  onClick={initializeUserPortfolio}
                >
                  Create
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <SimpleGrid columns={4} h="500px" gap={16} py={4}>
            {portfolios.map((portfolio: any, index: number) => (
              <Center
                w="200px"
                h="200px"
                border="1px solid #fff"
                key={`${user?.uid}-${portfolio.portfolioName}`}
                borderRadius={8}
              >
                <VStack>
                  <Heading size="md">{portfolio.portfolioName}</Heading>
                  <Button
                    mr={4}
                    size="md"
                    variant="ghost"
                    border="1px solid #fff"
                    _hover={{ color: 'gray.700', bgColor: '#fff' }}
                    onClick={() => editPortfolio(index)}
                  >
                    Edit
                  </Button>
                </VStack>
              </Center>
            ))}
          </SimpleGrid>
          <Button
            alignSelf="end"
            mr={4}
            size="md"
            variant="ghost"
            border="1px solid #fff"
            _hover={{ color: 'gray.700', bgColor: '#fff' }}
            onClick={onOpen}
          >
            Add new portfolio
          </Button>
        </VStack>
      </VStack>
    </Center>
  )
}

export async function getServerSideProps({ params }: any) {
  const userId = params.userId
  const userQuery = query(
    collection(db, 'test-users'),
    where('userId', '==', userId)
  )
  const portfolioData = await getDocs(userQuery)
  const portfolios: any[] = []
  portfolioData.forEach((portfolio) => portfolios.push(portfolio.data()))
  return {
    props: {
      portfolios,
    },
  }
}

export default Home
