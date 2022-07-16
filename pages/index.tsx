import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { FormStepsCard } from '../components/form/FormStepsCard'
import { Contact } from '../components/form/contact'
import { WorkExperience } from '../components/form/WorkExperience'
import { Education } from '../components/form/Education'
import { Links } from '../components/form/Links'
import { Portfolio } from '../components/form/Portfolio'
import { About } from '../components/form/About'
import { Skills } from '../components/form/Skills'


import { 
  Heading,
  Center,
  VStack,
  HStack,
  Input,
  Text,
  Box,
  Button,
  Select,
  Textarea,
} from '@chakra-ui/react'
import { Formik, Form } from 'formik'

const Home: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => setCurrentStep((currentStep) => currentStep + 1)
  const prevFormStep = () => setCurrentStep((currentStep) => currentStep - 1)

  const lastStep = 7

  const renderForm = (handleChange: any, values: any) => {
    switch(currentStep) {
        case 1:
          return <Contact handleChange={ handleChange } values={ values } currentStep={ currentStep }/>
          break;
        case 2:
          return <WorkExperience handleChange={ handleChange } values={ values } currentStep={ currentStep }/>
          break;
        case 3:
          return <Education handleChange={ handleChange } values={ values } currentStep={ currentStep }/>
          break;
        case 4:
          return <About handleChange={ handleChange } values={ values } currentStep={ currentStep }/>
          break;
        case 5:
          return <Portfolio handleChange={ handleChange } values={ values } currentStep={ currentStep }/>
          break;
        case 6: 
          return <Skills handleChange={ handleChange } values={ values } currentStep={ currentStep }/>
        case 7:
          return <Links handleChange={ handleChange } values={ values } currentStep={ currentStep }/>
          break;
      }
  } 
  
  return (
    <Center pt={ 4 } h='100vh' bgColor="gray.700" color="#fff" >
      <Head>
        <title> Job-talent.org </title>
      </Head>
      <VStack>
        <VStack>
          <Heading >Job Talent</Heading>
          <Text as="em">Write <strong>your</strong> resume</Text>
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
         job1: {
            timePeriod: 'test',
            jobTitle: '',
            companyName: '',
            workLocation: '',
            achievments: '',
           },
         education: {
             school: '',
             program: '',
             dateOfFinishing: '',
             grades: '',
             link: '',
           },
         aboutMe: {
             shortDescription: '',
             longDescription: '',
           },
         portfolio: {
             image: '',
             link: '',
             projectTitle: '',
             description: '',
           },
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
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           setSubmitting(false)
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <Form>
           <VStack 
           alignItems="start" 
           mt={ 4 } 
           border="1px solid #fff" 
           py={ 4 } 
           px={ 16 }
           borderRadius={ 8 }
           w="600px"
           spacing={ 4 }
           >
            { renderForm(handleChange, values) }
            <HStack color="gray.700" justify={ currentStep > 1? "space-between" : "end" } w="full">
              { currentStep > 1 && (
                <Button onClick={ prevFormStep }>Back</Button>
              )}
              { currentStep === lastStep && console.log(currentStep)
               ?(
               <Button>
                 <Link type="submit" href={
                 { pathname: '/portfolio',
                 query: {...values},
                 }}>
                   Submit
                 </Link>
                </Button>
               )
               :(
                 <Button onClick={ nextStep }>Next</Button>
               ) 
              }
              
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
