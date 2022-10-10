import React from 'react'
import { CompanyTag } from './CompanyTag'
import { Heading, Text, Image, AspectRatio, Stack, Box } from '@chakra-ui/react'

interface Props {
  description?: string
  title?: string
  src: string
  alt?: string
  companyName?: string
  bgColor?: string
}

export const WorkImage = ({
  description = '',
  title = '',
  src,
  alt = 'work-image',
  companyName = '',
  bgColor = 'cyan.500',
}: Props) => {
  return (
    <Stack
      spacing={{base: 3, md: 2}}
      alignItems={{ base: 'center', md: 'start' }}
      w={{ base: 'full', md: 'auto' }}
    >
      <AspectRatio ratio={4 / 3} w={{ base: 'full', md: '300px' }}>
        <Image
          src={src}
          objectFit="cover"
          alt={alt}
          borderRadius={4}
          border="1px solid #718096"
        />
      </AspectRatio>
      <Box alignSelf="start">
        <CompanyTag companyName={companyName} bgColor={bgColor} />
      </Box>
      <Heading size="md">{title}</Heading>
      <Text maxW="300px" textAlign={{ base: 'center', md: 'start' }}>
        {description}
      </Text>
    </Stack>
  )
}
