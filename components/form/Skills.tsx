import React from 'react'
import { Input, Stack, Heading, FormLabel } from '@chakra-ui/react'
import { FormStepProps } from './types'
import { arrayWithLength } from '../../utils'
import { FormWrapper } from './FormWrapper'

interface SkillsProps extends FormStepProps {
  skills: number[]
  setSkills: any
}

export const Skills = ({
  handleChange,
  currentStep,
  skills,
  values,
  setSkills,
}: SkillsProps) => {
  const addNewSkill = () => {
    setSkills((prevSkillCount: number[]) =>
      arrayWithLength(prevSkillCount.length + 1)
    )
  }

  return (
    <FormWrapper name="skill" onClick={addNewSkill} spacing={ 4 }>
      <Heading as="h2" size="lg">
        Step {currentStep}: Skills
      </Heading>
      {skills.map((skillNumber) => (
        <Stack key={skillNumber} w="full" spacing={2}>
          <FormLabel htmlFor={`skills[${skillNumber}]`}>
            Skill {skillNumber + 1}:{' '}
          </FormLabel>
          <Input
            autoFocus={true}
            name={`skills[${skillNumber}]`}
            onChange={handleChange}
            value={values.skills[skillNumber]}
          />
        </Stack>
      ))}
    </FormWrapper>
  )
}
