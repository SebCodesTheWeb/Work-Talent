import type { NextPage } from 'next'
import Link from 'next/link'
import {
  Heading,
  Center,
  VStack,
  Input,
  Text,
  Box,
  Select,
  Textarea,
} from '@chakra-ui/react'
import { Formik } from 'formik'

const Home: NextPage = () => {
  return (
    <Center pt={4} h="100vh" bgColor="#333" color="#fff">
      <VStack>
        <VStack>
          <Heading>Work Talent</Heading>
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
            eMail: '',
            about: '',
            image: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false)
            }, 400)
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <VStack
                alignItems="start"
                mt={4}
                border="1px solid #fff"
                py={4}
                px={16}
                borderRadius={8}
                width="600px"
                spacing={4}
              >
                <Heading as="h2" size="lg">
                  Step 1: Basic Contact Info
                </Heading>

                <label htmlFor="firstname">First Name: </label>
                <Input
                  name="firstname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eMail}
                />

                <label htmlFor="lastname">Last Name: </label>
                <Input
                  name="lastname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eMail}
                />

                <label htmlFor="location">Continent: </label>
                <Select
                  name="location"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eMail}
                  placeholder="Select Location"
                >
                  <option value="europe">Europe</option>
                  <option value="north-america">North America</option>
                  <option value="south-america">South America</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Asia">Asia</option>
                  <option value="Africa">Africa</option>
                </Select>

                <label htmlFor="phone">Phone Number: </label>
                <Input
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eMail}
                />

                <label htmlFor="e_mail">Email Address: </label>
                <Input
                  name="e_mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eMail}
                />

                <label htmlFor="about">
                  {' '}
                  Short text about yourself and job title:{' '}
                </label>
                <Textarea
                  name="about"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eMail}
                />

                <label htmlFor="image">Paste Image URL: </label>
                <Input
                  name="image"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eMail}
                />
                <Box border="1px solid #fff" p={2} borderRadius={8}>
                  <Link
                    type="submit"
                    href={{ pathname: '/portfolio', query: { ...values } }}
                  >
                    Submit
                  </Link>
                </Box>
              </VStack>
            </form>
          )}
        </Formik>
      </VStack>
    </Center>
  )
}

export default Home
