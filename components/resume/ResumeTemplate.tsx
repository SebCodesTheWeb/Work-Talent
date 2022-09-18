import React from 'react'
import { Box, Center, Stack, Text, Heading, Link } from '@chakra-ui/react'

export const ResumeTemplate = React.forwardRef(({ data }: any, ref) =>{ 
    console.log(data)
  return <Box h="3500px" w="2480px" border="2px solid pink" ref={ref} bg="white" >
        <Stack>
            <Heading size="2xl">{ data.firstname }</Heading>
        </Stack>
    </Box>
})

ResumeTemplate.displayName="ResumeTemplate"