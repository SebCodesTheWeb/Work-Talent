import React from 'react'
import { Button } from '@chakra-ui/react'
interface Props {
  children: React.ReactNode
  onClick?: any
  secondaryColor?: string
}

export const SimpleButton = ({ children, onClick, secondaryColor='purple.500' }: Props) => {
  return (
    <Button
      maxW="300px"
      border="2px solid #1A202C"
      borderRadius={8}
      bg="transparent"
      _hover={{ bg: secondaryColor, color: '#fff', borderColor: 'transparent' }}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
