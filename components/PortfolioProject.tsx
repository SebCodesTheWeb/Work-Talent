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
  } from '@chakra-ui/react'

interface Props {
    title: string;
    description?: string;
    alt?: string;
    src: string;
    video: boolean;
    link?: string;
    linkText?: string;
    bgColor?: string;
  }

export const PortfolioProject = ({
  title,
  description,
  alt,
  src,
  video=false,
  link='',
  linkText,
  bgColor='cyan.500',
  }: Props) => {
      return (
        <Stack maxW="500px" spacing={ 4 }>
          <AspectRatio ratio={ 16 / 9} w="500px" border="1px solid black" borderRadius="10px">
            {video === true
            ?<iframe
              title={ alt }
              src={ src }
              allowFullScreen={ true }
              />
            :<Image 
              src={ src } 
              objectFit="cover" 
              alt={ alt} 
              borderRadius={ 4 }
              />
            }
          </AspectRatio>
          <Heading size="md">
            <SimpleHighlight text={ title } bgColor={ bgColor } fontWeight="normal"/>
          </Heading>
          <Text>{ description }</Text>
          {link===''
          ? <Text></Text>
        : <LinkBox>
              <LinkOverlay href={ link } />
              <SimpleButton>{ linkText }</SimpleButton>
          </LinkBox>
          }
         

        </Stack>
      )
    }
