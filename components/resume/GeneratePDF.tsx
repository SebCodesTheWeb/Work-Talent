import React from 'react'
import { HStack, Heading, Icon, LinkOverlay, LinkBox } from '@chakra-ui/react'
import { SimpleButton } from '../portfolio'
import { IoDocumentOutline } from 'react-icons/io5'

export const GeneratePDF = ({ link, secondaryColor }: { link: string, secondaryColor?: string }) => {
  return (
    <LinkBox>
      <SimpleButton secondaryColor={secondaryColor}>
        <HStack>
          <LinkOverlay href={link} isExternal={true} />
          <Heading size="sm">Resume</Heading>
          <Icon as={IoDocumentOutline} className="icon" />
        </HStack>
      </SimpleButton>
    </LinkBox>
  )
}
