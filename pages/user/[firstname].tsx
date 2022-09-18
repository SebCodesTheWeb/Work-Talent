import React from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { ref, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../../firebase/clientApp'
import {
  GrCheckboxSelected,
  GrLinkedin,
  GrFacebook,
  GrGithub,
  GrInstagram,
  GrYoutube,
} from 'react-icons/gr'
import { VscTriangleDown } from 'react-icons/vsc'
import { IoDocumentOutline, IoMailOutline } from 'react-icons/io5'
import {
  Heading,
  Text,
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
  Avatar,
} from '@chakra-ui/react'
import {
  WorkImage,
  ExperienceCard,
  SimpleHighlight,
  PortfolioProject,
  SimpleButton,
} from '../../components'
import dynamic from "next/dynamic";
const GeneratePDF = dynamic(()=>import("../../components/resume/GeneratePDF"),{ssr:false});

const man = true

function Page({ data, images }: any) {
  return (
    <VStack spacing={10} id="home">
      <HStack
        w="full"
        justifyContent="space-between"
        px={16}
        py={6}
        pos="fixed"
        bgColor="#fff"
        zIndex={1}
      >
        <LinkBox>
          <SimpleButton>
            <HStack>
              <LinkOverlay href="#" />
              <Heading size="sm">Resume</Heading>
              <Icon as={IoDocumentOutline} className="icon" />
            </HStack>
          </SimpleButton>
        </LinkBox>
      <GeneratePDF data={ data }/>
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

      <HStack pt={24} spacing={8}>
        <Box>
          <Image
            src="../../business-man.svg"
            alt="business-person"
            boxSize="600px"
            objectFit={man ? 'cover' : 'contain'}
          />
        </Box>
        <Stack maxW="500px" spacing={4}>
          <Text as="em">Hi nice to meet you! My name is </Text>
          <Heading>
            <Highlight
              query={data.lastname}
              styles={{
                bg: 'cyan.500',
                p: '2',
                borderRadius: '40',
                color: '#fff',
              }}
            >
              {`${data.firstname} ${data.lastname}`}
            </Highlight>
          </Heading>
          <Text fontWeight="bold">
            <Highlight
              query={data.jobRole ?? ''}
              styles={{
                bg: 'purple.500',
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
      </HStack>

      <Wrap justify="center" spacing={16} p={16}>
        <span className="anchor" id="work"></span>
        <VStack spacing={4} px={16}>
          <Heading mb={4}>Work Experience</Heading>
          <Tabs orientation="vertical" minWidth="600px" minHeight="300px">
            <TabList>
              {data.jobs.map((job: any) => (
                <Tab w="200px" key={job.jobTitle}>
                  {job.jobTitle}
                </Tab>
              ))}
            </TabList>
            <TabPanels
              border="1px solid black"
              borderRadius="40px"
              p={4}
              h="full"
            >
              {data.jobs.map((job: any) => (
                <TabPanel pt={0} key={job.timePeriod}>
                  <ExperienceCard
                    jobTitle={job.jobTitle}
                    companyName={job.companyName}
                    location={job.workLocation}
                    date={job.timePeriod}
                    workTasks={[job.achievments]}
                    bgColor="purple.500"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </VStack>
        <VStack spacing={8}>
          <Heading>Images from work </Heading>

          <HStack alignItems="start" spacing={4}>
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
          </HStack>
        </VStack>
      </Wrap>

      <Stack spacing={12} direction="row" py={8}>
        <span className="anchor" id="about"></span>
        <Stack maxW="600px" spacing={4}>
          <Heading>About me</Heading>
          <Text lineHeight={7}>
            Hi! My name is{''}
            <SimpleHighlight
              text={`${data.firstname} ${data.lastname}`}
              fontWeight="normal"
            />
            {data.aboutMe.longDescription}
          </Text>
          <LinkBox pt={4}>
            <SimpleButton>
              <HStack>
                <LinkOverlay href="#" />
                <Heading size="sm">Resume</Heading>
                <Icon as={IoDocumentOutline} className="icon" />
              </HStack>
            </SimpleButton>
          </LinkBox>
        </Stack>
        <Image
          src="../img/coding.svg"
          objectFit="cover"
          w="400px"
          alt="Sebastian Delgado"
        />
      </Stack>

      <Stack spacing={8} alignItems="center" py={8} pb={16}>
        <span className="anchor" id="portfolio" />
        <Heading>Portfolio</Heading>
        <Text>A collection of personal projects and other work</Text>
        <Wrap spacing={4} justify="center">
          {data.portfolio.map((project: any) => (
            <PortfolioProject
              key={project.projectTitle}
              title={project.projectTitle}
              description={project.description}
              video={false}
              src={project.image}
              alt={project.image}
              link={project.link}
            />
          ))}
        </Wrap>
      </Stack>

      <Stack
        spacing={8}
        border="1px solid black"
        borderRadius="40px"
        p={8}
        minWidth="800px"
        id="contact"
      >
        <Heading>Contact: </Heading>
        <Text>
          I am looking for new job opportunities! If you need a{' '}
          {data.jobs[0] ? data.jobs[0].jobTitle : 'new employee'}, I would love
          to talk.
        </Text>
        <HStack spacing={8} align="start">
          <Stack spacing={4}>
            <HStack justify="space-between" spacing={4}>
              <SimpleHighlight text="Mail" />
              <Text>{data.e_mail}</Text>
            </HStack>
            <HStack justify="space-between">
              <SimpleHighlight text="Phone" />
              <Text>{data.phone}</Text>
            </HStack>
            <HStack justify="space-between">
              <SimpleHighlight text="Find me in" />
              <Text>{data.location}</Text>
            </HStack>
            <LinkBox pt={4}>
              <SimpleButton>
                <HStack>
                  <LinkOverlay href="mailto: sebastian.delgado@gmail.com" />
                  <Heading size="sm">Contact</Heading>
                  <Icon as={IoMailOutline} className="icon" />
                </HStack>
              </SimpleButton>
            </LinkBox>
          </Stack>
          <List fontSize="sm" fontWeight="bold">
            <Text fontWeight="bold" fontSize="lg">
              Skills:{' '}
            </Text>
            <SimpleGrid spacing={4} columns={4}>
              {data.skills.map((skill: any) => (
                <ListItem key={skill}>
                  <ListIcon as={GrCheckboxSelected} />
                  {skill}
                </ListItem>
              ))}
            </SimpleGrid>
          </List>
        </HStack>
      </Stack>
      <VStack
        w="full"
        h="300px"
        pt={32}
        pb={32}
        color="#fff"
        spacing={4}
        bgImage="../img/wave.svg"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="bottom"
      >
        {data.social.lenght > 0 && (
          <>
            <Heading>Socials</Heading>
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
                  <LinkOverlay href={data.social.linkedin} />
                  <Icon as={GrLinkedin} boxSize="30px" />
                </LinkBox>
              )}
              {data.social.facebook && (
                <LinkBox _hover={{ color: 'cyan.500' }}>
                  <LinkOverlay href={data.social.facebook} />
                  <Icon as={GrFacebook} boxSize="30px" />
                </LinkBox>
              )}
              {data.social.instagram && (
                <LinkBox _hover={{ color: 'cyan.500' }}>
                  <LinkOverlay href={data.social.instagram} />
                  <Icon as={GrInstagram} boxSize="30px" />
                </LinkBox>
              )}
              {data.social.github && (
                <LinkBox _hover={{ color: 'cyan.500' }}>
                  <LinkOverlay href={data.social.github} />
                  <Icon as={GrGithub} boxSize="30px" />
                </LinkBox>
              )}
              {data.social.youtube && (
                <LinkBox _hover={{ color: 'cyan.500' }}>
                  <LinkOverlay href={data.social.youtube} />
                  <Icon as={GrYoutube} boxSize="30px" />
                </LinkBox>
              )}
            </HStack>
          </>
        )}
      </VStack>
    </VStack>
  )
}
async function getData(firstname: string) {
  const docRef = doc(db, 'test-users', firstname)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.data()
  }
}

export async function getServerSideProps({ params }: any) {
  const data = await getData(params.firstname)
  if (!data) {
    return {
      notFound: true,
    }
  }
  const images = await Promise.all(
    data.images.map(async (image) => {
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
