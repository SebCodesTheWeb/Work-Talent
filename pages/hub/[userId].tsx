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
  Tabs,
  Flex,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from '@chakra-ui/react'
import uniqid from 'uniqid'

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
  skillLength: 0,
  projectLength: 0,
  jobLength: 0,
  educationLength: 0,
  imageLength: 0,
  imageSRCS: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
}

const Home: NextPage = ({ portfolios, publicPortfolios }: any) => {
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
      const portfolioId = uniqid()
      await setDoc(doc(db, 'test-users', portfolioId), {
        userId: user?.uid,
        portfolioName,
        portfolioId,
        ...initialValues,
      })
      router.reload()
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    onClose()
  }

  const editPortfolio = (index: number) => {
    router.push(`/edit/${portfolios[index].portfolioId}`)
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
          <Tabs colorScheme="#fff" variant="enclosed">
            <TabList>
              <Tab>Your Portfolios</Tab>
              <Tab>Other{"'"}s Portfolios</Tab>
            </TabList>
            <TabPanels>
              <TabPanel pt={ 8 } p={ 0 } >
                <Heading>Your Portfolios: </Heading>
                <Text>{portfolios.length === 0? 'It looks like you don\'t have any portfolio added yet!' : `Welcome  ${user?.displayName}, here you can, create, view and edit your portfolio webpages`}</Text>
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
                <SimpleGrid
                  columns={4}
                  h="500px"
                  gap={16}
                  mt={ 8 }
                  pr={16}
                  overflowY="scroll"
                >
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
                <Flex w="full" alignSelf="end" justifyContent="end">
                <Button
                  mr={4}
                  size="md"
                  variant="ghost"
                  border="1px solid #fff"
                  _hover={{ color: 'gray.700', bgColor: '#fff' }}
                  onClick={onOpen}
                >
                  Add new portfolio
                </Button>
                </Flex>
              </TabPanel>
              <TabPanel pt={ 8 } p={ 0 }>
                <Heading>Public portfolios</Heading>
                <Text>This are portfolios that have been generated using Job Talent</Text>
                <SimpleGrid
                  columns={4}
                  h="500px"
                  gap={16}
                  mt={ 8 }
                  pr={16}
                  overflowY="scroll"
                >
                  {publicPortfolios.map((portfolio: any) => (
                    <Center
                      w="200px"
                      h="200px"
                      border="1px solid #fff"
                      key={`${uniqid()}`}
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
                        >
                          View
                        </Button>
                      </VStack>
                    </Center>
                  ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
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

  const publicPortfolioQuery = collection(db, 'test-users')
  const publicPortfolioData = await getDocs(publicPortfolioQuery)
  const publicPortfolios: any[] = []
  publicPortfolioData.forEach((portfolio) => publicPortfolios.push(portfolio.data()))
  return {
    props: {
      portfolios,
      publicPortfolios,
    },
  }
}

export default Home
