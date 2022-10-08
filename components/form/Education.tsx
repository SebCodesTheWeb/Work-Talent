import React, { useState } from 'react'
import {
  Input,
  Textarea,
  VStack,
  Heading,
  FormLabel,
  Stack,
  Button,
} from '@chakra-ui/react'
import { FormStepProps } from './props'
import { arrayWithLength } from '../../utils'

interface EducationProps extends FormStepProps {
  education: number[]
  setEducation: any
}

export const Education = ({
  handleChange,
  currentStep,
  education,
  setEducation,
  values,
}: EducationProps) => {
  const addNewEduction = () => {
    setEducation((prevEducationCount) =>
      arrayWithLength(prevEducationCount.length + 1)
    )
  }

  return (
    <VStack
      alignItems="start"
      w="full"
      maxH="800px"
      spacing={12}
      overflowY={{base: 'visible', '2xl': 'scroll'}}
      p={4}
    >
      <Heading as="h2" size="lg">
        Step {currentStep}: Education
      </Heading>
      {education.map((educationNumber) => (
        <Stack key={educationNumber} w="full" spacing={4}>
          <Heading size="md">Education {educationNumber + 1}</Heading>
          <FormLabel htmlFor={`education[${educationNumber}].school`}>
            What school did you go to?
          </FormLabel>
          <Input
            name={`education[${educationNumber}].school`}
            onChange={handleChange}
            autoFocus={true}
            value={
              values.education[educationNumber]
                ? values.education[educationNumber].school
                : undefined
            }
          />
          <FormLabel htmlFor={`education[${educationNumber}].program`}>
            What program did you study
          </FormLabel>
          <Input
            name={`education[${educationNumber}].program`}
            onChange={handleChange}
            value={
              values.education[educationNumber]
                ? values.education[educationNumber].program
                : undefined
            }
          />
          <FormLabel htmlFor={`education[${educationNumber}].dateOfFinishing`}>
            When did you finnish school
          </FormLabel>
          <Input
            name={`education[${educationNumber}].dateOfFinishing`}
            onChange={handleChange}
            value={
              values.education[educationNumber]
                ? values.education[educationNumber].dateOfFinishing
                : undefined
            }
          />
          <FormLabel htmlFor={`education[${educationNumber}].grade`}>
            Grades
          </FormLabel>
          <Input
            name={`education[${educationNumber}].grade`}
            onChange={handleChange}
            value={
              values.education[educationNumber]
                ? values.education[educationNumber].grade
                : undefined
            }
          />
          <FormLabel htmlFor={`education[${educationNumber}].link`}>
            Other Links:
          </FormLabel>
          <Textarea
            name={`education[${educationNumber}].link`}
            onChange={handleChange}
            value={
              values.education[educationNumber]
                ? values.education[educationNumber].link
                : undefined
            }
          />
        </Stack>
      ))}
      <Button
        onClick={addNewEduction}
        p={4}
        variant="ghost"
        border="1px solid #fff"
        _hover={{ color: 'gray.700', bgColor: '#fff' }}
      >
        Add New Education
      </Button>
    </VStack>
  )
}
