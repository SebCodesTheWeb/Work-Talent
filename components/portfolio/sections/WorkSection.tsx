import {
  Stack,
  TabList,
  TabPanels,
  TabPanel,
  VStack,
  Heading,
  Tabs,
  Tab,
} from '@chakra-ui/react'
import { ExperienceCard } from '../ExperienceCard'
import { WorkImage } from '../WorkImage'
import { isEmpty } from '../../../utils'

export const WorkSection = ({ data, images }: any) => (
  <Stack
    justify="center"
    spacing={32}
    px={{ base: 4, md: 16 }}
    w={{ base: 'full', '2xl': 'max-content' }}
    pb={8}
    pt={16}
    direction={{ base: 'column', '2xl': 'row' }}
  >
    <span className="anchor" id="work"></span>
    {!isEmpty(data.jobs) && (
      <VStack spacing={4} px={{ base: 0, md: 16 }} w="full">
        <Heading mb={4} textAlign="center">
          Work Experience
        </Heading>
        <Tabs
          orientation="horizontal"
          minWidth={{ base: '200px', md: '600px' }}
          minHeight="300px"
          maxWidth={{ base: 'full', md: 'auto' }}
        >
          <TabList pb={4} overflowX="scroll">
            {data.jobs.map((job: any) => (
              <Tab w="full" key={job.jobTitle}>
                {job.jobTitle}
              </Tab>
            ))}
          </TabList>
          <TabPanels h="90%" mt={4}>
            {data.jobs.map((job: any) => (
              <TabPanel
                p={8}
                key={job.timePeriod}
                border="1px solid black"
                borderRadius="40px"
                w="max-content"
                maxW="100%"
              >
                <ExperienceCard
                  jobTitle={job.jobTitle}
                  companyName={job.companyName}
                  location={job.workLocation}
                  date={job.timePeriod}
                  workTasks={job.achievments}
                  bgColor={data.secondaryColor}
                />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </VStack>
    )}
    {!isEmpty(images) && (
      <VStack spacing={8} alignItems="center">
        <Heading textAlign="center">Images from work </Heading>
        <Stack
          alignItems="start"
          justifyContent="center"
          spacing={4}
          direction={{ base: 'column', md: 'row' }}
          w="80vw !important"
          maxW="350px"
        >
          {data.images &&
            data.images.map(
              (image: any, index: number) =>
                image && (
                  <WorkImage
                    key={image.title}
                    title={image.title}
                    description={image.description}
                    src={images[index]}
                    alt={image.title}
                    companyName={image.context}
                    bgColor={data.primaryColor}
                  />
                )
            )}
        </Stack>
      </VStack>
    )}
  </Stack>
)
