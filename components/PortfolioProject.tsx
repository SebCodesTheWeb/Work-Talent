import React from 'react'

import {
    Heading,
    Button,
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
  }

export const PortfolioProject = ({
  title,
  description,
  alt,
  src,
  video=false,
  link='',
  linkText,
  }: Props) => {
      return (
        <Stack>
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
          <Heading size="md">{ title }</Heading>
          <Text>{ description }</Text>
          {link===''
          ? <Text></Text>
        : <LinkBox>
              <LinkOverlay href={ link } />
              <Button 
                maxW="300px" 
                border="2px solid #1A202C" 
                borderRadius={ 8 }
                mt={ 4 }
                bg="transparent" 
                _hover={ { bg: 'purple.500', color: '#fff', border: 'none'  } }
              >
              { linkText }
              </Button>
          </LinkBox>
          }
         

        </Stack>
      )
    }
