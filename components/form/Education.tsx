import React from 'react'
import { Input, Textarea, Heading, FormLabel, Stack } from '@chakra-ui/react'
import { FormStepProps } from './types'
import { arrayWithLength } from '../../utils'
import { FormWrapper } from './FormWrapper'

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
    setEducation((prevEducationCount: number[]) =>
      arrayWithLength(prevEducationCount.length + 1)
    )
  }

  return (
    <FormWrapper name="education" onClick={addNewEduction}>
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
            Start and end date
          </FormLabel>
          <Input
            name={`education[${educationNumber}].dateOfFinishing`}
            placeholder="Ex: Jun 2019 - Present"
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
            placeholder="Ex: 3.2/4.0 GPA"
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
    </FormWrapper>
  )
}
