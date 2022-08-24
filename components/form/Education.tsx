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

export const Education = ({ handleChange, currentStep }: FormStepProps) => {
  const [education, setEducation] = useState(arrayWithLength(1))

  const addNewEduction = () => {
    setEducation((prevEducationCount) =>
      arrayWithLength(prevEducationCount.length + 1)
    )
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
            autoFocus={ true }
          />
          <FormLabel htmlFor={`education[${educationNumber}].program`}>
            What program did you study
          </FormLabel>
          <Input
            name={`education[${educationNumber}].program`}
            onChange={handleChange}
          />
          <FormLabel htmlFor={`education[${educationNumber}].dateOfFinishing`}>
            When did you finnish school
          </FormLabel>
          <Input
            name={`education[${educationNumber}].dateOfFinishing`}
            onChange={handleChange}
          />
          <FormLabel htmlFor={`education[${educationNumber}].grade`}>
            Grades
          </FormLabel>
          <Input
            name={`education[${educationNumber}].grade`}
            onChange={handleChange}
          />
          <FormLabel htmlFor={`education[${educationNumber}].link`}>
            Other Links:
          </FormLabel>
          <Textarea
            name={`education[${educationNumber}].link`}
            onChange={handleChange}
          />
        </Stack>
      ))}
      <Button onClick={addNewEduction} color="#333" p={2}>
        Add New Education
      </Button>
    </VStack>
  )
}
