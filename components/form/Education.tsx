import React from 'react'
import { Input, Textarea, VStack, Heading, FormLabel } from '@chakra-ui/react'
import { FormStepProps } from './props'

export const Education = ({
  handleChange,
  values,
  currentStep,
}: FormStepProps) => (
  <VStack alignItems="start" w="full" spacing={4}>
    <Heading as="h2" size="lg">
      Step {currentStep}: Education
    </Heading>
    <FormLabel htmlFor="education.school">What school did you go to?</FormLabel>
    <Input
      name="education.school"
      onChange={handleChange}
      value={values.education.school}
    />
    <FormLabel htmlFor="education.program">
      What program did you study
    </FormLabel>
    <Input
      name="education.program"
      onChange={handleChange}
      value={values.education.program}
    />
    <FormLabel htmlFor="education.dateOfFinishing">
      When did you finnish school
    </FormLabel>
    <Input
      name="education.dateOfFinishing"
      onChange={handleChange}
      value={values.education.dateOfFinishing}
    />
    <FormLabel htmlFor="grades">Grades</FormLabel>
    <Input
      name="education.grades"
      onChange={handleChange}
      value={values.education.grades}
    />
    <FormLabel htmlFor="link">Other Links:</FormLabel>
    <Textarea
      name="education.link"
      onChange={handleChange}
      value={values.education.link}
    />
  </VStack>
)
