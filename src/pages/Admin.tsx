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
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdMailOutline, MdModeEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { MainLayout } from "../layouts/MainLayout";
import { AdminList } from "../components/admin";

export const Admin = () => {
  return (
    <MainLayout title="Admins">
      <Flex px={16} py={6} gap={4}>
        <AdminList />
        <Box
          maxH={"85vh"}
          w="60%"
          bg="#fff"
          borderRadius={"md"}
          border="1px solid #e5e5e5"
          pb={6}
        >
          <Flex
            borderBottom="1px solid #e5e5e5"
            justifyContent="space-between"
            pr={6}
            py={4}
          >
            <HStack px={6} spacing={0} align="center" p={0}>
              <Box px={8}>Summary</Box>
              <Box
                px={8}
                fontWeight="bold"
                position="relative"
                _after={{
                  content: `""`,
                  position: "absolute",
                  top: "41px",
                  left: 0,
                  height: "3px",
                  width: "100%",
                  background: "#E0BE81",
                }}
              >
                Profile
              </Box>
            </HStack>
            <HStack fontWeight="bold" p={0}>
              <Button
                size="sm"
                p={0}
                variant="ghost"
                bg="#F1F1F1"
                color="#3c3c3c"
                fontSize="lg"
                borderRadius="full"
              >
                <MdModeEdit />
              </Button>
              <Button
                size="sm"
                p={0}
                variant="ghost"
                bg="#F1F1F1"
                color="#3c3c3c"
                fontSize="lg"
                borderRadius="full"
              >
                <MdMailOutline />
              </Button>
              <Button
                size="sm"
                p={0}
                variant="ghost"
                bg="#F1F1F1"
                color="#3c3c3c"
                fontSize="lg"
                borderRadius="full"
              >
                <IoClose />
              </Button>
            </HStack>
          </Flex>
          <Flex justifyContent="space-between" px={6} py={6} w="100%">
            <Flex gap={8}>
              <Box position="relative">
                <Avatar size="xl" />
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
                    <Heading size="md">Gregory Tran</Heading>
                    <Text>ADMIN-0020</Text>{" "}
                  </VStack>
                  <Text>tran@shora.cos</Text>
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
                  <Text>+257 79 28 4124</Text>
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
                  4 days ago
                </Text>
              </Text>
            </VStack>
          </Flex>
        </Box>
      </Flex>
    </MainLayout>
  );
};
