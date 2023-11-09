import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaHandshake, FaStore } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { BsBarChartLineFill } from "react-icons/bs";
import { FaUserCog, FaUserTie } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const SideMenu = () => {
  return (
    <Flex
      borderRight="1px solid #e5e5e5"
      w="fit-content"
      h="100vh"
      direction="column"
      gap={16}
      position="sticky"
      top={0}
      bottom={0}
      bg="#fff"
      zIndex={"banner"}
    >
      <Flex
        pt={5}
        fontSize={"40px"}
        justifyContent="center"
        color="primary.400"
      >
        <BsFillCartCheckFill />
      </Flex>
      <Flex direction="column">
        <NavLink to={"/"}>
          <VStack
            p={3}
            alignItems="center"
            spacing={1}
            color="#767676"
            transition="all ease .3s"
            _hover={{ color: "#500586" }}
            cursor="pointer"
          >
            <Box fontSize={"2xl"}>
              <RiDashboard2Fill />
            </Box>
            <Text fontSize="small">Dashboard</Text>
          </VStack>
        </NavLink>
        <VStack
          p={3}
          alignItems="center"
          spacing={1}
          color="#767676"
          transition="all ease .3s"
          _hover={{ color: "#500586" }}
          cursor="pointer"
        >
          <Box fontSize={"2xl"}>
            <FaUserTie />
          </Box>
          <Text fontSize="small">Agents</Text>
        </VStack>
        <VStack
          p={3}
          alignItems="center"
          spacing={1}
          color="#767676"
          transition="all ease .3s"
          _hover={{ color: "#500586" }}
          cursor="pointer"
        >
          <Box fontSize={"2xl"}>
            <FaHandshake />
          </Box>
          <Text fontSize="small">Providers</Text>
        </VStack>
        <VStack
          p={3}
          alignItems="center"
          spacing={1}
          color="#767676"
          transition="all ease .3s"
          _hover={{ color: "#500586" }}
          cursor="pointer"
        >
          <Box fontSize={"2xl"}>
            <FaStore />
          </Box>
          <Text fontSize="small">Stocks</Text>
        </VStack>
        <VStack
          p={3}
          alignItems="center"
          spacing={1}
          color="#767676"
          transition="all ease .3s"
          _hover={{ color: "#500586" }}
          cursor="pointer"
        >
          <Box fontSize={"2xl"}>
            <BiSolidReport />
          </Box>
          <Text fontSize="small">Reports</Text>
        </VStack>
        <VStack
          p={3}
          alignItems="center"
          spacing={1}
          color="#767676"
          transition="all ease .3s"
          _hover={{ color: "#500586" }}
          cursor="pointer"
        >
          <Box fontSize={"2xl"}>
            <BsBarChartLineFill />
          </Box>
          <Text fontSize="small">Transactions</Text>
        </VStack>
        <NavLink to={"/admins"}>
          <VStack
            p={3}
            alignItems="center"
            spacing={1}
            color="#500586"
            transition="all ease .3s"
            _hover={{ color: "#500586" }}
            cursor="pointer"
            fontWeight="bold"
            justifyContent="center"
          >
            <Box fontSize={"2xl"}>
              <FaUserCog />
            </Box>
            <Text fontSize="small">Admins</Text>
          </VStack>
        </NavLink>
      </Flex>
    </Flex>
  );
};
