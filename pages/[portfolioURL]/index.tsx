import React, { useEffect, useState } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { ref, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../../firebase/clientApp'
import { isEmpty } from '../../utils'
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
  List,
  ListItem,
  SimpleGrid,
  ListIcon,
} from '@chakra-ui/react'
import {
  SimpleHighlight,
  SimpleButton,
  GeneratePDF,
  WorkSection,
  AboutSection,
  PortfolioSection,
} from '../../components'
import Head from 'next/head'

function Page({ data, images, resumeLink, mainImage, secondaryImage }: any) {
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
          maxWidth="2700px"
        >
          <GeneratePDF link={resumeLink} secondaryColor={data.secondaryColor} />
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
                <LinkOverlay href="/" isExternal={true} aria-label="Go to work talent"/>
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
              _hover={{ textDecoration: 'none', color: data.primaryColor }}
              href="#home"
            >
              Home
            </Link>
            <Link
              _hover={{ textDecoration: 'none', color: data.primaryColor }}
              href="#work"
            >
              Work
            </Link>
            <Link
              _hover={{ textDecoration: 'none', color: data.primaryColor }}
              href="#about"
            >
              About
            </Link>
            <Link
              _hover={{ textDecoration: 'none', color: data.primaryColor }}
              href="#portfolio"
            >
              Porfolio
            </Link>
            <Link
              _hover={{ textDecoration: 'none', color: data.primaryColor }}
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
              src={mainImage}
              alt="business-person"
              boxSize={{
                base: '300px',
                md: '550px',
                '2xl': '600px',
              }}
              objectFit={mainImage === '/img/business-man.svg' ? 'cover': 'contain'}
            />
          </Box>
          <Stack
            maxW="500px"
            spacing={8}
            alignItems={{ base: 'center', md: 'start' }}
          >
            <Text as="em" display={{ base: 'none', md: 'inherit' }}>
              Hi nice to meet you! {data.firstname && 'My name is'}{' '}
            </Text>
            <Heading
              size={{ base: '2xl', md: 'xl' }}
              textAlign={{ base: 'center', md: 'start' }}
            >
              <Highlight
                query={data.lastname}
                styles={{
                  bg: data.secondaryColor,
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
              fontSize={{ base: 'md', md: 'lg' }}
            >
              <Highlight
                query={data.jobRole ?? ''}
                styles={{
                  bg: data.primaryColor,
                  p: '1',
                  borderRadius: '20',
                  color: '#fff',
                }}
              >
                {data.aboutMe.shortDescription}
              </Highlight>
            </Text>
            <LinkBox>
              <SimpleButton secondaryColor={data.secondaryColor}>
                <HStack>
                  <LinkOverlay href="#work" aria-label="Scroll down to work section"/>
                  <Heading size="sm">See my works</Heading>
                  <Icon as={VscTriangleDown} className="icon" />
                </HStack>
              </SimpleButton>
            </LinkBox>
          </Stack>
        </Stack>

        {data.items.map((item: string, index: number) => {
          if (item === 'Work') {
            return (
              <WorkSection
                data={data}
                images={images}
                key={`${item}-${index}`}
              />
            )
          }
          if (item === 'About Me') {
            return (
              <AboutSection
                data={data}
                resumeLink={resumeLink}
                secondaryImage={secondaryImage}
                key={`${item}-${index}`}
              />
            )
          }
          if (item === 'Portfolio' && !isEmpty(data.portfolio)) {
            return <PortfolioSection data={data} key={`${item}-${index}`} />
          }
        })}

        <Stack
          spacing={4}
          border="1px solid black"
          borderRadius="40px"
          p={8}
          maxWidth={{ base: 'full', md: '900px', xl: '1200px' }}
          w={{ base: 'full', md: 'max-content' }}
          id="contact"
        >
          <Heading>Contact: </Heading>
          <Text maxW="60ch">
            {data.contactInfo ||
              `I am looking for new job opportunities! If you need a ${
                data.jobs[0] ? data.jobs[0].jobTitle : 'new employee'
              }, I would love to talk`}
          </Text>
          <Stack
            spacing={12}
            align="start"
            direction={{ base: 'column', md: 'row' }}
          >
            <Stack
              spacing={4}
              maxW={{ base: 'full', md: isEmpty(data.skills) ? 'full' : '50%' }}
              w={{ base: 'full', md: isEmpty(data.skills) ? 'full' : '50%' }}
            >
              {data.e_mail && (
                <Stack
                  justify="space-between"
                  spacing={4}
                  direction="row"
                  maxW={{
                    base: 'full',
                    md: isEmpty(data.skills) ? 'full' : '400px',
                  }}
                  w="full"
                >
                  <SimpleHighlight text="Mail" bgColor={data.primaryColor} />
                  <Text textOverflow="wrap" maxW="90%">
                    {data.e_mail}
                  </Text>
                </Stack>
              )}
              {data.phone && (
                <Stack
                  justify="space-between"
                  direction="row"
                  maxW={{
                    base: 'full',
                    md: isEmpty(data.skills) ? 'full' : '400px',
                  }}
                  w="full"
                >
                  <SimpleHighlight text="Phone" bgColor={data.primaryColor} />
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
                  maxW={{
                    base: 'full',
                    md: isEmpty(data.skills) ? 'full' : '400px',
                  }}
                >
                  <SimpleHighlight
                    text="Find me in"
                    bgColor={data.primaryColor}
                  />
                  <Text textOverflow="wrap" maxW="90%">
                    {data.location}
                  </Text>
                </Stack>
              )}
              <LinkBox pt={4}>
                <SimpleButton secondaryColor={data.secondaryColor}>
                  <HStack>
                    <LinkOverlay href={`mailto: ${data.e_mail}`} aria-label="Open mail" />
                    <Heading size="sm">Contact</Heading>
                    <Icon as={IoMailOutline} className="icon" />
                  </HStack>
                </SimpleButton>
              </LinkBox>
            </Stack>
            {!isEmpty(data.skills) && (
              <List
                fontSize="sm"
                fontWeight="bold"
                display={{ base: 'none', md: 'inline' }}
                w="full"
              >
                <Text fontWeight="bold" fontSize="lg">
                  Skills:{' '}
                </Text>
                <SimpleGrid
                  spacing={4}
                  columns={{ base: 1, sm: 2, lg: 3, '2xl': 4 }}
                >
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
          This website is powered by work-talent
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
          {!isEmpty(data.social) && (
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
                  <LinkBox _hover={{ color: data.primaryColor }}>
                    <LinkOverlay
                      href={data.social.linkedin}
                      isExternal={true}
                      aria-label="Link to Linkedin"
                    />
                    <Icon as={GrLinkedin} boxSize="30px" />
                  </LinkBox>
                )}
                {data.social.facebook && (
                  <LinkBox _hover={{ color: data.primaryColor }}>
                    <LinkOverlay
                      href={data.social.facebook}
                      isExternal={true}
                      aria-label="Link to Facebook"
                    />
                    <Icon as={GrFacebook} boxSize="30px" />
                  </LinkBox>
                )}
                {data.social.instagram && (
                  <LinkBox _hover={{ color: data.primaryColor }}>
                    <LinkOverlay
                      href={data.social.instagram}
                      isExternal={true}
                      aria-label="Link to Instagram"
                    />
                    <Icon as={GrInstagram} boxSize="30px" />
                  </LinkBox>
                )}
                {data.social.github && (
                  <LinkBox _hover={{ color: data.primaryColor }}>
                    <LinkOverlay 
                    href={data.social.github} 
                    isExternal={true} 
                    aria-label="Link to Github"
                    />
                    <Icon as={GrGithub} boxSize="30px" />
                  </LinkBox>
                )}
                {data.social.youtube && (
                  <LinkBox _hover={{ color: data.primaryColor }}>
                    <LinkOverlay 
                      href={data.social.youtube} 
                      isExternal={true} 
                      aria-label="Link to youtube "
                    />
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

  let resumeLink
  try {
    resumeLink = await getDownloadURL(
      ref(storage, `resumes/${data.portfolioId}-resume.pdf`)
    )
  } catch {
    resumeLink = '#'
  }

  let mainImage
  try {
    mainImage = await getDownloadURL(
      ref(storage, `images/${data.portfolioId}-main-image`)
    )
  } catch {
    mainImage = '/img/business-man.svg'
  }

  let secondaryImage
  try {
    secondaryImage = await getDownloadURL(
      ref(storage, `images/${data.portfolioId}-secondary-image`)
    )
  } catch {
    secondaryImage = '/img/coding.svg'
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
      resumeLink,
      mainImage,
      secondaryImage,
    },
  }
}

export default Page
