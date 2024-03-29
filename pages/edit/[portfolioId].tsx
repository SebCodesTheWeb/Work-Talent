import { useState, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { toPng } from 'html-to-image'
import { jsPDF } from 'jspdf'
import {
  Contact,
  Theming,
  WorkExperience,
  Education,
  Links,
  Portfolio,
  About,
  CoverLetter,
  Skills,
  WorkImages,
} from '../../components'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db, storage } from '../../firebase'
import { ref, uploadBytes, deleteObject, getDownloadURL } from 'firebase/storage'
import { Step, Steps, useSteps } from 'chakra-ui-steps'
import {
  Box,
  Switch,
  Image,
  Stack,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Input,
  Heading,
  Center,
  VStack,
  HStack,
  useDisclosure,
  LinkBox,
  LinkOverlay,
  Text,
  Button,
  Spinner,
  Flex,
  Icon,
} from '@chakra-ui/react'
import { ResumeTemplate } from '../../components/resume/ResumeTemplate'
import { Formik, Form } from 'formik'
import { arrayWithLength } from '../../utils'
import { AiFillFileAdd } from 'react-icons/ai'

const Home: NextPage = ({ portfolioData, portfolioId, imageOne, imageTwo }: any) => {
  const { nextStep, prevStep, setStep, activeStep } = useSteps({
    initialStep: 0,
  })
  const router = useRouter()
  const redirect = useRef(false)
  const [skills, setSkills] = useState(
    arrayWithLength(portfolioData.skillLength)
  )
  const [projects, setProjects] = useState(
    arrayWithLength(portfolioData.projectLength)
  )
  const [coverLetters, setCoverLetters] = useState(
    arrayWithLength(portfolioData.coverLetterLength)
  )

  const [jobs, setJobs] = useState(arrayWithLength(portfolioData.jobLength))
  const [education, setEducation] = useState(
    arrayWithLength(portfolioData.educationLength)
  )
  const [images, setImages] = useState(
    arrayWithLength(portfolioData.imageLength)
  )
  const [imageSRCS, setImageSRCS] = useState([0, 0, 0, 0, 0, 0, 0])

  const [items, setItems] = useState(portfolioData.items)

  const [mainImage, setMainImage] = useState<File | null>(imageOne)
  const [secondaryImage, setSecondaryImage] = useState<File | null>(imageTwo)
  const [primaryColor, setPrimaryColor] = useState('teal.500')
  const [secondaryColor, setSecondaryColor] = useState('purple.500')

  const [resumeVisible, setResumeVisible] = useState(false)
  const resumeRef = useRef<HTMLDivElement>(null)

  const generateImage = async (data: any) => {
    if (resumeRef.current === null) return
    const pageHeight = 297
    const imageHeight = resumeRef.current.clientHeight * (pageHeight / 3500)
    let overflowingHeight = imageHeight
    const image = await toPng(resumeRef.current, {
      quality: 0.7,
      cacheBust: true,
    })
    const doc = new jsPDF()
    let offsetY = 0
    doc.addImage(image, 'JPEG', 0, offsetY, 210, imageHeight)
    overflowingHeight -= pageHeight
    while (overflowingHeight > 0) {
      offsetY -= pageHeight
      doc.addPage()
      doc.addImage(image, 'JPEG', 0, offsetY, 210, imageHeight, undefined, 'FAST')
      overflowingHeight -= pageHeight
    }
    const docRef = ref(storage, `resumes/${data.portfolioId}-resume.pdf`)
    uploadBytes(docRef, doc.output('blob'))
    setResumeVisible(false)
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [portfolioURL, setPortfolioURL] = useState(portfolioData.portfolioURL)
  const [makePublic, setMakePublic] = useState(portfolioData.makePublic)
  const [loading, setLoading] = useState(false)
  if (loading) {
    return (
      <Center pt={4} minH="100vh" bgColor="gray.700" color="#fff" py={8}>
        <Spinner />
      </Center>
    )
  }

  const handleWebPageGeneration = (handleSubmit: any) => {
    setResumeVisible(true)
    redirect.current = true
    handleSubmit()
  }

  const renderForm = (handleChange: any, values: any) => {
    switch (activeStep) {
      case 0:
        return (
          <Contact
            handleChange={handleChange}
            values={values}
            currentStep={activeStep + 1}
          />
        )
      case 1:
        return (
          <WorkExperience
            handleChange={handleChange}
            values={values}
            currentStep={activeStep + 1}
            jobs={jobs}
            setJobs={setJobs}
          />
        )
      case 2:
        return (
          <WorkImages
            handleChange={handleChange}
            values={values}
            currentStep={activeStep + 1}
            images={images}
            setImages={setImages}
            setImageSRCS={setImageSRCS}
            imageSRCS={imageSRCS}
          />
        )
      case 3:
        return (
          <Education
            handleChange={handleChange}
            values={values}
            currentStep={activeStep + 1}
            education={education}
            setEducation={setEducation}
          />
        )
      case 4:
        return (
          <About
            handleChange={handleChange}
            values={values}
            currentStep={activeStep + 1}
          />
        )
      case 5:
        return (
          <CoverLetter
            handleChange={handleChange}
            values={values}
            currentStep={activeStep + 1}
            coverLetters={coverLetters}
            setCoverLetters={setCoverLetters}
          />
        )
      case 6:
        return (
          <Portfolio
            handleChange={handleChange}
            values={values}
            currentStep={activeStep + 1}
            projects={projects}
            setProjects={setProjects}
          />
        )
      case 7:
        return (
          <Skills
            handleChange={handleChange}
            values={values}
            currentStep={activeStep + 1}
            skills={skills}
            setSkills={setSkills}
          />
        )
      case 8:
        return (
          <Links
            handleChange={handleChange}
            values={values}
            currentStep={activeStep + 1}
          />
        )
      case 9:
        return (
          <Theming
            items={items}
            setItems={setItems}
            mainImage={mainImage}
            setMainImage={setMainImage}
            secondaryImage={secondaryImage}
            setSecondaryImage={setSecondaryImage}
            setPrimaryColor={setPrimaryColor}
            setSecondaryColor={setSecondaryColor}
            values={values}
            currentStep={activeStep + 1}
          />
        )
      case 10:
        return (
          <Stack spacing={4}>
            <Heading size="md">Portfolio Data:</Heading>
            <Text
              fontWeight="bold"
              fontSize="sm"
              whiteSpace="pre"
              fontFamily="monospace"
              maxHeight="800px"
              overflowY="scroll"
            >
              {JSON.stringify(values, null, 2)}
            </Text>
          </Stack>
        )
    }
  }

  const steps = [
    { label: 'Contact' },
    { label: 'Work' },
    { label: 'Images' },
    { label: 'Education' },
    { label: 'About Me' },
    { label: 'Cover Letter'},
    { label: 'Portfolio' },
    { label: 'Skills' },
    { label: 'Links' },
    { label: 'Customize' },
  ]

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
        <title> Work Talent </title>
      </Head>
      <VStack>
        <VStack display={{ base: 'none', '2xl': 'flex' }}>
          <LinkBox>
            <VStack>
              <NextLink href="/" passHref={true}>
                <LinkOverlay />
              </NextLink>
              <Image
                src="/img/logo_white.png"
                alt="Job-talent logo"
                w={{ base: '100px', '2xl': '150px' }}
              />
              <Heading size={{ base: 'sm', '2xl': '150px' }}>
                Work Talent
              </Heading>
            </VStack>
          </LinkBox>
          <Text as="em">
            Write <strong>your</strong> resume
          </Text>
        </VStack>
        <Formik
          initialValues={portfolioData}
          onSubmit={async (values) => {
            try {
              await setDoc(doc(db, 'portfolios', portfolioId), {
                ...values,
                skillLength: skills.length,
                projectLength: projects.length,
                jobLength: jobs.length,
                educationLength: education.length,
                imageLength: images.length,
                coverLetterLength: coverLetters.length,
                portfolioURL,
                makePublic,
                items,
                primaryColor,
                secondaryColor,
              })
              imageSRCS.forEach((imageSRC: any, index: number) => {
                if (values.images[index]) {
                  const imageRef = ref(
                    storage,
                    `images/${values.images[index].title}`
                  )
                  if (imageSRC && values.images[index].title) {
                    uploadBytes(imageRef, imageSRC).catch(() => {
                      throw new Error('upload failed')
                    })
                  }
                }
              })
              if (mainImage && typeof mainImage !== 'string') {
                uploadBytes(
                  ref(storage, `images/${portfolioId}-main-image`),
                  mainImage
                )
              } else {
                try {
                  await deleteObject(
                    ref(storage, `images/${portfolioId}-main-image`)
                  )
                } catch {
                  console.clear()
                }
              }

              if (secondaryImage && typeof secondaryImage !== 'string') {
                uploadBytes(
                  ref(storage, `images/${portfolioId}-secondary-image`),
                  secondaryImage
                )
              } else {
                try {
                  await deleteObject(
                    ref(storage, `images/${portfolioId}-secondary-image`)
                  )
                } catch {
                  console.clear()
                }
              }

              generateImage(values)
              if (redirect.current) {
                router.push(`/${portfolioURL}`)
                setLoading(true)
              }
            } catch (e) {
              console.error('Error adding document: ', e)
            }
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form>
              <VStack
                alignItems="start"
                mt={4}
                border="1px solid #fff"
                py={4}
                px={16}
                borderRadius={8}
                w={{ base: 'max-content', md: '700px' }}
                h={{ base: 'full', '2xl': '1000px' }}
                spacing={4}
              >
                <Flex
                  alignItems="center"
                  h="full"
                  gap={4}
                  overflowY="scroll"
                  pr={2}
                  pt={8}
                >
                  <Box w="200px" h="full">
                    <Steps
                      orientation="vertical"
                      activeStep={activeStep}
                      onClickStep={(step) => setStep(step)}
                    >
                      {steps.map(({ label }) => (
                        <Step label={label} key={label} color="#fff" />
                      ))}
                    </Steps>
                  </Box>
                  <Box w="350px" h="full">
                    {renderForm(handleChange, values)}
                  </Box>
                </Flex>
                <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
                  <ModalOverlay />
                  <ModalContent
                    bgColor="gray.700"
                    color="#fff"
                    border="1px solid #fff"
                  >
                    <ModalHeader>Webpage name</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Stack spacing={4}>
                        <HStack>
                          <Text fontSize="lg">https://worktalent.org/</Text>
                          <Input
                            value={portfolioURL}
                            onChange={(e) => setPortfolioURL(e.target.value)}
                          />
                        </HStack>
                        <HStack>
                          <Text>Put portfolio on worktalent public page</Text>
                          <Switch
                            value={makePublic}
                            isChecked={makePublic}
                            colorScheme="teal"
                            onChange={() =>
                              setMakePublic((prev: boolean) => !prev)
                            }
                          />
                        </HStack>
                      </Stack>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        colorScheme="teal"
                        mr={3}
                        type="submit"
                        onClick={() => handleWebPageGeneration(handleSubmit)}
                      >
                        <HStack>
                          <Text>Generate webpage</Text>
                          <Icon as={AiFillFileAdd} />
                        </HStack>
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                {activeStep === steps.length ? (
                  <Flex p={4} gap={2}>
                    <Button
                      mx="auto"
                      size="sm"
                      color="gray.700"
                      onClick={onOpen}
                    >
                      Choose Webpage name
                    </Button>
                    <Button
                      isDisabled={activeStep === 0}
                      mr={4}
                      onClick={prevStep}
                      size="sm"
                      variant="ghost"
                      _hover={{ color: 'gray.700', bgColor: '#fff' }}
                    >
                      Go Back
                    </Button>
                  </Flex>
                ) : (
                  <Flex width="100%" justify="flex-end" alignSelf="end">
                    <Button
                      isDisabled={activeStep === 0}
                      mr={4}
                      onClick={prevStep}
                      size="sm"
                      variant="ghost"
                      _hover={{ color: 'gray.700', bgColor: '#fff' }}
                    >
                      Prev
                    </Button>
                    <Button
                      size="sm"
                      onClick={nextStep}
                      type="submit"
                      variant="ghost"
                      mr={4}
                      border="1px solid #fff"
                      _hover={{ color: 'gray.700', bgColor: '#fff' }}
                    >
                      {activeStep === steps.length - 1 ? 'Check Final' : 'Next'}
                    </Button>
                  </Flex>
                )}
              </VStack>
              {resumeVisible && (
                <ResumeTemplate ref={resumeRef} data={values} />
              )}
            </Form>
          )}
        </Formik>
      </VStack>
    </Center>
  )
}

export async function getServerSideProps({ params }: any) {
  const portfolioId = params.portfolioId
  const docRef = doc(db, 'portfolios', portfolioId)
  const docSnap = await getDoc(docRef)
  const portfolioData = docSnap.exists() ? docSnap.data() : null
  let imageOne 
  try {
    imageOne = await getDownloadURL(ref(storage, `images/${portfolioId}-main-image`))
  } catch {
    imageOne = null
  }
  let imageTwo
  try {
    imageTwo = await getDownloadURL(ref(storage, `images/${portfolioId}-secondary-image`))
  } catch {
    imageTwo = null
  }

  return {
    props: {
      portfolioData,
      portfolioId,
      imageOne,
      imageTwo,
    },
  }
}

export default Home
