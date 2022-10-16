import { Stack, Image, Text, Heading } from '@chakra-ui/react'
import { ExtensiveHighlight } from '../ExtensiveHighlight'
import { GeneratePDF } from '../../resume'

export const AboutSection = ({ data, resumeLink, secondaryImage }: any) => (
  <Stack
    spacing={12}
    direction={{ base: 'column', md: 'row' }}
    py={{ base: 0, md: 8 }}
    alignItems="center"
    pb={{base: 16, md: 8}}
  >
    <span className="anchor" id="about"></span>
    <Stack
      maxW={{ base: '90%', md: '600px' }}
      spacing={4}
      alignItems={{ base: 'center', md: 'start' }}
    >
      <Heading textAlign={{ base: 'center', md: 'start' }}>About me</Heading>
      {data.aboutMe.longDescription && (
        <Text lineHeight={8} textAlign="start">
          <ExtensiveHighlight
            text={data.aboutMe.longDescription}
            query={data.aboutMe.highlight.split(',')}
            fontWeight="normal"
          />
        </Text>
      )}
      <GeneratePDF link={resumeLink} secondaryColor={data.secondaryColor} />
    </Stack>
    <Image
      src={
        data.gender === 'woman'
          ? '../img/coding-woman.svg'
          : secondaryImage
      }
      objectFit="cover"
      w={{ base: '250px', md: '400px' }}
      alt="Working"
    />
  </Stack>
)
