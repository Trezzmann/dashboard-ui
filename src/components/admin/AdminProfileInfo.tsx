import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";
import { AdminContext } from "../../contexts/AdminContextProvider";

export const AdminProfileInfo = () => {
  const { selectedAdmin } = useContext(AdminContext);
  return (
    <Flex justifyContent="space-between" px={6} py={6} w="100%">
      <Flex gap={8}>
        <Box position="relative">
          <Avatar size="xl" src={selectedAdmin.profileImage} />
          <Button
            position="absolute"
            right="-10px"
            top="60px"
            size="sm"
            p={0}
            variant="ghost"
            bg="#F1F1F1"
            color="#3c3c3c"
            fontSize="lg"
            borderRadius="full"
            shadow="md"
          >
            <MdModeEdit />
          </Button>
        </Box>
        <VStack spacing={6} align="flex-start">
          <VStack align="flex-start" spacing={3}>
            <VStack align="flex-start" spacing={1}>
              <Heading size="md">{selectedAdmin.name}</Heading>
              <Text>{selectedAdmin.id}</Text>{" "}
            </VStack>
            <Text>{selectedAdmin.email}</Text>
          </VStack>

          <VStack align="flex-start" spacing={0}>
            <Text fontSize="sm" color="#919191">
              Phone number
            </Text>
            <Text>+257 79 28 4124</Text>
          </VStack>
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="sm" color="#919191">
              Home address
            </Text>
            <Text>Bujumbura, Burundi</Text>
          </VStack>
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="sm" color="#919191">
              Permission
            </Text>
            <Text>Can view</Text>
          </VStack>
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="sm" color="#919191">
              Status
            </Text>
            <Text>Activate</Text>
          </VStack>
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="sm" color="#919191">
              Password
            </Text>
            <Text>************</Text>
          </VStack>
        </VStack>
      </Flex>
      <VStack align="flex-end" spacing={12}>
        <HStack>
          <Button size="sm" colorScheme="primary" variant="outline">
            Edit profile
          </Button>
          <Button size="sm" p={0} fontSize="2xl">
            <BiDotsVerticalRounded />
          </Button>
        </HStack>
        <Text fontSize="sm">
          Joined:{" "}
          <Text as="span" color="#919191">
            {selectedAdmin.lastLoggedIn}
          </Text>
        </Text>
      </VStack>
    </Flex>
  );
};
