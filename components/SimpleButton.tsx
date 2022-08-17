import React from 'react'
import { Button } from '@chakra-ui/react'
interface Props {
  children: React.ReactNode
}

export const SimpleButton = ({ children }: Props) => {
  return (
    <Button
      maxW="300px"
      border="2px solid #1A202C"
      borderRadius={8}
      bg="transparent"
      _hover={{ bg: 'purple.500', color: '#fff', borderColor: 'transparent' }}
    >
      {children}
    </Button>
  )
}
