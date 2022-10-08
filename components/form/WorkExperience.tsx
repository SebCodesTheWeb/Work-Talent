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
import { arrayWithLength } from '../../utils'

interface WorkExperienceProps extends FormStepProps {
  jobs: number[]
  setJobs: any
}

export const WorkExperience = ({
  handleChange,
  currentStep,
  jobs,
  setJobs,
  values,
}: WorkExperienceProps) => {
  const addNewJob = () => {
    setJobs((prevJobCount) => arrayWithLength(prevJobCount.length + 1))
  }

  return (
    <VStack
      alignItems="start"
      w="full"
      spacing={12}
      maxH="800px"
      overflowY={{base: 'visible', '2xl': 'scroll'}}
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
            autoFocus={true}
            value={
              values.jobs[jobNumber]
                ? values.jobs[jobNumber].timePeriod
                : undefined
            }
          />
          <FormLabel htmlFor={`jobs[${jobNumber}}.jobTitle`}>
            Job Title
          </FormLabel>
          <Input
            name={`jobs[${jobNumber}].jobTitle`}
            onChange={handleChange}
            value={
              values.jobs[jobNumber]
                ? values.jobs[jobNumber].jobTitle
                : undefined
            }
          />
          <FormLabel htmlFor={`jobs[${jobNumber}].companyName`}>
            Company Name
          </FormLabel>
          <Input
            name={`jobs[${jobNumber}].companyName`}
            onChange={handleChange}
            value={
              values.jobs[jobNumber]
                ? values.jobs[jobNumber].companyName
                : undefined
            }
          />
          <FormLabel htmlFor={`jobs[${jobNumber}].workLocation`}>
            {' '}
            Location of job
          </FormLabel>
          <Input
            name={`jobs[${jobNumber}].workLocation`}
            onChange={handleChange}
            value={
              values.jobs[jobNumber]
                ? values.jobs[jobNumber].workLocation
                : undefined
            }
          />
          <FormLabel htmlFor={`jobs[${jobNumber}].achievments`}>
            Acomplishments at job and job description
          </FormLabel>
          <Textarea
            name={`jobs[${jobNumber}].achievments`}
            onChange={handleChange}
            placeholder="Ex: I worked closely with the dev team to successfully lead a marketing campaign that increased sales by 30%"
            value={
              values.jobs[jobNumber]
                ? values.jobs[jobNumber].achievments
                : undefined
            }
          />
        </Stack>
      ))}
      <Button
        onClick={addNewJob}
        p={4}
        variant="ghost"
        border="1px solid #fff"
        _hover={{ color: 'gray.700', bgColor: '#fff' }}
      >
        Add new job
      </Button>
    </VStack>
  )
}
