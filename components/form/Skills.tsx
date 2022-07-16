import React from 'react'
import {
    Input,
    Textarea,
    Select,
    VStack,
    Box,
    Heading,
    FormLabel
  } from '@chakra-ui/react'
import { FormStepProps } from './props'

export const Skills = ({
    handleChange,
    values,
    currentStep,
  }: FormStepProps) => (
    <VStack alignItems="start" w="full" spacing={ 4 }>
       <Heading as="h2" size="lg">Step { currentStep }: Portfolio and Skills</Heading>
       <FormLabel htmlFor="skills">Skill 1: </FormLabel>
       <Input
          name="skills"
          onChange={ handleChange }
          value={ values.skills }
        />
    </VStack>
  )
