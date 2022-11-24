import { Box, HStack, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'
import {FiInbox} from "react-icons/fi"
import {MdOutlineMail} from "react-icons/md"
import {FaRegUserCircle} from "react-icons/fa"
import RightMiddleSector from './RightMiddleSector'
import RightLower from './RightLower'
const RightHeaderSector = () => {
  return (
    <Stack display="flex" gap="30px" flex="1" mt="30px">
<Box display="flex">
    <Box></Box>
   <Spacer/>
   <Box display="flex" gap="20px"  mt="20px" mr="20px" alignItems="center">
  <FiInbox cursor="pointer" fontSize="30px"/>
  <MdOutlineMail cursor="pointer" fontSize="30px"/>
  <FaRegUserCircle cursor="pointer" fontSize="30px"/>
   </Box>

   </Box>
   <RightMiddleSector/>
   <RightLower/>
    </Stack>
   
  )
}

export default RightHeaderSector