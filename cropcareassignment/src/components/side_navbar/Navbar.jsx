import { Flex, HStack, Icon, Text, Container, Box } from "@chakra-ui/react";
import { FaHome, FaUpload, FaStar, FaArrowRight } from "react-icons/fa";
import {CiSettings} from "react-icons/ci"
import {MdOutlineMessage} from "react-icons/md"
import {FiHelpCircle} from "react-icons/fi"
import {GoFile} from "react-icons/go"
import {RiLogoutBoxRLine} from "react-icons/ri"
import {CiBadgeDollar} from "react-icons/ci"
import React from "react";

const Navbar = () => {
  return (
    <HStack
      width="180px"
      height="100%"
      display="flex"
      align="flex-start"
      bg="white"
      mt="30px"
      cursor="pointer"
     
    >
      <Flex direction="column" color="black">
        <Text
          textAlign="center"
          fontSize="50px"
          fontWeight="bold"
          color="#1045ff"
        >
          Logo
        </Text>
        <Flex direction="column" mt="30px" gap="20px" width="200px" p="10px">
          <Flex
            gap="20px"
            align="center"
            _hover={{ bg: "cyan.500", borderRadius: "5px" }}
            width="100%"
            height="60px"
          >
            <Icon ml="10px" fontSize="20px" as={FaHome}></Icon>
            <Text fontSize="20px">Products</Text>
          </Flex>
          <Flex
            gap="20px"
            align="center"
            _hover={{ bg: "cyan.500", borderRadius: "5px" }}
            width="100%"
            height="60px"
          >
            <Icon ml="10px" fontSize="20px" as={FaUpload}></Icon>

            <Text fontSize="20px">Anylatics</Text>
          </Flex>
          <Flex
            gap="20px"
            align="center"
            _hover={{ bg: "cyan.500", borderRadius: "5px" }}
            width="100%"
            height="60px"
          >
            <Icon ml="10px" fontSize="20px" as={FaStar}></Icon>
            <Text fontSize="20px">Schedule</Text>
          </Flex>
          <Flex
            gap="20px"
            align="center"
            _hover={{ bg: "cyan.500", borderRadius: "5px" }}
            width="100%"
            height="60px"
          >
            <Icon ml="10px" fontSize="20px" as={CiBadgeDollar}></Icon>
            <Text fontSize="20px">Payout</Text>
          </Flex>
          <Flex
            gap="20px"
            align="center"
            _hover={{ bg: "cyan.500", borderRadius: "5px" }}
            width="100%"
            height="60px"
          >
            <Icon ml="10px" fontSize="20px" as={GoFile}></Icon>
            <Text fontSize="20px">Statements</Text>
          </Flex>
          <hr />
          <Flex
            gap="20px"
            align="center"
            _hover={{ bg: "cyan.500", borderRadius: "5px" }}
            width="100%"
            height="60px"
          >
            <Icon ml="10px" fontSize="20px" as={FiHelpCircle}></Icon>
            <Text fontSize="20px">Help</Text>
          </Flex>
          <Flex
            gap="20px"
            align="center"
            _hover={{ bg: "cyan.500", borderRadius: "5px" }}
            width="100%"
            height="60px"
          >
            <Icon ml="10px" fontSize="20px" as={MdOutlineMessage}></Icon>
            <Text fontSize="20px">Community</Text>
          </Flex>
          <Flex
            gap="20px"
            align="center"
            _hover={{ bg: "cyan.500", borderRadius: "5px" }}
            width="100%"
            height="60px"
          >
            <Icon ml="10px" fontSize="20px" as={CiSettings}></Icon>
            <Text fontSize="20px">Settings</Text>
          </Flex>
          <Flex
            gap="20px"
            align="center"
            _hover={{ bg: "cyan.500", borderRadius: "5px" }}
            width="100%"
            height="60px"
          >
            <Icon ml="10px" fontSize="20px" as={RiLogoutBoxRLine}></Icon>
            <Text fontSize="20px">Logout</Text>
          </Flex>
        </Flex>
      </Flex>
    </HStack>
  );
};

export default Navbar;
