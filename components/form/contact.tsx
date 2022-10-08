import React from 'react'
import { Input, Textarea, Heading, VStack, FormLabel } from '@chakra-ui/react'
import { FormStepProps } from './types'

export const Contact = ({
  handleChange,
  values,
  currentStep,
}: FormStepProps) => {
  return (
    <VStack alignItems="start" w="full" spacing={4}>
      <Heading as="h2" size="lg">
        Step {currentStep}: Contact
      </Heading>
      <FormLabel htmlFor="firstname">First Name: </FormLabel>
      <Input
        name="firstname"
        onChange={handleChange}
        value={values.firstname}
        autoFocus={true}
      />

      <FormLabel htmlFor="lastname">Last Name: </FormLabel>
      <Input name="lastname" onChange={handleChange} value={values.lastname} />

      <FormLabel htmlFor="jobRole">
        What job role are you applying for?
      </FormLabel>
      <Input name="jobRole" onChange={handleChange} value={values.jobRole} />

      <FormLabel htmlFor="location">Location/Address/City: </FormLabel>
      <Input name="location" onChange={handleChange} value={values.location} />

      <FormLabel htmlFor="phone">Phone Number: </FormLabel>
      <Input name="phone" onChange={handleChange} value={values.phone} />

      <FormLabel htmlFor="e_mail">Email Address: </FormLabel>
      <Input
        name="e_mail"
        type="email"
        onChange={handleChange}
        value={values.e_mail}
      />

      <FormLabel htmlFor="about">
        {' '}
        Short text about yourself and job title:{' '}
      </FormLabel>
      <Textarea name="about" onChange={handleChange} value={values.about} />

      <FormLabel htmlFor="image">Paste Image URL: </FormLabel>
      <Input name="image" onChange={handleChange} value={values.image} />
    </VStack>
  )
}
