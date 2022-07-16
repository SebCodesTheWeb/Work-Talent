import React from 'react'
import {
    Button,
    HStack,
    Heading,
    Box,
  } from '@chakra-ui/react'

export const FormStepsCard: React.FC ({
    children,
    currentStep, 
    prevFormStep
  }) => {
    return (
      <Box>
        { children }
        {currentStep > 1 && (
          <Button onClick={ prevFormStep }> Back </Button>
        )}
      </Box>
    )

  }
