import React from 'react'
import { Box, HStack, Stack, Text, Heading, Link } from '@chakra-ui/react'
import { isEmpty } from "../../utils"

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
        zIndex={ 10}
        color="#000"
      >
        <Stack py={32} px={32} spacing={24}>
          <Box>
            <Heading fontSize="2em">
              {data.firstname} {data.lastname}{' '}
            </Heading>
            <Text color="blue.500">{data.jobRole}</Text>
          </Box>
          <HStack alignItems="start" justifyContent="space-between" spacing={8}>
            <Stack spacing={24} w="65%">
              {data.aboutMe.longDescription && (
                <Stack spacing={8}>
                  <Heading fontSize="1.5em">Summary</Heading>
                  <Text fontWeight="semibold">
                    {data.aboutMe.longDescription}
                    <br />
                    <Link pl={4} color="blue.500">
                      Read more: worktalent.org/{data.firstname}
                    </Link>
                  </Text>
                </Stack>
              )}
              {!isEmpty(data.jobs) && (
                <Stack spacing={12}>
                  <Heading fontSize="1.4em">Work Experience</Heading>
                  <Stack spacing={16}>
                    {data.jobs?.map((job: any, index: number) => (
                      <Stack key={`${job.jobTitle}-${index}`}>
                        <Heading>{job.jobTitle}</Heading>
                        <Text color="blue.500">{job.timePeriod} </Text>
                        <Text>{job.achievments}</Text>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              )}
              {!isEmpty(data.portfolio) && (
                <Stack spacing={8}>
                  <Heading fontSize="1.3em">Projects</Heading>
                  <Stack spacing={16}>
                    {data.portfolio?.map(
                      (project: any, index: number) =>
                        index < 2 && (
                          <Text key={`${project.projectTitle}-index`}>
                            <strong>{project.projectTitle}</strong> <br />
                            {project.description}
                            <br />
                            <Link color="blue.600" pl={8}>
                              Link to {project.linkLabelOne}: {project.linkOne}
                            </Link>
                          </Text>
                        )
                    )}
                  </Stack>
                </Stack>
              )}
            </Stack>
            <Stack spacing={32} w="35%">
              <Stack spacing={8}>
                <Heading fontSize="1.1em">Contact</Heading>
                <Stack spacing={8}>
                  {data.phone && <Text color="blue.500">{data.phone}</Text>}
                  {data.e_mail && <Text color="blue.500">{data.e_mail}</Text>}
                  {data.social.linkedin && (
                    <Text color="blue.500">{data.social.linkedin}</Text>
                  )}
                  {data.social.github && (
                    <Text color="blue.500">{data.social.github}</Text>
                  )}
                  {data.social.blog && (
                    <Text color="blue.500">{data.social.blog}</Text>
                  )}
                  {data.social.youtube && (
                    <Text color="blue.500">{data.social.youtube}</Text>
                  )}
                </Stack>
              </Stack>
              {!isEmpty(data.skills) && (
                <Stack spacing={8}>
                  <Heading fontSize="1.1em">Skills</Heading>
                  <Stack spacing={8}>
                    {data.skills?.map((skill: string) => (
                      <Text key={skill}>{skill}</Text>
                    ))}
                  </Stack>
                </Stack>
              )}
              {!isEmpty(data.education) && (
                <Stack spacing={8}>
                  <Heading fontSize="1.1em">Education</Heading>
                  {data.education?.map((education: any, index: number) => (
                    <Stack spacing={4} key={`education-${index}`}>
                      <Text>{education.school}</Text>
                      <Text color="blue.500">{education.dateOfFinishing}</Text>
                      <Text>{education.program}</Text>
                      <Text>Grades: {education.grade}</Text>
                    </Stack>
                  ))}
                </Stack>
              )}
            </Stack>
          </HStack>
        </Stack>
      </Box>
    )
  }
)

ResumeTemplate.displayName = 'ResumeTemplate'
