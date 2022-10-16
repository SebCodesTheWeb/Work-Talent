import { Stack, Heading, Text, Wrap } from '@chakra-ui/react'
import { PortfolioProject } from '../PortfolioProject'

export const PortfolioSection = ({ data }: any) => (
  <Stack
    spacing={8}
    alignItems="center"
    py={8}
    pb={16}
    maxW={{ base: 'full', md: '600px' }}
  >
    <span className="anchor" id="portfolio" />
    <Heading>Portfolio</Heading>
    <Text>A collection of personal projects and other work</Text>
    <Wrap spacing={4} justify="center">
      {data.portfolio.map((project: any) => (
        <PortfolioProject
          key={project.projectTitle}
          title={project.projectTitle}
          description={project.description}
          video={project.isVideo}
          src={project.image}
          alt={project.image}
          links={[project.linkOne, project.linkTwo]}
          linkTexts={[project.linkLabelOne, project.linkLabelTwo]}
        />
      ))}
    </Wrap>
  </Stack>
)
