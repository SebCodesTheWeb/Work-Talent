import { Stack, Text, Heading } from '@chakra-ui/react'

export const CoverLetterSection = ({coverLetter}: any) => (
  <Stack
    spacing={12}
    direction={{ base: 'column', md: 'row' }}
    py={8}
    alignItems="center"
  >
    <Stack
      maxW={{ base: '90%', md: '600px' }}
      spacing={4}
      alignItems={{ base: 'center', md: 'start' }}
    >
      <Heading textAlign={{ base: 'center', md: 'start' }}>
        {coverLetter.title  || `A special message for ${coverLetter.url}`}
      </Heading>
        <Text lineHeight={8} textAlign="start">
          {coverLetter.message}
      </Text>
    </Stack>
  </Stack>  
)
