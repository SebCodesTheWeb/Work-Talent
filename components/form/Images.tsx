import React from 'react'
import {
  Input,
  Button,
  VStack,
  Heading,
  FormLabel,
  Textarea,
  Stack,
} from '@chakra-ui/react'
import { FormStepProps } from './props'
import { arrayWithLength } from '../../utils'
import FilePicker from 'chakra-ui-file-picker'

interface ImageProps extends FormStepProps {
  images: number[]
  setImages: any
  setImageSRCS: any
  imageSRCS: any[]
}

export const WorkImages = ({
  handleChange,
  currentStep,
  images,
  setImages,
  values,
  setImageSRCS,
  imageSRCS,
}: ImageProps) => {
  const addNewImage = () => {
    setImages((prevImageCount: number[]) =>
      arrayWithLength(prevImageCount.length + 1)
    )
  }

  return (
    <VStack
      alignItems="start"
      w="full"
      spacing={12}
      maxH="800px"
      overflowY="scroll"
      p={4}
    >
      <Heading as="h2" size="lg">
        Step {currentStep}: Work Images
      </Heading>
      {images.map((imageNumber: number) => (
        <Stack key={imageNumber} w="full" spacing={4}>
          <Heading size="md">Add work related images: </Heading>
          <FormLabel htmlFor={`images[${imageNumber}].src`}></FormLabel>
          {/* <Input
            name={`images[${imageNumber}].src`}
            type="file"
            onChange={(e) => {
              setImageSRCS((prev: any) =>
                prev.map((item: any, index: number) =>
                  index === imageNumber ? e.target.files[0] : item
                )
              )
            }}
            autoFocus={true}
            value={
              values.images[imageNumber]
                ? values.images[imageNumber].src
                : undefined
            }
          /> */}
          <FilePicker
            onFileChange={(files) => {
              setImageSRCS((prev: any) =>
                prev.map((item: any, index: number) =>
                  index === imageNumber ? files[0] : item
                )
              )
            }}
            hideClearButton={true}
            placeholder={
              imageSRCS[imageNumber]
                ? `${URL.createObjectURL(imageSRCS[imageNumber])}`
                : 'Click to upload image'
            }
          />

          <FormLabel htmlFor={`images[${imageNumber}].title`}>
            Name the image:
          </FormLabel>
          <Input
            name={`images[${imageNumber}].title`}
            onChange={handleChange}
            placeholder="Hanging out after work"
            value={
              values.images[imageNumber]
                ? values.images[imageNumber].title
                : undefined
            }
          />
          <FormLabel htmlFor={`images[${imageNumber}].description`}>
            Description:
          </FormLabel>
          <Textarea
            name={`images[${imageNumber}].description`}
            onChange={handleChange}
            placeholder="After a long day at work, we took a few beers and discussed how we would move forward with the new prototype"
            value={
              values.images[imageNumber]
                ? values.images[imageNumber].description
                : undefined
            }
          />
          <FormLabel htmlFor={`images[${imageNumber}].context`}>
            The name of the company the image is related to:
          </FormLabel>
          <Input
            name={`images[${imageNumber}].context`}
            onChange={handleChange}
            placeholder="Facebook"
            value={
              values.images[imageNumber]
                ? values.images[imageNumber].context
                : undefined
            }
          />
        </Stack>
      ))}
      <Button
        onClick={addNewImage}
        p={4}
        variant="ghost"
        border="1px solid #fff"
        _hover={{ color: 'gray.700', bgColor: '#fff' }}
      >
        Add new image
      </Button>
    </VStack>
  )
}
