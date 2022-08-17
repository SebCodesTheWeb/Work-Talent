import React from 'react'
import {
  Input,
  Textarea,
  Select,
  Heading,
  VStack,
  FormLabel,
} from '@chakra-ui/react'
import { FormStepProps } from './props'

export const Contact = ({
  handleChange,
  values,
  currentStep,
}: FormStepProps) => {
  return (
    <VStack alignItems="start" w="full" spacing={4}>
      <Heading as="h2" size="lg">
        Step {currentStep}: Basic Contact Info
      </Heading>
      <FormLabel htmlFor="firstname">First Name: </FormLabel>
      <Input name="firstname" onChange={handleChange} value={values.email} />

      <FormLabel htmlFor="lastname">Last Name: </FormLabel>
      <Input name="lastname" onChange={handleChange} value={values.email} />

      <FormLabel htmlFor="location">Continent: </FormLabel>
      <Select
        name="location"
        onChange={handleChange}
        value={values.email}
        placeholder="Select Location"
      >
        <option value="europe">Europe</option>
        <option value="north-america">North America</option>
        <option value="south-america">South America</option>
        <option value="Oceania">Oceania</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
      </Select>

      <FormLabel htmlFor="phone">Phone Number: </FormLabel>
      <Input name="phone" onChange={handleChange} value={values.email} />

      <FormLabel htmlFor="e_mail">Email Address: </FormLabel>
      <Input
        name="e_mail"
        type="email"
        onChange={handleChange}
        value={values.email}
      />

      <FormLabel htmlFor="about">
        {' '}
        Short text about yourself and job title:{' '}
      </FormLabel>
      <Textarea name="about" onChange={handleChange} value={values.email} />

      <FormLabel htmlFor="image">Paste Image URL: </FormLabel>
      <Input name="image" onChange={handleChange} value={values.email} />
    </VStack>
  )
}
