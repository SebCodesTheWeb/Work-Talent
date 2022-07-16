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

export const Portfolio = ({
    handleChange,
    values,
    currentStep,
  }: FormStepProps) => (
    <VStack alignItems="start" w="full" spacing={ 4 }>
       <Heading as="h2" size="lg">Step { currentStep }: Portfolio and Skills</Heading>
    </VStack>
  )
