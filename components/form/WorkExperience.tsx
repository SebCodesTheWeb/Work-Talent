import React from 'react'
import {
    Input,
    Textarea,
    Select,
    VStack,
    Box,
    Heading,
    FormLabel,
  } from '@chakra-ui/react'
import { FormStepProps } from './props'

export const WorkExperience = ({
    handleChange,
    values,
    currentStep,
  }: FormStepProps) => (
    <VStack alignItems="start" w="full" spacing={ 4 }>
       <Heading as="h2" size="lg">Step { currentStep }: Work Experience</Heading>
       <FormLabel htmlFor="job1.timePeriod">Enter start and end date of job</FormLabel>
       <Input
          name="job1.timePeriod"
          onChange={ handleChange }
          value={ values.job1.timePeriod }
          placeholder="Ex: Jun 2017-May 2019"
        />
        <FormLabel htmlFor="job1.jobTitle">Job Title</FormLabel>
       <Input
          name="job1.jobTitle"
          onChange={ handleChange }
          value={ values.job1.jobTitle }
        />
        <FormLabel htmlFor="job1.companyName">Company Name</FormLabel>
       <Input
          name="job1.companyName"
          onChange={ handleChange }
          value={ values.job1.companyName }
        />
        <FormLabel htmlFor="job1.workLocation"> Location of job</FormLabel>
       <Input
          name="job1.workLocation"
          onChange={ handleChange }
          value={ values.job1.workLocation }
        />
        <FormLabel htmlFor="job1.achievments">Acomplishments at job</FormLabel>
       <Textarea
          name="job1.achievments"
          onChange={ handleChange }
          value={ values.job1.achievments }
          placeholder="Ex: Successfully lead a marketing campain that increased sales by 30%"
        />
    </VStack>

  )
