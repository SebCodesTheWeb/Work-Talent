import React from 'react'
import {
    Input,
    Textarea,
    Select,
    VStack,
    Box,
    Heading,
    FormLabel,
  } from '@chakra-ui/react'
import { FormStepProps } from './props'

export const Links = ({
    handleChange,
    values,
    currentStep,
  }: FormStepProps) => (
    <VStack alignItems="start" w="full" spacing={ 4 }>
       <Heading as="h2" size="lg">Step { currentStep }: Social Media && Links</Heading>
       <FormLabel htmlFor="social.linkedin">LinkedIn: </FormLabel>
       <Input
          name="social.linkedin"
          onChange={ handleChange }
          value={ values.social.linkedin }
        />
        <FormLabel htmlFor="social.facebook">Facebook: </FormLabel>
       <Input
          name="social.facebook"
          onChange={ handleChange }
          value={ values.social.facebook }
        />
        <FormLabel htmlFor="social.github">Github: </FormLabel>
       <Input
          name="social.github"
          onChange={ handleChange }
          value={ values.social.github }
        />
        <FormLabel htmlFor="social.instagram">Instagram: </FormLabel>
       <Input
          name="social.instagram"
          onChange={ handleChange }
          value={ values.social.instagram }
        />
        <FormLabel htmlFor="social.youtube">Youtube: </FormLabel>
       <Input
          name="social.youtube"
          onChange={ handleChange }
          value={ values.social.youtube }
        />
        <FormLabel htmlFor="social.blog">Blog: </FormLabel>
       <Input
          name="social.blog"
          onChange={ handleChange }
          value={ values.social.blog }
        />
    </VStack>

  )
