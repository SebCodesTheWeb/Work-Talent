import {
    Heading,
    Text,
    Center,
    VStack,
    LinkBox,
    LinkOverlay,
    HStack,
    Button,
  } from '@chakra-ui/react'
  
  export default function FiveHundred() {
    return (
      <Center h="100vh" bgColor="gray.700" color="#fff">
        <VStack spacing={8}>
          <Heading size="4xl" fontFamily="monospace">
            500
          </Heading>
          <Text textAlign="center">
            Sorry, there has been an issue with our internal server, try to come back at a later time.
          </Text>
          <LinkBox>
            <Button
              mr={4}
              size="md"
              variant="ghost"
              border="1px solid #fff"
              _hover={{ color: 'gray.700', bgColor: '#fff' }}
            >
              <HStack>
                <LinkOverlay href="/" />
                <Heading size="sm">Go to HomePage</Heading>
              </HStack>
            </Button>
          </LinkBox>
        </VStack>
      </Center>
    )
  }
  