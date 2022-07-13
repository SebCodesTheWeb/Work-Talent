import React from 'react'

import {
    Highlight,
    Text,
  } from '@chakra-ui/react'

interface Props {
    text: string;
    bgColor?: string;
    fontWeight?: string;
  }

export const SimpleHighlight = ({
    text,
    bgColor="cyan.500",
    fontWeight="bold",
  }: Props) => {
      return (
         <Highlight
          query={`${ text }`}
          styles={{
            bg: `${ bgColor }`, 
            p: '1', 
            borderRadius: '20', 
            color: '#fff',
            width: "min-content",
            fontWeight: `${ fontWeight }`
          }}
          >
          { text }
         </Highlight>
      )
    }
