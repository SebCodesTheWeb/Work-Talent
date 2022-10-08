import React, { useContext } from 'react'
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
import { db, UserContext, promiseSignOut } from '../../firebase'
import {
  Heading,
  Spinner,
  Icon,
  SimpleGrid,
  Center,
  VStack,
  Text,
  Button,
  Image,
  HStack,
  Input,
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
  Stack,
} from '@chakra-ui/react'
import uniqid from 'uniqid'
import {
  AiFillFileAdd,
  AiOutlineEye,
  AiOutlinePlusCircle,
} from 'react-icons/ai'
import { TbEdit } from 'react-icons/tb'

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
  makePublic: false,
}

const Home: NextPage = ({ portfolios, publicPortfolios }: any) => {
  const { user } = useContext(UserContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [portfolioName, setPortfolioName] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogOut = () => {
    promiseSignOut().then(() => {
      router.push('/')
    })
  }

  const initializeUserPortfolio = async () => {
    try {
      setLoading(true)
      const portfolioId = uniqid()
      await setDoc(doc(db, 'test-users', portfolioId), {
        userId: user?.uid,
        portfolioName,
        portfolioId,
        portfolioURL: uniqid(),
        ...initialValues,
      })
      router.reload()
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    onClose()
  }

  const editPortfolio = (index: number) => {
    setLoading(true)
    router.push(`/edit/${portfolios[index].portfolioId}`)
  }

  const viewPortfolio = (index: number) => {
    setLoading(true)
    router.push(`/${portfolios[index].portfolioURL}`)
  }

  const viewPublicPortfolio = (index: number) => {
    setLoading(true)
    router.push(`/${publicPortfolios[index].portfolioURL}`)
  }

  if (loading) {
    return (
      <Center pt={4} minH="100vh" bgColor="gray.700" color="#fff" py={8}>
        <Spinner />
      </Center>
    )
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
        <VStack p={2}>
          <Image
            src="/img/logo_white.png"
            alt="Job-talent logo"
            w={{ base: '100px', '2xl': '150px' }}
          />
          <Heading size={{ base: 'sm', '2xl': '150px' }}>Job Talent</Heading>
          <Text as="em">
            Write <strong>your</strong> resume
          </Text>
          <Button
            mr={4}
            size={{ base: 'sm', '2xl': 'md' }}
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
          border="1px solid #fff"
          mt={4}
          p={16}
          borderRadius={8}
          w={{ base: 'max-content', md: '1000px', '2xl': '1200px' }}
          h={{ base: '500px', '2xl': '800px' }}
          spacing={4}
        >
          <Tabs colorScheme="#fff" variant="enclosed">
            <TabList>
              <Tab>Your Portfolios</Tab>
              <Tab>Other{"'"}s Portfolios</Tab>
            </TabList>
            <TabPanels>
              <TabPanel pt={8} p={0}>
                <Heading size={{ base: 'md', '2xl': 'lg' }}>
                  Your Portfolios:{' '}
                </Heading>
                <Text>
                  {portfolios.length === 0
                    ? "It looks like you don't have any portfolio added yet!"
                    : `Welcome  ${user?.displayName}, here you can, create, view and edit your portfolio webpages`}
                </Text>
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
                        <HStack>
                          <Text>Create</Text>
                          <Icon as={AiFillFileAdd} />
                        </HStack>
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <SimpleGrid
                  columns={4}
                  h={{ base: '200px', '2xl': '500px' }}
                  gap={16}
                  mt={8}
                  pr={16}
                  pb={4}
                  overflowY="scroll"
                >
                  {portfolios.map((portfolio: any, index: number) => (
                    <Center
                      w={{ base: '150px', '2xl': '200px' }}
                      h={{ base: '150px', '2xl': '200px' }}
                      border="1px solid #fff"
                      key={`${user?.uid}-${portfolio.portfolioName}`}
                      borderRadius={8}
                    >
                      <VStack spacing={4}>
                        <Heading
                          size={{ base: 'sm', '2xl': 'md' }}
                          textAlign="center"
                          textOverflow="wrap"
                          maxW="150px"
                        >
                          {portfolio.portfolioName}
                        </Heading>
                        <Stack>
                          <Button
                            size={{ base: 'sm', '2xl': 'md' }}
                            variant="ghost"
                            border="1px solid #fff"
                            _hover={{ color: 'gray.700', bgColor: '#fff' }}
                            onClick={() => editPortfolio(index)}
                          >
                            <HStack>
                              <Text>Edit</Text>
                              <Icon as={TbEdit} />
                            </HStack>
                          </Button>
                          <Button
                            size={{ base: 'sm', '2xl': 'md' }}
                            variant="ghost"
                            border="1px solid #fff"
                            _hover={{ color: 'gray.700', bgColor: '#fff' }}
                            onClick={() => viewPortfolio(index)}
                          >
                            <HStack>
                              <Text>View</Text>
                              <Icon as={AiOutlineEye} color="#fff" />
                            </HStack>
                          </Button>
                        </Stack>
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
                    <HStack>
                      <Text>Add new portfolio</Text>
                      <Icon as={AiOutlinePlusCircle} />
                    </HStack>
                  </Button>
                </Flex>
              </TabPanel>
              <TabPanel pt={8} p={0}>
                <Heading size={{ base: 'md', '2xl': 'lg' }}>
                  Public portfolios
                </Heading>
                <Text>
                  This are portfolios that have been generated using Job Talent
                </Text>
                <SimpleGrid
                  columns={4}
                  h={{ base: '200px', '2xl': '500px' }}
                  gap={16}
                  mt={8}
                  pr={16}
                  overflowY="scroll"
                >
                  {publicPortfolios.map((portfolio: any, index: number) => (
                    <Center
                      w={{ base: '150px', '2xl': '200px' }}
                      h={{ base: '150px', '2xl': '200px' }}
                      border="1px solid #fff"
                      key={`${uniqid()}`}
                      borderRadius={8}
                    >
                      <VStack>
                        <Heading
                          size={{ base: 'sm', '2xl': 'md' }}
                          textAlign="center"
                        >
                          {portfolio.portfolioName}
                        </Heading>
                        <Button
                          mr={4}
                          size={{ base: 'sm', '2xl': 'md' }}
                          variant="ghost"
                          border="1px solid #fff"
                          _hover={{ color: 'gray.700', bgColor: '#fff' }}
                          onClick={() => viewPublicPortfolio(index)}
                        >
                          <HStack>
                            <Text>View</Text>
                            <Icon as={AiOutlineEye} />
                          </HStack>
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

  const publicPortfolioQuery = query(
    collection(db, 'test-users'),
    where('makePublic', '==', true)
  )
  const publicPortfolioData = await getDocs(publicPortfolioQuery)
  const publicPortfolios: any[] = []
  publicPortfolioData.forEach((portfolio) =>
    publicPortfolios.push(portfolio.data())
  )
  return {
    props: {
      portfolios,
      publicPortfolios,
    },
  }
}

export default Home
