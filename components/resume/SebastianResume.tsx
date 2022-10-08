import React from 'react'
import { Box, HStack, Stack, Text, Heading, Link } from '@chakra-ui/react'

export const SebastianResume = React.forwardRef((ref) => {
  return (
    <Box
      h="3500px"
      w="2480px"
      border="2px solid pink"
      ref={ref as any}
      bg="white"
      fontSize="2.75rem"
    >
      <Stack py={32} px={32} spacing={24}>
        <Box>
          <Heading fontSize="2em">Sebastian Delgado</Heading>
          <Text color="blue.500">Software Engineer</Text>
        </Box>
        <HStack alignItems="start" justifyContent="space-between">
          <Stack spacing={24} w="65%">
            <Stack spacing={8}>
              <Heading fontSize="1.5em">Summary</Heading>
              <Text fontWeight="semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                pariatur quae odit animi rem ducimus, ullam cumque atque eaque
                similique, voluptate impedit debitis inventore facere amet esse.
                Minima inventore minus error ab magni, quisquam dolorem
                architecto fuga numquam saepe! Facere inventore atque
                reprehenderit laudantium totam odit autem unde quos officiis.
                <br />
              <Link pl={ 4 } color="blue.500">Read more: job-talent.org/sebastian-delgado</Link>
              </Text>
            </Stack>
            <Stack spacing={12}>
              <Heading fontSize="1.4em">Work Experience</Heading>
              <Stack spacing={16}>
                <Stack>
                  <Heading>Software Engineer</Heading>
                  <Text color="blue.500"> JAN 2021 - JUNE 2022</Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos fuga reprehenderit nisi, quos quod suscipit
                    laboriosam quae! Saepe, explicabo doloribus!
                  </Text>
                </Stack>
                <Stack>
                  <Heading>Software Engineer</Heading>
                  <Text color="blue.500"> JAN 2021 - JUNE 2022</Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos fuga reprehenderit nisi, quos quod suscipit
                    laboriosam quae! Saepe, explicabo doloribus!
                  </Text>
                </Stack>
                <Stack>
                  <Heading>Software Engineer</Heading>
                  <Text color="blue.500"> JAN 2021 - JUNE 2022</Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos fuga reprehenderit nisi, quos quod suscipit
                    laboriosam quae! Saepe, explicabo doloribus!
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={8}>
              <Heading fontSize="1.3em">Projects</Heading>
              <Stack spacing={16}>
                <Text>
                  <strong>Neline</strong> <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae quis provident consectetur quae ducimus fuga
                  dolorem iste assumenda sequi vitae. leijfaliejföaliej fa.
                  <br />
                  <Link color="blue.600" pl={8}>
                    Link: https://fjaelfijejflaij.com
                  </Link>
                </Text>
                <Text>
                  <strong>Neline</strong> <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae quis provident consectetur quae ducimus fuga
                  dolorem iste assumenda sequi vitae. leijfaliejföaliej fa.
                  <br />
                  <Link color="blue.600" pl={8}>
                    Link: https://fjaelfijejflaij.com
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={32}>
            <Stack spacing={8}>
              <Heading fontSize="1.1em">Contact</Heading>
              <Stack spacing={8}>
                <Text color="blue.500">+4732739427</Text>
                <Text color="blue.500">lajief@fliaje.com</Text>
                <Text color="blue.500">github.com/lfjaeij</Text>
                <Text color="blue.500">Linkedinjföailej</Text>
              </Stack>
            </Stack>
            <Stack spacing={8}>
              <Heading fontSize="1.1em">Skills</Heading>
              <Stack spacing={8}>
                <Text>aliefjl</Text>
                <Text>aliefjl</Text>
                <Text>aliefjl</Text>
                <Text>aliefjl</Text>
                <Text>aliefjl</Text>
                <Text>aliefjl</Text>
                <Text>aliefjl</Text>
              </Stack>
            </Stack>
            <Stack spacing={8}>
              <Heading fontSize="1.1em">Education</Heading>
              <Stack spacing={8}>
                <Text>Stanford University </Text>
                <Text color="blue.500">JAN 2018 - JUNE 2021</Text>
                <Text>Computer Science</Text>
              </Stack>
            </Stack>
          </Stack>
        </HStack>
      </Stack>
    </Box>
  )
})

SebastianResume.displayName = 'SebastianResume'
