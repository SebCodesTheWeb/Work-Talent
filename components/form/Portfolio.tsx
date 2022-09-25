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

interface PortfolioProps extends FormStepProps {
  projects: number[]
  setProjects: any
}

export const Portfolio = ({
  handleChange,
  currentStep,
  projects,
  setProjects,
  values,
}: PortfolioProps) => {
  const addNewProject = () => {
    setProjects((prevProjectsCount: number[]) =>
      arrayWithLength(prevProjectsCount.length + 1)
    )
  }

  return (
    <VStack
      alignItems="start"
      w="full"
      maxH="800px"
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
            autoFocus={true}
            value={
              values.portfolio[projectNumber]
                ? values.portfolio[projectNumber].projectTitle
                : undefined
            }
          />
          <FormLabel htmlFor={`portfolio[${projectNumber}].description`}>
            Describe your project, goals, challenges, in under 100 words:{' '}
          </FormLabel>
          <Textarea
            name={`portfolio[${projectNumber}].description`}
            onChange={handleChange}
            placeholder="I built an app that keeps track of how many calories you've burned from a workout, built using Next JS. The main roadblock was making the app performant, which I managed by building my own simple UI library."
            value={
              values.portfolio[projectNumber]
                ? values.portfolio[projectNumber].description
                : undefined
            }
          />
          <FormLabel htmlFor={`portfolio[${projectNumber}].image`}>
            Image of project
          </FormLabel>
          <Input
            name={`portfolio[${projectNumber}].image`}
            onChange={handleChange}
            value={
              values.portfolio[projectNumber]
                ? values.portfolio[projectNumber].image
                : undefined
            }
          />
          <FormLabel htmlFor={`portfolio[${projectNumber}].link`}>
            External Link
          </FormLabel>
          <Input
            name={`portfolio[${projectNumber}].link`}
            onChange={handleChange}
            value={
              values.portfolio[projectNumber]
                ? values.portfolio[projectNumber].link
                : undefined
            }
          />
        </Stack>
      ))}
      <Button onClick={addNewProject} color="#333" p={2}>
        Add New Project
      </Button>
    </VStack>
  )
}
