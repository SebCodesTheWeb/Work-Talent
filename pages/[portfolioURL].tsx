import React, { useEffect, useState } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { ref, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../firebase/clientApp'
import {
  GrCheckboxSelected,
  GrLinkedin,
  GrFacebook,
  GrGithub,
  GrInstagram,
  GrYoutube,
} from 'react-icons/gr'
import { VscTriangleDown } from 'react-icons/vsc'
import { IoMailOutline } from 'react-icons/io5'
import {
  Heading,
  Text,
  Button,
  Tooltip,
  Image,
  Stack,
  VStack,
  HStack,
  Box,
  Icon,
  LinkBox,
  LinkOverlay,
  Link,
  Highlight,
  Center,
  Spinner,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  SimpleGrid,
  ListIcon,
  Wrap,
} from '@chakra-ui/react'
import {
  WorkImage,
  ExperienceCard,
  SimpleHighlight,
  PortfolioProject,
  SimpleButton,
  ExtensiveHighlight,
} from '../components'
import dynamic from 'next/dynamic'
import Head from 'next/head'
const GeneratePDF = dynamic(() => import('../components/resume/GeneratePDF'), {
  ssr: false,
})

const socialLinksEmpty = (socials: any) => {
  let empty = true
  Object.values(socials).forEach((social) => {
    if (social !== '') {
      empty = false
    }
  })
  return empty
}

function Page({ data, images }: any) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <Center pt={4} minH="100vh" bgColor="#fff" color="#333" py={8}>
        <Spinner />
      </Center>
    )
  }

  return (
    <Stack w="100vw" alignItems="center">
      <Head>
        <title>{data.firstname} Portfolio</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content={`Web portfolio and resume for ${data.firstname}, a ${data.jobTitle}`}
        />
        <meta
          name="keywords"
          content={`${data.firstname}, ${data.lastname}, ${data.jobTitle}, resume builder `}
        />
        <meta name="author" content="Sebastian Delgado" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" href="/img/logo_white.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <VStack
        spacing={{ base: 2, md: 10 }}
        id="home"
        w={{ base: '90%', md: 'full' }}
        alignItems="center"
      >
        <HStack
          w="full"
          justifyContent="space-between"
          px={16}
          py={6}
          pos="fixed"
          bgColor="#fff"
          zIndex={1}
          display={{ base: 'none', md: 'flex' }}
        >
          <GeneratePDF data={data} />
          <LinkBox>
            <Tooltip
              label="This website is powered by job-talent.org"
              display={{ base: 'none', md: 'auto' }}
            >
              <Button
                bgColor="#333"
                position="fixed"
                bottom="25px"
                right="25px"
                color="#fff"
                _hover={{}}
                w="60px"
                h="60px"
              >
                <LinkOverlay href="/" isExternal={true} />
                <Image
                  src="/img/logo_white.png"
                  alt="job-talent logo"
                  boxSize="30px"
                  objectFit="cover"
                />
              </Button>
            </Tooltip>
          </LinkBox>
          <HStack fontSize="lg" spacing={4} fontWeight="bold">
            <Link
              _hover={{ textDecoration: 'none', color: 'cyan.500' }}
              href="#home"
            >
              Home
            </Link>
            <Link
              _hover={{ textDecoration: 'none', color: 'cyan.500' }}
              href="#work"
            >
              Work
            </Link>
            <Link
              _hover={{ textDecoration: 'none', color: 'cyan.500' }}
              href="#about"
            >
              About
            </Link>
            <Link
              _hover={{ textDecoration: 'none', color: 'cyan.500' }}
              href="#portfolio"
            >
              Porfolio
            </Link>
            <Link
              _hover={{ textDecoration: 'none', color: 'cyan.500' }}
              href="#contact"
            >
              Contact
            </Link>
          </HStack>
        </HStack>

        <Stack
          pt={{ base: 2, md: 24 }}
          spacing={8}
          direction={{ base: 'column-reverse', md: 'row' }}
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Image
              src={
                data.gender === 'woman'
                  ? '/img/business-woman.svg'
                  : '/img/business-man.svg'
              }
              alt="business-person"
              boxSize={{ base: '300px', md: '600px' }}
              objectFit={data.gender === 'woman' ? 'contain' : 'cover'}
            />
          </Box>
          <Stack
            maxW="500px"
            spacing={8}
            alignItems={{ base: 'center', md: 'start' }}
          >
            <Text as="em" display={{ base: 'none', md: 'auto' }}>
              Hi nice to meet you! {data.firstname && 'My name is'}{' '}
            </Text>
            <Heading size={{ base: '2xl', md: 'xl' }} textAlign="center">
              <Highlight
                query={data.lastname}
                styles={{
                  bg: 'purple.500',
                  p: '1',
                  borderRadius: '40',
                  color: '#fff',
                }}
              >
                {`${data.firstname} ${data.lastname}`}
              </Highlight>
            </Heading>
            <Text
              fontWeight="bold"
              textAlign={{ base: 'center', md: 'start' }}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <Highlight
                query={data.jobRole ?? ''}
                styles={{
                  bg: 'cyan.500',
                  p: '1',
                  borderRadius: '20',
                  color: '#fff',
                }}
              >
                {data.aboutMe.shortDescription}
              </Highlight>
            </Text>
            <LinkBox>
              <SimpleButton>
                <HStack>
                  <LinkOverlay href="#work" />
                  <Heading size="sm">See my works</Heading>
                  <Icon as={VscTriangleDown} className="icon" />
                </HStack>
              </SimpleButton>
            </LinkBox>
          </Stack>
        </Stack>

        <Wrap justify="center" spacing={32} p={16} maxW="80%">
          <span className="anchor" id="work"></span>
          {data.jobs.length > 0 && (
            <VStack spacing={4} px={{ base: 0, md: 16 }}>
              <Heading mb={4} textAlign="center">
                Work Experience
              </Heading>
              <Tabs
                orientation="horizontal"
                minWidth={{ base: '200px', md: '600px' }}
                minHeight="300px"
                maxWidth={{ base: 'full', md: 'auto' }}
              >
                <TabList pb={4}>
                  {data.jobs.map((job: any) => (
                    <Tab w="full" key={job.jobTitle}>
                      {job.jobTitle}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels
                  border="1px solid black"
                  borderRadius="40px"
                  p={4}
                  h="90%"
                  mt={4}
                >
                  {data.jobs.map((job: any) => (
                    <TabPanel pt={0} key={job.timePeriod}>
                      <ExperienceCard
                        jobTitle={job.jobTitle}
                        companyName={job.companyName}
                        location={job.workLocation}
                        date={job.timePeriod}
                        workTasks={job.achievments}
                        bgColor="purple.500"
                      />
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </VStack>
          )}
          {data.images.length > 0 && (
            <VStack spacing={8} alignItems="center">
              <Heading textAlign="center">Images from work </Heading>
              <Stack
                alignItems="start"
                justifyContent="center"
                spacing={4}
                direction={{ base: 'column', md: 'row' }}
                w="80vw !important"
                maxW="350px"
              >
                {data.images &&
                  data.images.map(
                    (image: any, index: number) =>
                      image && (
                        <WorkImage
                          key={image.title}
                          title={image.title}
                          description={image.description}
                          src={images[index]}
                          alt={image.title}
                          companyName={image.context}
                          bgColor="cyan.500"
                        />
                      )
                  )}
              </Stack>
            </VStack>
          )}
        </Wrap>
        <Stack
          spacing={12}
          direction={{ base: 'column', md: 'row' }}
          py={{ base: 0, md: 8 }}
          alignItems="center"
        >
          <span className="anchor" id="about"></span>
          <Stack
            maxW={{ base: '90%', md: '600px' }}
            spacing={4}
            alignItems={{ base: 'center', md: 'start' }}
          >
            <Heading textAlign={{ base: 'center', md: 'start' }}>
              About me
            </Heading>
            {data.aboutMe.longDescription && (
              <Text lineHeight={7} textAlign={{ base: 'center', md: 'start' }}>
                <ExtensiveHighlight
                  text={data.aboutMe.longDescription}
                  query={data.aboutMe.highlight.split(',')}
                  fontWeight="normal"
                />
              </Text>
            )}
            <GeneratePDF data={data} />
          </Stack>
          <Image
            src={
              data.gender === 'woman'
                ? '../img/coding-woman.svg'
                : '../img/coding.svg'
            }
            objectFit="cover"
            w={{ base: '250px', md: '400px' }}
            alt="Sebastian Delgado"
          />
        </Stack>

        {data.portfolio.length > 0 && (
          <Stack
            spacing={8}
            alignItems="center"
            py={8}
            pb={16}
            maxW={{ base: 'full', md: '600px' }}
          >
            <span className="anchor" id="portfolio" />
            <Heading>Portfolio</Heading>
            <Text>A collection of personal projects and other work</Text>
            <Wrap spacing={4} justify="center">
              {data.portfolio.map((project: any) => (
                <PortfolioProject
                  key={project.projectTitle}
                  title={project.projectTitle}
                  description={project.description}
                  video={project.isVideo}
                  src={project.image}
                  alt={project.image}
                  links={[project.linkOne, project.linkTwo]}
                  linkTexts={[project.linkLabelOne, project.linkLabelTwo]}
                />
              ))}
            </Wrap>
          </Stack>
        )}

        <Stack
          spacing={4}
          border="1px solid black"
          borderRadius="40px"
          p={8}
          maxWidth={{ base: 'full', md: '900px', xl: '1000px' }}
          w="full"
          id="contact"
        >
          <Heading>Contact: </Heading>
          <Text>
            I am looking for new job opportunities! If you need a{' '}
            {data.jobs[0] ? data.jobs[0].jobTitle : 'new employee'}, I would
            love to talk.
          </Text>
          <Stack
            spacing={12}
            align="start"
            direction={{ base: 'column', md: 'row' }}
          >
            <Stack spacing={4} maxW={{ base: 'full', md: '50%' }} w="100%">
              {data.e_mail && (
                <Stack
                  justify="space-between"
                  spacing={4}
                  direction="row"
                  maxW={{ base: '200px', md: '400px' }}
                  w="full"
                >
                  <SimpleHighlight text="Mail" />
                  <Text textOverflow="wrap" maxW="90%">
                    {data.e_mail}
                  </Text>
                </Stack>
              )}
              {data.phone && (
                <Stack
                  justify="space-between"
                  direction="row"
                  maxW={{ base: '200px', md: '400px' }}
                  w="full"
                >
                  <SimpleHighlight text="Phone" />
                  <Text textOverflow="wrap" maxW="90%">
                    {data.phone}
                  </Text>
                </Stack>
              )}
              {data.location && (
                <Stack
                  justify="space-between"
                  direction="row"
                  w="full"
                  maxW={{ base: '200px', md: '400px' }}
                >
                  <SimpleHighlight text="Find me in" />
                  <Text textOverflow="wrap" maxW="90%">
                    {data.location}
                  </Text>
                </Stack>
              )}
              <LinkBox pt={4}>
                <SimpleButton>
                  <HStack>
                    <LinkOverlay href={`mailto: ${data.e_mail}`} />
                    <Heading size="sm">Contact</Heading>
                    <Icon as={IoMailOutline} className="icon" />
                  </HStack>
                </SimpleButton>
              </LinkBox>
            </Stack>
            {data.skills.length > 0 && (
              <List
                fontSize="sm"
                fontWeight="bold"
                display={{ base: 'none', md: 'inline' }}
              >
                <Text fontWeight="bold" fontSize="lg">
                  Skills:{' '}
                </Text>
                <SimpleGrid spacing={4} columns={{ base: 1, sm: 2, lg: 3, '2xl': 4 }}>
                  {data.skills.map((skill: any) => (
                    <ListItem key={skill}>
                      <ListIcon as={GrCheckboxSelected} />
                      {skill}
                    </ListItem>
                  ))}
                </SimpleGrid>
              </List>
            )}
          </Stack>
        </Stack>
        <Text
          fontWeight="bold"
          textAlign="center"
          display={{ base: 'auto', md: 'none' }}
        >
          This website is powered by job-talent
        </Text>
        <VStack
          w="100vw"
          h="300px"
          pt={32}
          pb={32}
          color="#fff"
          spacing={4}
          bgImage="../img/wave.svg"
          maxW="2700px"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="bottom"
          justifyContent="start"
        >
          {!socialLinksEmpty(data.social) && (
            <>
              <Heading display={{ base: 'none', md: 'auto' }}>Socials</Heading>
              <HStack
                align="center"
                spacing={4}
                bgColor="#fff"
                borderRadius="40px"
                color="gray.500"
                p={8}
              >
                {data.social.linkedin && (
                  <LinkBox _hover={{ color: 'cyan.500' }}>
                    <LinkOverlay
                      href={data.social.linkedin}
                      isExternal={true}
                    />
                    <Icon as={GrLinkedin} boxSize="30px" />
                  </LinkBox>
                )}
                {data.social.facebook && (
                  <LinkBox _hover={{ color: 'cyan.500' }}>
                    <LinkOverlay
                      href={data.social.facebook}
                      isExternal={true}
                    />
                    <Icon as={GrFacebook} boxSize="30px" />
                  </LinkBox>
                )}
                {data.social.instagram && (
                  <LinkBox _hover={{ color: 'cyan.500' }}>
                    <LinkOverlay
                      href={data.social.instagram}
                      isExternal={true}
                    />
                    <Icon as={GrInstagram} boxSize="30px" />
                  </LinkBox>
                )}
                {data.social.github && (
                  <LinkBox _hover={{ color: 'cyan.500' }}>
                    <LinkOverlay href={data.social.github} isExternal={true} />
                    <Icon as={GrGithub} boxSize="30px" />
                  </LinkBox>
                )}
                {data.social.youtube && (
                  <LinkBox _hover={{ color: 'cyan.500' }}>
                    <LinkOverlay href={data.social.youtube} isExternal={true} />
                    <Icon as={GrYoutube} boxSize="30px" />
                  </LinkBox>
                )}
              </HStack>
            </>
          )}
        </VStack>
      </VStack>
    </Stack>
  )
}
async function getData(portfolioURL: string) {
  const userQuery = query(
    collection(db, 'portfolios'),
    where('portfolioURL', '==', portfolioURL)
  )
  const portfolioData = await getDocs(userQuery)
  const portfolios: any[] = []
  portfolioData.forEach((portfolio) => portfolios.push(portfolio.data()))
  return portfolios[0]
}

export async function getServerSideProps({ params }: any) {
  const data = await getData(params.portfolioURL)
  if (!data) {
    return {
      notFound: true,
    }
  }
  const images = await Promise.all(
    data.images.map(async (image: any) => {
      return await getDownloadURL(ref(storage, `images/${image.title}`))
    })
  )

  return {
    props: {
      data,
      images,
    },
  }
}

export default Page
