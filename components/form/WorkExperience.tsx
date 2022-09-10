import React, { useState } from 'react'
import {
  Input,
  Button,
  Textarea,
  VStack,
  Heading,
  FormLabel,
  Stack,
} from '@chakra-ui/react'
import { FormStepProps } from './props'

export const WorkExperience = ({
  handleChange,
  currentStep,
}: FormStepProps) => {
  const arrayWithLength = (length: number) =>
    Array.from({ length }, (_, i) => i)

  const [jobs, setJobs] = useState(arrayWithLength(1))

  const addNewJob = () => {
    setJobs((prevJobCount) => arrayWithLength(prevJobCount.length + 1))
  }
  return (
    <VStack
      alignItems="start"
      w="full"
      maxH="1000px"
      spacing={12}
      overflowY="scroll"
      p={4}
    >
      <Heading as="h2" size="lg">
        Step {currentStep}: Work Experience
      </Heading>
      {jobs.map((jobNumber) => (
        <Stack key={jobNumber} w="full" spacing={4}>
          <Heading size="md">Job {jobNumber + 1} </Heading>
          <FormLabel htmlFor={`jobs[${jobNumber}].timePeriod`}>
            Enter start and end date of job
          </FormLabel>
          <Input
            name={`jobs[${jobNumber}].timePeriod`}
            onChange={handleChange}
            placeholder="Ex: Jun 2017-May 2019"
            autoFocus={ true }
          />
          <FormLabel htmlFor={`jobs[${jobNumber}}.jobTitle`}>Job Title</FormLabel>
          <Input name={`jobs[${jobNumber}].jobTitle`} onChange={handleChange} />
          <FormLabel htmlFor={`jobs[${jobNumber}].companyName`}>
            Company Name
          </FormLabel>
          <Input name={`jobs[${jobNumber}].companyName`} onChange={handleChange} />
          <FormLabel htmlFor={`jobs[${jobNumber}].workLocation`}>
            {' '}
            Location of job
          </FormLabel>
          <Input
            name={`jobs[${jobNumber}].workLocation`}
            onChange={handleChange}
          />
          <FormLabel htmlFor={`jobs[${jobNumber}].achievments`}>
            Acomplishments at job and job description
          </FormLabel>
          <Textarea
            name={`jobs[${jobNumber}].achievments`}
            onChange={handleChange}
            placeholder="Ex: I worked closely with the dev team to successfully lead a marketing campain that increased sales by 30%"
          />
        </Stack>
      ))}
      <Button onClick={addNewJob} color="#333" p={2}>
        Add new job
      </Button>
    </VStack>
  )
}
