import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";

import { BiDotsVerticalRounded } from "react-icons/bi";

export const AdminItem = () => {
  return (
    <Box
      pt={4}
      px={6}
      transition="all ease 300ms"
      _hover={{
        background: "#EDE5F4",
      }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #e5e5e5"
        pb={4}
      >
        <HStack spacing={4} alignContent="flex-start">
          <Box pos="relative">
            <Avatar size="md" />
            <Box
              w={5}
              h={5}
              borderRadius="full"
              bg="green.500"
              pos="absolute"
              right="-8px"
              bottom={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#fff"
            >
              <BiDotsVerticalRounded />
            </Box>
          </Box>
          <VStack spacing={0} alignItems="flex-start">
            <Text fontWeight="bold">Gregory Tran</Text>
            <Text fontSize="small">ADMIN-0020</Text>
          </VStack>
        </HStack>
        <HStack spacing={4} alignItems="flex-start">
          <Text color="#919191" fontSize="small">
            4 days ago
          </Text>
          <Menu placement="left-start">
            <MenuButton
              p={1}
              borderRadius="full"
              color="primary.400"
              fontSize="3xl"
              _hover={{ bg: "primary.100" }}
            >
              <BiDotsVerticalRounded />
            </MenuButton>
            <MenuList>
              <MenuItem>Edit profile</MenuItem>
              <MenuItem>De-activate</MenuItem>
              <MenuItem color="red.500">Delete</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};
