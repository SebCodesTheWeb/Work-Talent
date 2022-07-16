import React from 'react'
import {
    Input,
    Textarea,
    Select,
    VStack,
    Box,
    Heading,
  } from '@chakra-ui/react'
import { FormStepProps } from './props'

export const WorkExperience = ({
    handleChange,
    values,
    currentStep,
  }: FormStepProps) => (
    <VStack alignItems="start" w="full" spacing={ 4 }>
       <Heading as="h2" size="lg">Step { currentStep }: Work Experience</Heading>
    </VStack>

  )
