import React from 'react'

import {
    Heading,
    Text,
    List,
    ListItem,
    ListIcon,
    Stack,
    Highlight
} from '@chakra-ui/react'

import { GrCheckboxSelected } from 'react-icons/gr'

interface Props {
  jobTitle: string
  companyName: string
  location: string
  date: string
  workTasks: string[]
  bgColor?: 'cyan.500' | 'purple.500' | 'gray.500'
}

export const ExperienceCard = ({
    jobTitle,
    companyName,
    location,
    date,
    workTasks,
    bgColor='cyan.500',
}: Props ) => {
  const workPlace = `@${ companyName } ${ location }`
  console.log(bgColor)
    return (
     <Stack>
       <Heading size="md">{ jobTitle }</Heading>
       <Text fontWeight="bold" fontSize="sm">
         <Highlight
          query={`@${ companyName }`}
          styles={{
            bg: `${ bgColor }`, 
            p: '1', 
            borderRadius: '20', 
            color: '#fff'
          }}
          >
          { workPlace }
         </Highlight>
      </Text>
      <Text color="gray.800" fontWeight="light" fontSize="sm">{ date }</Text>
      <List spacing={ 4 }>
        { workTasks.map(workTask => {
            return (
              <ListItem key={ workTask }>
                <ListIcon as={ GrCheckboxSelected } />
                { workTask }
              </ListItem>
            )
          })}
      </List>
    </Stack>
    )
  }
