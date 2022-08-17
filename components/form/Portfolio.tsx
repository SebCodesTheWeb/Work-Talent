import React from 'react'
import {
  Input,
  Textarea,
  VStack,
  Heading,
  FormLabel,
} from '@chakra-ui/react'
import { FormStepProps } from './props'

export const Portfolio = ({
  handleChange,
  values,
  currentStep,
}: FormStepProps) => (
  <VStack alignItems="start" w="full" spacing={4}>
    <Heading as="h2" size="lg">
      Step {currentStep}: Portfolio{' '}
    </Heading>
    <FormLabel htmlFor="portfolio.projectTitle">Name of Project: </FormLabel>
    <Input
      name="portfolio.projectTitle"
      onChange={handleChange}
      value={values.portfolio.projectTitle}
    />
    <FormLabel htmlFor="portfolio.description">
      Describe your project, goals, challenges, in under 100 words:{' '}
    </FormLabel>
    <Textarea
      name="portfolio.description"
      onChange={handleChange}
      value={values.portfolio.description}
      placeholder="I built an app that keeps track of how many calories you've burned from a workout, built using Next JS. The main roadblock was making the app performant, which I managed by building my own simple UI library."
    />
    <FormLabel htmlFor="image">Image of project</FormLabel>
    <Input
      name="portfolio.image"
      onChange={handleChange}
      value={values.portfolio.image}
    />
    <FormLabel htmlFor="portfolio.link">External Link</FormLabel>
    <Input
      name="portfolio.link"
      onChange={handleChange}
      value={values.portfolio.link}
    />
  </VStack>
)
