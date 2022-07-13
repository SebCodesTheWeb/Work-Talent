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
  } from '@chakra-ui/react'

//gray.800, orange.500, green.500, cyan.500, purple.500

const man = true

export default function SebastianPortfolio() {
  
    return (
    <VStack spacing={ 8 }>
    
    <HStack w="full" justifyContent="space-between" px={ 16 } py={ 4 }>
      <LinkBox>
        <HStack>
            <LinkOverlay href="#" />
            <Text fontWeight="bold">Sebastian <em>CV</em></Text>
            <Icon as={ GrDocumentPdf } />
        </HStack>
      </LinkBox>
      <HStack fontSize="20px" spacing={ 4 } fontWeight="bold">
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

    <VStack spacing={ 4 } p={ 16 }>
      <Heading mb={ 4 }>Work Experience</Heading>
      <Tabs orientation="vertical" minWidth="600px" minHeight="300px" >
        <TabList>
          <Tab w="200px">Front End Intern</Tab>
          <Tab>Sailing Instructor</Tab>
          <Tab>Bread Delivery</Tab>
        </TabList>
        <TabPanels border="1px solid black" borderRadius="40px" p={ 4 } h="full">
          <TabPanel pt={ 0 } >
            <Stack>
             <Heading size="md">Front end Intern</Heading>
             <Text fontWeight="bold" fontSize="sm">
               <Highlight
                query="@Mediatool"
                styles={{
                  bg: 'purple.500', 
                  p: '1', 
                  borderRadius: '20', 
                  color: '#fff'
                }}
                >
                @Mediatool Malmö Sweden
               </Highlight>
              </Text>
              <Text color="gray.800" fontWeight="light" fontSize="sm">Jun 2022 - Present</Text>
              <List spacing={ 4 }>
                <ListItem>
                  <ListIcon as={ GrCheckboxSelected } />
                  Developed the UI/UX library
                </ListItem>
                <ListItem>
                  <ListIcon as={ GrCheckboxSelected } />
                  Solved various different tasks
                </ListItem>
                <ListItem>
                  <ListIcon as={ GrCheckboxSelected } />
                  Implemented the first O(-1) algorithm
                </ListItem>
              </List>
            </Stack>
          </TabPanel>
          <TabPanel pt={ 0 }>
            <Stack>
             <Heading size="md">Sailing Instructor</Heading>
             <Text fontWeight="bold" fontSize="sm">
               <Highlight
                query="@MSS"
                styles={{
                  bg: 'cyan.500', 
                  p: '1', 
                  borderRadius: '20', 
                  color: '#fff'
                }}
                >
                @MSS Malmö Sweden
               </Highlight>
              </Text>
              <Text color="gray.800" fontWeight="light" fontSize="sm">May 2019 - June 2021 </Text>
              <List spacing={ 4 }>
                <ListItem>
                  <ListIcon as={ GrCheckboxSelected } />
                  Teached houndreds of students how to sail
                </ListItem>
                <ListItem>
                  <ListIcon as={ GrCheckboxSelected } />
                  Helped with fixing boats/broken stuff
                </ListItem>
                <ListItem>
                  <ListIcon as={ GrCheckboxSelected } />
                  Helped organize events
                </ListItem>
              </List>
            </Stack>
          </TabPanel>

          <TabPanel pt={ 0 }>          
          <Stack>
             <Heading size="md">Bread Delivery</Heading>
             <Text fontWeight="bold" fontSize="sm">
               <Highlight
                query="@Nybakat UF"
                styles={{
                  bg: 'gray.500', 
                  p: '1', 
                  borderRadius: '20', 
                  color: '#fff'
                }}
                >
                @Nybakat UF Malmö Sweden
               </Highlight>
              </Text>
              <Text color="gray.800" fontWeight="light" fontSize="sm">Jan 2022 - Present</Text>
              <List spacing={ 4 }>
                <ListItem>
                  <ListIcon as={ GrCheckboxSelected } />
                  Feeding hundreds of hungry families with bread
                </ListItem>
                <ListItem>
                  <ListIcon as={ GrCheckboxSelected } />
                  Learned to keep track of time
                </ListItem>
              </List>
            </Stack>
          </TabPanel>

        </TabPanels>
      </Tabs>
    </VStack>


    </VStack>
    )
  }
