import React from 'react'
import {
  Input,
  VStack,
  Heading,
  FormLabel,
} from '@chakra-ui/react'
import { FormStepProps } from './props'

export const Links = ({ handleChange, currentStep }: FormStepProps) => (
  <VStack alignItems="start" w="full" spacing={4}>
    <Heading as="h2" size="lg">
      Step {currentStep}: Social Media && Links
    </Heading>
    <FormLabel htmlFor="social.linkedin">LinkedIn: </FormLabel>
    <Input
      name="social.linkedin"
      onChange={handleChange}
      autoFocus={ true }
    />
    <FormLabel htmlFor="social.facebook">Facebook: </FormLabel>
    <Input
      name="social.facebook"
      onChange={handleChange}
    />
    <FormLabel htmlFor="social.github">Github: </FormLabel>
    <Input
      name="social.github"
      onChange={handleChange}
    />
    <FormLabel htmlFor="social.instagram">Instagram: </FormLabel>
    <Input
      name="social.instagram"
      onChange={handleChange}
    />
    <FormLabel htmlFor="social.youtube">Youtube: </FormLabel>
    <Input
      name="social.youtube"
      onChange={handleChange}
    />
    <FormLabel htmlFor="social.blog">Blog: </FormLabel>
    <Input
      name="social.blog"
      onChange={handleChange}
    />
  </VStack>
)
