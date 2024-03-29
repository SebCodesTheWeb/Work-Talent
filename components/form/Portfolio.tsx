import React from 'react'
import {
  Input,
  Textarea,
  Heading,
  FormLabel,
  Stack,
  Switch,
  HStack,
} from '@chakra-ui/react'
import { FormStepProps } from './types'
import { arrayWithLength } from '../../utils'
import { FormWrapper } from './FormWrapper'
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
    <FormWrapper name="portfolio" onClick={addNewProject}>
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
            Link to an image or embedded video of project
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
          <HStack>
            <FormLabel htmlFor={`portfolio[${projectNumber}].isVideo`}>
              This link embeds a video
            </FormLabel>
            <Switch
              name={`portfolio[${projectNumber}].isVideo`}
              onChange={handleChange}
              isChecked={
                values.portfolio[projectNumber]
                  ? values.portfolio[projectNumber].isVideo
                  : undefined
              }
            />
          </HStack>
            <HStack alignItems="end">
              <Stack>
                <FormLabel htmlFor={`portfolio[${projectNumber}].linkOne`}>
                  External Link one
                </FormLabel>
                <Input
                  name={`portfolio[${projectNumber}].linkOne`}
                  onChange={handleChange}
                  value={
                    values.portfolio[projectNumber]
                      ? values.portfolio[projectNumber].linkOne
                      : undefined
                  }
                />
              </Stack>
              <Stack>
                <FormLabel htmlFor={`portfolio[${projectNumber}].linkLabelOne`}>
                  The link leads to
                </FormLabel>
                <Input
                  name={`portfolio[${projectNumber}].linkLabelOne`}
                  onChange={handleChange}
                  placeholder="Facebook"
                  value={
                    values.portfolio[projectNumber]
                      ? values.portfolio[projectNumber].linkLabelOne
                      : undefined
                  }
                />
              </Stack>
            </HStack>
            <HStack alignItems="end">
              <Stack>
                <FormLabel htmlFor={`portfolio[${projectNumber}].linkTwo`}>
                  External Link two
                </FormLabel>
                <Input
                  name={`portfolio[${projectNumber}].linkTwo`}
                  onChange={handleChange}
                  value={
                    values.portfolio[projectNumber]
                      ? values.portfolio[projectNumber].linkTwo
                      : undefined
                  }
                />
              </Stack>
              <Stack>
                <FormLabel htmlFor={`portfolio[${projectNumber}].linkLabelTwo`}>
                  This link leads to
                </FormLabel>
                <Input
                  name={`portfolio[${projectNumber}].linkLabelTwo`}
                  onChange={handleChange}
                  placeholder="Facebook"
                  value={
                    values.portfolio[projectNumber]
                      ? values.portfolio[projectNumber].linkLabelTwo
                      : undefined
                  }
                />
              </Stack>
            </HStack>
        </Stack>
      ))}
    </FormWrapper>
  )
}
