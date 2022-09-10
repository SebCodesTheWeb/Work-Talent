import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import {
  Contact,
  WorkExperience,
  Education,
  Links,
  Portfolio,
  About,
  Skills,
} from '../components'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase/clientApp'

import { Heading, Center, VStack, HStack, Text, Button } from '@chakra-ui/react'
import { Formik, Form } from 'formik'

const Home: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => setCurrentStep((currentStep) => currentStep + 1)
  const prevFormStep = () => setCurrentStep((currentStep) => currentStep - 1)

  const lastStep = 7

  const renderForm = (handleChange: any, values: any) => {
    switch (currentStep) {
      case 1:
        return (
          <Contact
            handleChange={handleChange}
            values={values}
            currentStep={currentStep}
          />
        )
      case 2:
        return (
          <WorkExperience
            handleChange={handleChange}
            values={values}
            currentStep={currentStep}
          />
        )
      case 3:
        return (
          <Education
            handleChange={handleChange}
            values={values}
            currentStep={currentStep}
          />
        )
        break
      case 4:
        return (
          <About
            handleChange={handleChange}
            values={values}
            currentStep={currentStep}
          />
        )
      case 5:
        return (
          <Portfolio
            handleChange={handleChange}
            values={values}
            currentStep={currentStep}
          />
        )
      case 6:
        return (
          <Skills
            handleChange={handleChange}
            values={values}
            currentStep={currentStep}
          />
        )
      case 7:
        return (
          <Links
            handleChange={handleChange}
            values={values}
            currentStep={currentStep}
          />
        )
    }
  }

  return (
    <Center pt={4} minH="100vh" bgColor="gray.700" color="#fff" py={ 8 }>
      <Head>
        <title> Job-talent.org </title>
      </Head>
      <VStack>
        <VStack>
          <Heading>Job Talent</Heading>
          <Text as="em">
            Write <strong>your</strong> resume
          </Text>
        </VStack>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            location: '',
            phone: '',
            e_mail: '',
            about: '',
            image: '',
            jobRole: '',
            jobs: [],
            education: [],
            aboutMe: {
              shortDescription: '',
              longDescription: '',
            },
            portfolio: [],
            social: {
              linkedin: '',
              facebook: '',
              github: '',
              instagram: '',
              youtube: '',
              blog: '',
            },
            skills: [],
          }}
          onSubmit={async (values) => {
            try {
              await setDoc(doc(db, "test-users", values.firstname), {
                ...values,
              })
            } catch (e) {
              console.error('Error adding document: ', e)
            }
          }}
        >
          {({ values, handleChange }) => (
            <Form>
            {console.log(values)}
              <VStack
                alignItems="start"
                mt={4}
                border="1px solid #fff"
                py={4}
                px={16}
                borderRadius={8}
                w="max-content"
                spacing={4}
              >
                {renderForm(handleChange, values)}
                <HStack
                  color="gray.700"
                  justify={currentStep > 1 ? 'space-between' : 'end'}
                  w="full"
                >
                  {currentStep > 1 && (
                    <Button onClick={prevFormStep}>Back</Button>
                  )}
                  <Button type="submit">Submit</Button>
                  {currentStep < lastStep && (
                    <Button onClick={nextStep}>Next</Button>
                  )}
                </HStack>
              </VStack>
            </Form>
          )}
        </Formik>
      </VStack>
    </Center>
  )
}

export default Home
