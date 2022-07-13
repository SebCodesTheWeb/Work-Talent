import React from 'react'

import {
    Highlight,
    Text,
  } from '@chakra-ui/react'

interface Props {
    companyName: string;
    bgColor: string;
    location?: string;
  }

export const CompanyTag = ({
    companyName,
    bgColor="cyan.500",
    location='',
  }: Props) => {
      const workPlace = `@${ companyName } ${ location }`
      return (
        <Text fontWeight="bold" fontSize="sm">
         <Highlight
          query={`@${ companyName }`}
          styles={{
            bg: `${ bgColor }`, 
            p: '1', 
            borderRadius: '20', 
            color: '#fff',
            width: "min-content"
          }}
          >
          { workPlace }
         </Highlight>
        </Text>
      )
    }
