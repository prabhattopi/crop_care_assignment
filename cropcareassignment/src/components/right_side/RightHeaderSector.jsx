import { Box, HStack, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'
import {FiInbox} from "react-icons/fi"
import {MdOutlineMail} from "react-icons/md"
import {FaRegUserCircle} from "react-icons/fa"
import RightMiddleSector from './RightMiddleSector'
import RightLower from './RightLower'
const RightHeaderSector = () => {
  return (
    <Stack flex="1">
<Box display="flex">
    <Box></Box>
   <Spacer/>
   <Box display="flex" gap="20px"  mt="20px" mr="20px" alignItems="center">
  <FiInbox fontSize="25px"/>
  <MdOutlineMail fontSize="25px"/>
  <FaRegUserCircle fontSize="25px"/>
   </Box>

   </Box>
   <RightMiddleSector/>
   <RightLower/>
    </Stack>
   
  )
}

export default RightHeaderSector