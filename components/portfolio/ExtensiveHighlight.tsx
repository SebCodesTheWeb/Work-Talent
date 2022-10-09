import React from 'react'
import { Highlight } from '@chakra-ui/react'

interface Props {
  bgColor?: string
  fontWeight?: string
  text?: string
  query?: string[]
}

export const ExtensiveHighlight = ({
  text = '',
  bgColor = 'cyan.500',
  query = [],
  fontWeight = 'bold',
}: Props) => (
  <Highlight
    query={query}
    styles={{
      bg: `${bgColor}`,
      p: '6px',
      borderRadius: '20',
      color: '#fff',
      width: 'min-content',
      fontWeight: `${fontWeight}`,
    }}
  >
    {text}
  </Highlight>
)
