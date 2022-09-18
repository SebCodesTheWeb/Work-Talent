import React from 'react'
import { Box, HStack, Stack, Text, Heading, Link } from '@chakra-ui/react'

export const ResumeTemplate = React.forwardRef(
  ({ data }: any, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <Box
        h="3500px"
        w="2480px"
        border="2px solid pink"
        ref={ref}
        bg="white"
        fontSize="2.75rem"
      >
        <Stack py={32} px={32} spacing={24}>
          <Box>
            <Heading fontSize="2em">
              {data.firstname} {data.lastname}{' '}
            </Heading>
            <Text color="blue.500">{data.jobRole}</Text>
          </Box>
          <HStack alignItems="start" justifyContent="space-between">
            <Stack spacing={24} w="65%">
              <Stack spacing={8}>
                <Heading fontSize="1.5em">Summary</Heading>
                <Text fontWeight="semibold">
                  {data.aboutMe.longDescription}
                  <br />
                  <Link pl={4} color="blue.500">
                    Read more: job-talent.org/{data.firstname}
                  </Link>
                </Text>
              </Stack>
              <Stack spacing={12}>
                <Heading fontSize="1.4em">Work Experience</Heading>
                <Stack spacing={16}>
                  {data.jobs?.map(
                    (job: any, index: number) =>
                      index < 3 && (
                        <Stack>
                          <Heading>{job.jobTitle}</Heading>
                          <Text color="blue.500">{job.timePeriod} </Text>
                          <Text>{job.achievments}</Text>
                        </Stack>
                      )
                  )}
                </Stack>
              </Stack>
              <Stack spacing={8}>
                <Heading fontSize="1.3em">Projects</Heading>
                <Stack spacing={16}>
                  {data.projects?.map(
                    (project: any, index: number) =>
                      index < 2 && (
                        <Text>
                          <strong>{project.projectTitle}</strong> <br />
                          {project.description}
                          <br />
                          <Link color="blue.600" pl={8}>
                            Link: {project.link}
                          </Link>
                        </Text>
                      )
                  )}
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={32}>
              <Stack spacing={8}>
                <Heading fontSize="1.1em">Contact</Heading>
                <Stack spacing={8}>
                  <Text color="blue.500">{data.phone}</Text>
                  <Text color="blue.500">{data.e_mail}</Text>
                  <Text color="blue.500">{data.social.linkedin}</Text>
                  <Text color="blue.500">{data.social.github}</Text>
                  <Text color="blue.500">{data.social.blog}</Text>
                  <Text color="blue.500">{data.social.youtube}</Text>
                </Stack>
              </Stack>
              <Stack spacing={8}>
                <Heading fontSize="1.1em">Skills</Heading>
                <Stack spacing={8}>
                  {data.skills?.map((skill: string) => (
                    <Text key={skill}>{skill}</Text>
                  ))}
                </Stack>
              </Stack>
              <Stack spacing={8}>
                <Heading fontSize="1.1em">Education</Heading>
                {data.education?.map((education: any, index: number) => (
                  <Stack spacing={8} key={`education-${index}`}>
                    <Text>{education.school}</Text>
                    <Text color="blue.500">
                      Class of {education.dateOfFinishing}
                    </Text>
                    <Text>{education.program}</Text>
                    <Text>{education.grade}</Text>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </HStack>
        </Stack>
      </Box>
    )
  }
)

ResumeTemplate.displayName = 'ResumeTemplate'
