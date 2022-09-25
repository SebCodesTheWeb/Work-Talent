import React, { useState } from 'react'
import {
  Input,
  Button,
  Stack,
  VStack,
  Heading,
  FormLabel,
} from '@chakra-ui/react'
import { FormStepProps } from './props'
import { arrayWithLength } from '../../utils'

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
    setSkills((prevSkillCount: number[]) => arrayWithLength(prevSkillCount.length + 1))
  }

  return (
    <VStack
      alignItems="start"
      w="full"
      maxH="800px"
      spacing={6}
      overflowY="scroll"
      p={4}
    >
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
            value={ values.skills[skillNumber]}
          />
        </Stack>
      ))}
      <Button onClick={addNewSkill} color="#333" p={2}>
        Add new skill
      </Button>
    </VStack>
  )
}