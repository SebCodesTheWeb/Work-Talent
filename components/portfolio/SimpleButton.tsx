import React from 'react'
import { Button } from '@chakra-ui/react'
interface Props {
  children: React.ReactNode
  onClick?: any
}

export const SimpleButton = ({ children, onClick }: Props) => {
  return (
    <Button
      maxW="300px"
      border="2px solid #1A202C"
      borderRadius={8}
      bg="transparent"
      _hover={{ bg: 'purple.500', color: '#fff', borderColor: 'transparent' }}
      onClick={ onClick }
    >
      {children}
    </Button>
  )
}
