import React from 'react'
import { SimpleButton } from './SimpleButton'
import { SimpleHighlight } from './SimpleHighlight'
import {
  Heading,
  Text,
  Image,
  AspectRatio,
  Stack,
  LinkBox,
  LinkOverlay,
  HStack,
  Box,
  Icon,
} from '@chakra-ui/react'
import { BiLinkExternal } from 'react-icons/bi'

interface Props {
  title: string
  description?: string
  alt?: string
  src: string
  video: boolean
  links?: string[]
  linkTexts?: string[]
  bgColor?: string
}

export const PortfolioProject = ({
  title,
  description,
  alt,
  src,
  video = false,
  links = [],
  linkTexts,
  bgColor = 'cyan.500',
}: Props) => {
  const srcWithAutplay = `${src}?autoplay=1&mute=1`
  return (
    <Stack maxW="500px" spacing={4}>
      <AspectRatio ratio={16 / 9} w={{base: 'full', md: '500px'}}>
        <Box
          display="block"
          overflow="hidden"
          borderRadius="15px"
          transform="translateZ(10px)"
          border="1px solid #718096"
        >
          {video === true ? (
            <iframe
              src={srcWithAutplay}
              title={alt}
              frameBorder="0"
              allow="
                  accelerometer; 
                  autoplay; 
                  clipboard-write; 
                  encrypted-media; 
                  gyroscope; 
                  picture-in-picture
                  "
              allowFullScreen={true}
              width="100%"
              height="100%"
            />
          ) : (
            <Image src={src} objectFit="cover" alt={alt} borderRadius={4} />
          )}
        </Box>
      </AspectRatio>
      <Heading size="md">
        <SimpleHighlight text={title} bgColor={bgColor} fontWeight="normal" />
      </Heading>
      <Text>{description}</Text>
      <HStack>
        {links.map((link: string, index: number) =>
          link === '' ? (
            <Text key={`${link}-${index}`}></Text>
          ) : (
            <LinkBox key={link}>
              <SimpleButton>
                <HStack>
                  <LinkOverlay href={link} isExternal={true} />
                  <Text>{linkTexts && linkTexts[index]}</Text>
                  <Icon as={BiLinkExternal} />
                </HStack>
              </SimpleButton>
            </LinkBox>
          )
        )}
      </HStack>
    </Stack>
  )
}
