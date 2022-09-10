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

export const Portfolio = ({ handleChange, currentStep }: FormStepProps) => {
  const [projects, setProjects] = useState(arrayWithLength(1))

  const addNewProject = () => {
    setProjects((prevProjectsCount) =>
      arrayWithLength(prevProjectsCount.length + 1)
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
        Step {currentStep}: Portfolio{' '}
      </Heading>
      {projects.map((projectNumber) => (
        <Stack key={projectNumber} w="full" spacing={4}>
          <Heading size="md">Project {projectNumber + 1} </Heading>
          <FormLabel htmlFor={`portfolio[${projectNumber}].projectTitle`}>
            Name of Project:{' '}
          </FormLabel>
          <Input
            name={`portfolio[${projectNumber}].projectTitle`}
            onChange={handleChange}
            autoFocus={ true }
          />
          <FormLabel htmlFor={`portfolio[${projectNumber}].description`}>
            Describe your project, goals, challenges, in under 100 words:{' '}
          </FormLabel>
          <Textarea
            name={`portfolio[${projectNumber}].description`}
            onChange={handleChange}
            placeholder="I built an app that keeps track of how many calories you've burned from a workout, built using Next JS. The main roadblock was making the app performant, which I managed by building my own simple UI library."
          />
          <FormLabel htmlFor={`portfolio[${projectNumber}].image`}>
            Image of project
          </FormLabel>
          <Input
            name={`portfolio[${projectNumber}].image`}
            onChange={handleChange}
          />
          <FormLabel htmlFor={`portfolio[${projectNumber}].link`}>
            External Link
          </FormLabel>
          <Input
            name={`portfolio[${projectNumber}].link`}
            onChange={handleChange}
          />
        </Stack>
      ))}
      <Button onClick={addNewProject} color="#333" p={2}>
        Add New Project
      </Button>
    </VStack>
  )
}
