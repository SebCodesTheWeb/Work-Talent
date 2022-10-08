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

export default function FourOhFour() {
  return (
    <Center h="100vh" bgColor="gray.700" color="#fff">
      <VStack spacing={8}>
        <Heading size="4xl" fontFamily="monospace">
          404
        </Heading>
        <Text>
          Sorry, the portfolio you are looking for seems to be missing, check
          for valid URL?
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
