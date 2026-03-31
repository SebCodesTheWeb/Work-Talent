import React from 'react'
import {
  Link,
  Input,
  Image,
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
import { ColorPicker } from 'chakra-color-picker'
import { FormWrapper } from './FormWrapper'

const colors = [
  'gray.500',
  'red.500',
  'green.500',
  'blue.500',
  'purple.500',
  'orange.500',
  'yellow.500',
  'cyan.500',
  'teal.500',
  'pink.500',
]

const SortableItem = SortableElement<any>(({ value }: { value: string }) => (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="center">
          <Text color="#fff" fontWeight="bold" cursor="grabbing">
            {value}
          </Text>
        </Box>
      </AccordionButton>
    </h2>
  </AccordionItem>
))

const SortableWrapper = SortableContainer<any>(({ children }: any) => (
  <Accordion w="full" borderRadius={8}>
    {children}
  </Accordion>
))

export const Theming = ({
  items,
  setItems,
  mainImage,
  setMainImage,
  secondaryImage,
  setSecondaryImage,
  setPrimaryColor,
  setSecondaryColor,
  currentStep,
  values,
}: any) => {
  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    setItems((prev: any) => arrayMoveImmutable(prev, oldIndex, newIndex))
  }

  return (
    <FormWrapper>
      <Heading as="h2" size="lg">
        Step {currentStep} Customize
      </Heading>
      <FormLabel>Sort order of which to display portfolio</FormLabel>
      <SortableWrapper onSortEnd={onSortEnd}>
        {items.map((value: any, index: number) => (
          <SortableItem key={index} value={value} index={index} />
        ))}
      </SortableWrapper>
      <FormLabel>Choose primary portfolio color</FormLabel>
      <Box>
        <ColorPicker
          onChange={(c) => setSecondaryColor(c)}
          defaultColor={values.secondaryColor}
          colors={colors}
        />
      </Box>
      <FormLabel>Choose secondary portfolio color</FormLabel>
      <Box>
        <ColorPicker
          onChange={(c) => setPrimaryColor(c)}
          defaultColor={values.primaryColor}
          colors={colors}
        />
      </Box>
      <FormLabel>Change main image</FormLabel>
      <Image
        src={
          mainImage ? typeof mainImage === 'string' ? mainImage : URL.createObjectURL(mainImage) : '/img/business-man.svg'
        }
        maxW="300px"
        alt="main-image"
      />
      <Box color="gray.500">
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            setMainImage(file)
          }}
        />
      </Box>
      <FormLabel>Change secondary image</FormLabel>
      <Image
        src={
          secondaryImage
            ? typeof secondaryImage === 'string' ? secondaryImage : URL.createObjectURL(secondaryImage)
            : '/img/coding.svg'
        }
        maxW="300px"
        alt="secondary-image"
      />
      <Box color="gray.500">
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            setSecondaryImage(file)
          }}
        />
      </Box>
      <Link href="https://undraw.co/illustrations" isExternal={true}>
        (Find more illustrations at undraw.co)
      </Link>
    </FormWrapper>
  )
}
