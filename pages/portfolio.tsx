import { useRouter } from 'next/router'
import {
    Heading,
    Text,
    VStack,
    Stack,
    HStack,
    Box,
    Image,
  } from '@chakra-ui/react'

export default function Portfolio () {
  const router = useRouter()
  const props = router.query
  return (
    <VStack p={ 8 } >
      <HStack spacing={ 8 }>
        <Stack spacing={ 2 } maxW="500px">
          <Text as="em">Hi nice to meet you! My name is </Text>
          <Heading>{ props.firstname } { props.lastname }</Heading>
          <Text fontWeight="bold">{ props.about }</Text>
          <Stack p={ 4 } border="1px solid #333" borderRadius={ 8 }>
            <Heading size="md">Contact: </Heading> 
            <HStack>
              <Text>Phone: { props.phone }</Text>
            </HStack>
            <HStack>
              <Text>Email: { props.e_mail }</Text>
            </HStack>
            <HStack>
              <Text>Location: { props.location }</Text>
            </HStack>
          </Stack>
        </Stack>
        <Box>
        <Image 
        src={ props.image }
        alt="profile"
        objectFit="cover"
        boxSize="300px"
        />
        </Box>
      </HStack>
    </VStack>
  )
  }
