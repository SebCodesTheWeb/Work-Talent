import React from 'react'
import { VStack, Button, HStack, Icon, Text } from '@chakra-ui/react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FormWrapperProps } from './types'

export const FormWrapper = ({ spacing=12, name, onClick, children }: FormWrapperProps) => {
  return (
    <VStack
      alignItems="start"
      w="full"
      maxH="800px"
      spacing={spacing}
      overflowY={{ base: 'visible', '2xl': 'scroll' }}
      pr={ 2 }
    >
      {children}
      {name && (
        <Button
          onClick={onClick}
          variant="ghost"
          border="1px solid #fff"
          _hover={{ color: 'gray.700', bgColor: '#fff' }}
          p={2}
          autoFocus={ true }
        >
          <HStack>
            <Text>Add new {name}</Text>
            <Icon as={AiOutlinePlusCircle} />
          </HStack>
        </Button>
      )}
    </VStack>
  )
}
