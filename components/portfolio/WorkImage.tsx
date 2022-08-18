import React from 'react'
import { CompanyTag } from './CompanyTag'

import { Heading, Text, Image, AspectRatio, Stack } from '@chakra-ui/react'

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
    <Stack spacing={2}>
      <AspectRatio ratio={4 / 3} w="300px">
        <Image
          src={src}
          objectFit="cover"
          alt={alt}
          borderRadius={4}
          border="1px solid #718096"
        />
      </AspectRatio>
      <CompanyTag companyName={companyName} bgColor={bgColor} />
      <Heading size="md">{title}</Heading>
      <Text maxW="300px">{description}</Text>
    </Stack>
  )
}
