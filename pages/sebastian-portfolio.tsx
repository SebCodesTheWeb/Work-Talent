 import { 
   GrDocumentPdf,
   GrCaretDown,
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
            styles={{bg: 'cyan.500', p: '2', borderRadius: '40', color: '#fff'}}
          >
            Sebastian Delgado 
          </Highlight>
        </Heading>
        <Text fontWeight="bold">
          <Highlight 
            query="software engineer"
            styles={{bg: 'purple.500', p: '1', borderRadius: '20', color: '#fff'}}
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

    


    </VStack>
    )
  }
