import React from 'react'
import {
  Textarea,
  VStack,
  Heading,
  FormLabel,
  Radio,
  RadioGroup,
  HStack,
} from '@chakra-ui/react'
import { FormStepProps } from './types'

export const About = ({ handleChange, values, currentStep }: FormStepProps) => (
  <VStack alignItems="start" w="full" spacing={4}>
    <Heading as="h2" size="lg">
      Step {currentStep}: About me
    </Heading>
    <FormLabel htmlFor="aboutMe.shortDescription">
      Describe your title and what you are looking for in 15-30 words
    </FormLabel>
    <Textarea
      autoFocus={true}
      name="aboutMe.shortDescription"
      onChange={handleChange}
      value={values.aboutMe.shortDescription}
      placeholder="I am a software engineer from Malmö. Looking for new opportunities to build amazing full stack apps."
    />
    <FormLabel htmlFor="aboutMe.longDescription">
      Describe yourself, your passions/hobbies and your job role in 50-150 words
    </FormLabel>
    <Textarea
      name="aboutMe.longDescription"
      onChange={handleChange}
      value={values.aboutMe.longDescription}
      placeholder="Hi, my name is Sebastian and I'm a pupil at Procivitas Privata Gymnasium. I love to code and have been glued to my keyboard since I learned my first proramming language(python) at age eleven. One of my big passions is mathematics, which I leverage in my coding abilities. I am looking to join a new role here in Malmö where I can build stunning user experiences."
    />
    <FormLabel htmlFor="gender">Gender</FormLabel>
    <RadioGroup name="gender" value={ values.gender }>
      <HStack direction="row">
        <Radio value="man" onChange={handleChange }>Man</Radio>
        <Radio value="woman" onChange={ handleChange }>Woman</Radio>
        <Radio value="non-binary" onChange={ handleChange }>Other</Radio>
      </HStack>
    </RadioGroup>
  </VStack>
)
