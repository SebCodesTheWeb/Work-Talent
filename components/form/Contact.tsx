import React from 'react'
import { Input, Heading, VStack, FormLabel, Textarea } from '@chakra-ui/react'
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

      <FormLabel htmlFor="contactInfo">Contact info text</FormLabel>
      <Textarea
        name="contactInfo"
        onChange={handleChange}
        value={values.contactInfo}
        placeholder="I am looking for new job opportunities! If you need a JOB_ROLE, I would love to talk"
      />
    </VStack>
  )
}
