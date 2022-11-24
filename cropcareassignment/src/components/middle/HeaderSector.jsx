import { Box,Text,Input,InputGroup,InputLeftElement,Stack, Spacer } from '@chakra-ui/react'
import React from 'react'
import {BsSearch} from "react-icons/bs"
import BodySector from './BodySector'
import LowerSector from './LowerSector'
const HeaderSector = () => {
  return (
    <Stack borderRight="1px solid black"  borderLeft="1px solid black" flex="2">
    <Box display="flex" justifyContent="space-between" mt="20px" mr="20px" p="10px">
        <Box >
        <Text w="300px" fontSize="30px">
            Hello John 👋
       </Text>

        </Box>
        <Spacer/>
    <Box>
    <InputGroup>
     <InputLeftElement
      pointerEvents='none'
      children={<BsSearch color='gray.300' />}
    />
    <Input w="250px" type='text' placeholder='Search' />
  </InputGroup>
  </Box>
    </Box>
    <BodySector/>
    <LowerSector/>
    </Stack>
  )
}

export default HeaderSector