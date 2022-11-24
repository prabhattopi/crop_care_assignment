import { Box,Text,Image } from '@chakra-ui/react'
import React from 'react'
import {FaUsers} from 'react-icons/fa'
import {AiFillPlusCircle} from "react-icons/ai"
const RightLower = () => {
  const data2 = [
    {
      id: 1,
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvR2IfxUhilqLiABOARb2ImxOK3BqvVQRGdA&usqp=CAU"
    },
    {
      id: 2,
      src:"data:image/jpeg;base64,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"
    },
    {
      id: 3,
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvR2IfxUhilqLiABOARb2ImxOK3BqvVQRGdA&usqp=CAU"
    },
    {
      id: 4,
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvR2IfxUhilqLiABOARb2ImxOK3BqvVQRGdA&usqp=CAU"
    },
  ];
  return (
    <Box>
      <Text fontWeight="bold" fontSize="20px" mb="40px">
            Recent Transactions
          </Text>
        <Box boxShadow="xl"  display="flex"
            flexDirection="column"
            
            borderRadius="10px"
            p="20px"
            rounded="md"
            bg="white"
            h="250px"
            gap="20px"
            w="280px"
            mt="30px"
            mr="10px">
          <Box display="flex" alignItems="center" gap="5px">
            <FaUsers fontSize="25px"/>
            <Box>
              <Text fontSize="13px" color="gray.300">
                Transfer to your team
              </Text>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" gap="5px">
            <Text fontSize="30px" fontWeight="bold">$450</Text>
            <Box bg="rgb(16,69,255)" p="5px 20px" borderRadius="15px"  cursor="pointer">
              <Text fontSize="14px" color="white">
                Transfer
              </Text>
            </Box>
          </Box>
          <hr />
          <Box display="flex">
            {
              data2.map(e=>(
                <Image
                key={e.id}
                src={e.src}
                objectFit="contain"
                boxSize="40px"
                ml="-10px"
                />
              ))
            }
           <AiFillPlusCircle fontSize="30px" ml="-10px"/>


          </Box>

        </Box>
        </Box>
  )
}

export default RightLower