import React, { useState } from 'react'
import {
  VStack,
  FormLabel,
  Heading,
  Text,
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
} from '@chakra-ui/react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { arrayMoveImmutable } from 'array-move'

const SortableItem = SortableElement(({ value }: any) => (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="center">
            <Text color="#fff !important" fontWeight="bold">{value}</Text>
        </Box>
      </AccordionButton>
    </h2>
  </AccordionItem>
))

const SortableWrapper = SortableContainer(({ children }: any) => (
  <Accordion w="full" borderRadius={ 8 } >{children}</Accordion>
))

export const Theming = () => {
  const [items, setItems] = useState([
    'Work',
    'Portfolio',
    'About Me',
    'Cover Letter',
  ])


  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    setItems((prev) => arrayMoveImmutable(prev, oldIndex, newIndex))
  }

  return (
    <VStack alignItems="start" w="full" spacing={4}>
      <Heading as="h2" size="lg">
        Theming
      </Heading>
      <FormLabel>Sort order of which to display portfolio</FormLabel>
      <SortableWrapper onSortEnd={onSortEnd}>
        {items.map((value: any, index: number) => (
          <SortableItem key={index} value={value} index={index} />
        ))}
      </SortableWrapper>
    </VStack>
  )
}
