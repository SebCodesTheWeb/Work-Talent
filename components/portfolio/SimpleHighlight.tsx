import React from 'react'
import { Highlight, Text } from '@chakra-ui/react'
interface Props {
  text: string
  bgColor?: string
  fontWeight?: string
}

export const SimpleHighlight = ({
  text,
  bgColor = 'cyan.500',
  fontWeight = 'bold',
}: Props) => {
  return (
    <Text>
      <Highlight
        query={`${text}`}
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
    </Text>
  )
}
