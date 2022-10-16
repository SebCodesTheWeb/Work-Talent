import React from 'react'
import {
  Input,
  Textarea,
  Heading,
  FormLabel,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FormStepProps } from './types'
import { arrayWithLength } from '../../utils'
import { FormWrapper } from './FormWrapper'

interface CoverLetterProps extends FormStepProps {
  coverLetters: number[]
  setCoverLetters: any
}

export const CoverLetter = ({
  handleChange,
  currentStep,
  coverLetters,
  setCoverLetters,
  values,
}: CoverLetterProps) => {
  const addNewCoverLetter = () => {
    setCoverLetters((prevCoverLetterCount: number[]) =>
      arrayWithLength(prevCoverLetterCount.length + 1)
    )
  }

  return (
    <FormWrapper name="Cover letter" onClick={addNewCoverLetter}>
      <Heading as="h2" size="lg">
        Step {currentStep}: Cover Letter (optional)
      </Heading>
      <Text fontSize="sm">
        Your coverletter will be displayed as an extension of your portfolio,
        e.g. worktalent.org/YOUR_PORTFOLIO/COMPANY_NAME, would display your
        portfolio with a cover letter for COMPANY_NAME
      </Text>
      {coverLetters.map((coverLetterNumber) => (
        <Stack key={coverLetterNumber} w="full" spacing={4}>
          <Heading size="md">Cover Letter {coverLetterNumber + 1}</Heading>
          <FormLabel htmlFor={`coverLetters[${coverLetterNumber}].title`}>
            Heading
          </FormLabel>
          <Input
            name={`coverLetters[${coverLetterNumber}].title`}
            onChange={handleChange}
            placeholder="A special message for COMPANY_NAME"
            value={
              values.coverLetters[coverLetterNumber]
                ? values.coverLetters[coverLetterNumber].title
                : undefined
            }
          />
          <FormLabel htmlFor={`coverLetters[${coverLetterNumber}].message`}>
            Write cover letter
          </FormLabel>
          <Textarea
            name={`coverLetters[${coverLetterNumber}].message`}
            onChange={handleChange}
            placeholder="I was most excited, when I heard that ABC Technoligies where hiring for a new engineer. I have been following the company for a long time, and I'm a proud owner of several of your products. I think I can contribute with XYZ..."
            autoFocus={true}
            value={
              values.coverLetters[coverLetterNumber]
                ? values.coverLetters[coverLetterNumber].message
                : undefined
            }
          />
          <FormLabel htmlFor={`coverLetters[${coverLetterNumber}].url`}>
            Meant for (company name)
          </FormLabel>
          <Input
            name={`coverLetters[${coverLetterNumber}].url`}
            onChange={handleChange}
            value={
              values.coverLetters[coverLetterNumber]
                ? values.coverLetters[coverLetterNumber].url
                : undefined
            }
          />
        </Stack>
      ))}
    </FormWrapper>
  )
}
