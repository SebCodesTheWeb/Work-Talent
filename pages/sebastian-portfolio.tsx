 import { 
   GrDocumentPdf,
   GrCaretDown,
   GrCheckboxSelected,
   } from 'react-icons/gr'
 import {
    Heading,
    Text,
    Image,
    Stack,
    VStack,
    HStack,
    Center,
    Box,
    Icon,
    LinkBox,
    LinkOverlay,
    Link,
    Highlight,
    Button,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    List,
    ListItem,
    UnorderedList,
    ListIcon,
    Wrap,
  } from '@chakra-ui/react'
import { WorkImage } from '../components/workImage'
import { ExperienceCard } from '../components/ExperienceCard'
import { SimpleHighlight } from '../components/SimpleHighlight'

//gray.800, orange.500, green.500, cyan.500, purple.500

const man = true

export default function SebastianPortfolio() {
  
    return (
    <VStack spacing={ 10 } py={ 4 }>
      <HStack w="full" justifyContent="space-between" px={ 16 } py={ 4 } pos="fixed" bgColor="#fff">
        <LinkBox>
          <HStack>
              <LinkOverlay href="#" />
              <Text fontWeight="bold" fontSize="lg"><em>Resume</em></Text>
              <Icon as={ GrDocumentPdf } />
          </HStack>
        </LinkBox>
        <HStack fontSize="lg" spacing={ 4 } fontWeight="bold">
          <Link>Home</Link>
          <Link>Work</Link>
          <Link>About</Link>
          <Link>Projects</Link>
          <Link>Contact & links</Link>
        </HStack>
      </HStack>

      <HStack pt={ 20 } spacing={ 8 }>
        <Box>
          <Image 
            src="./business-man.svg" 
            alt="business-person"
            boxSize="600px"
            objectFit={ man? 'cover': 'contain' }
          />
        </Box>
        <Stack maxW="500px" spacing={ 4 }>
          <Text as="em">Hi nice to meet you! My name is </Text>
          <Heading>
            <Highlight 
              query="Delgado"
              styles={{bg: 'cyan.500', p: '2', borderRadius: '40', color: '#fff', }}
            >
              Sebastian Delgado 
            </Highlight>
          </Heading>
          <Text fontWeight="bold">
            <Highlight 
              query="software engineer"
              styles={{
                bg: 'purple.500', 
                p: '1', 
                borderRadius: '20', 
                color: '#fff'
              }}
             > 
              I am a software engineer from Malmö. Looking for new opportunities to build amazing full stack apps.
             </Highlight>
          </Text>
          <Button 
            maxW="300px" 
            border="2px solid #1A202C" 
            borderRadius={ 8 }
            bg="transparent" 
            _hover={ { bg: 'purple.500', color: '#fff', border: 'none'  } }
          >
          <HStack>
            <Heading size="sm">See my works</Heading>
            <Icon as={ GrCaretDown } />
          </HStack>
          </Button>
        </Stack>
      </HStack>
      
      <Stack direction="row" alignItems="start"  p={ 16 }>
        <VStack spacing={ 4 } px={ 16 }>
          <Heading mb={ 4 }>Work Experience</Heading>
          <Tabs orientation="vertical" minWidth="600px" minHeight="300px" >
            <TabList>
              <Tab w="200px">Front End Intern</Tab>
              <Tab>Sailing Instructor</Tab>
              <Tab>Bread Delivery</Tab>
            </TabList>
            <TabPanels border="1px solid black" borderRadius="40px" p={ 4 } h="full">
              <TabPanel pt={ 0 } >
                <ExperienceCard 
                  jobTitle="Front end Intern"
                  companyName="Mediatool"
                  location="Malmö Sweden"
                  date="Jun 2022 - Present"
                  workTasks={[
                    "Substantial work on UI/UX library",
                    "Solved various bugs",
                    "Implemented the first O(-1) algorithm" 
                  ]}
                  bgColor="purple.500"
                />
              </TabPanel>
              <TabPanel pt={ 0 }>
                <ExperienceCard
                  jobTitle="Sailing Instructor"
                  companyName="MSS"
                  location="Malmö Sweden"
                  date="May 2019 - Jun 2021"
                  workTasks={[
                    "Teached hundreds of students how to sail",
                    "Helped with fixing boats and broken stuff",
                    "Participated and helped organize events and races",
                  ]}
                  bgColor="cyan.500"
                />
              </TabPanel>

              <TabPanel pt={ 0 }>          
                <ExperienceCard
                  jobTitle="Bread Delivery"
                  companyName="Nybakat UF"
                  location="Malmö Sweden"
                  date="Jan 2022 - Present"
                  workTasks={[
                    "Feeding hundred of hungry families with bread",
                    "Learned to keep track of time",
                    "Something else",
                  ]}
                  bgColor="gray.500"
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
        <VStack spacing={ 8 }>
          <Heading>Images from work </Heading>
          <HStack alignItems="start" spacing={ 4 } >
            <WorkImage 
              title="Mediatool meeting" 
              description="We had a really fun retrospective meeting"  
              src="https://lh3.googleusercontent.com/pw/AM-JKLUManvfWSGe3LFwLRcrqOUoBcFVx10yaXF6PBYXhcJYlqdqP_rNwNrpoKOLvfhdQUkLsYNnkn08VrAImNKGTN8ZxVYeS1f92__6Ut-63x7-lT2TPEdJxXc00c83zKCe6cvktLC3qwvr0E4ZzLCEpww5=w1663-h1247-no?authuser=0" 
              alt="business-man" 
              companyName="Mediatool"
              bgColor="purple.500"
            />
            <WorkImage 
              title="Working from home" 
              description="This was my old tripple monitor setup before i switched to ultrawide"  
              src="https://sebcodestheweb.com/img/setup.jpg" 
              alt="Gaming Setup" 
              companyName="Mediatool"
              bgColor="purple.500"
            />
            <WorkImage 
              title="A day out sailing" 
              description="This was the kids fourth day of sailing on the optimist. They are doing great!"  
              src="https://iof3.idrottonline.se/globalassets/svenska-seglarforbundet-lar-dig-segla/bilder/malmo-ss-1.png" 
              alt="optimist-sailing" 
              companyName="MSS"
              bgColor="cyan.500"
            />
          </HStack>
        </VStack>  
      </Stack>
      <Stack spacing={ 12 } direction="row" pb={ 16 }>
        <Stack maxW="600px" spacing={ 4 }>
          <Heading>About me</Heading>
          <Text>
          Hi! My name is <SimpleHighlight text="Sebastian Delgado" fontWeight="normal" /> I'm a pupil at Procivitas Privata Gymnasium in Sweden where I am currently studying the natural sciences. I code webpages and software in my favourite technologies, I've always loved tech and have coded my own video games since the age of eleven 
          </Text>
          <Text>
          One of my big passions is <SimpleHighlight text="mathematics" bgColor="purple.500" fontWeight="normal" />. So often I like to code something related to math, that way I'm fully satisified! I'm currently studying single variable calculus and linear algebra at Lund University
          </Text>
        <LinkBox>
          <HStack alignItems="center" spacing={ 2 } ml={ -3 }>
            <LinkOverlay href="#" />
            <SimpleHighlight text="Resume" />
            <Icon as={ GrDocumentPdf } />
          </HStack>
        </LinkBox>
        </Stack>
        <Image 
          src="./img/coding.svg" 
          objectFit="cover"
          w="400px"
          alt="Sebastian Delgado"
        />
      </Stack>

      <Stack spacing={ 8 } border="1px solid black" borderRadius="40px" p={ 8 } >
        <Heading>Contact: </Heading>
        <Text>
        I am looking for new job opportunities! If you need a developer, I would love to talk.
        </Text>

        <HStack spacing={ 8 } align="start">
          <Stack spacing={ 2 }>
            <HStack justify="space-between" spacing={ 4 }>
              <SimpleHighlight text="mail" />
              <Text>sebastian.delgado@gmail.com</Text>
            </HStack>
            <HStack justify="space-between">
              <SimpleHighlight text="phone" />
              <Text>+4623423435</Text>
            </HStack>
            <HStack justify="space-between">
              <SimpleHighlight text="Find me in" />
              <Text>Malmö Sweden</Text>
            </HStack>
            <LinkBox>
              <LinkOverlay href="mailto:sebastian.delgado@gmail.com" />
              <Button 
                maxW="300px" 
                border="2px solid #1A202C" 
                borderRadius={ 8 }
                mt={ 4 }
                bg="transparent" 
                _hover={ { bg: 'purple.500', color: '#fff', border: 'none'  } }
              >
              Contact
              </Button>
            </LinkBox>
          </Stack>
          <List fontSize="sm" fontWeight="bold">
            <Text fontWeight="bold" fontSize="lg">Skills: </Text>
            <HStack align="start" spacing={ 4 }>
              <Stack>
                <ListItem><ListIcon as={ GrCheckboxSelected } /> React.js </ListItem>
                <ListItem><ListIcon as={ GrCheckboxSelected } />Next.js</ListItem>
                <ListItem><ListIcon as={ GrCheckboxSelected } />Node.js</ListItem>
              </Stack>
              <Stack>
                <ListItem><ListIcon as={ GrCheckboxSelected } />HTML and CSS</ListItem>
                <ListItem><ListIcon as={ GrCheckboxSelected } />TypeScript</ListItem>
                <ListItem><ListIcon as={ GrCheckboxSelected } />Git</ListItem>
              </Stack>
              <Stack>
                <ListItem><ListIcon as={ GrCheckboxSelected } />Numerical Analysis</ListItem>
                <ListItem><ListIcon as={ GrCheckboxSelected } />Chakra UI</ListItem>
                <ListItem><ListIcon as={ GrCheckboxSelected } />UI/UX Design</ListItem>
              </Stack>
            </HStack>
          </List>
        </HStack>
      </Stack>

    </VStack>
    )
  }
