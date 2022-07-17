import React, { useState } from 'react'

import {
    Heading,
    Text,
    VStack,
    Stack,
    HStack,
    Box,
    Image,
    Button,
  } from '@chakra-ui/react'

export default function UserPortfolio () {
  const [data, setData] = useState({})
  
  async function getData() {
      const res = await fetch('api/userData')
      const userData = await res.json()
      setData(userData)
      console.log(data)
    }

  return (
  <VStack>
    <Button onClick={ getData }>Load Data</Button>
  </VStack>

  )
  }
