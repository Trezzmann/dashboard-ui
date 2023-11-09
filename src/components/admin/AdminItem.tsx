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
import AdminStatus from "./AdminStatus";

interface AdminItemProps {
  id: string;
  name: string;
  lastLoggedIn: string;
  profileImage: string;
  active: boolean;
}

export const AdminItem = (props: AdminItemProps) => {
  const { name, lastLoggedIn, profileImage, active, id } = props;
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
            <Avatar size="md" src={profileImage} />
            <AdminStatus active={active} />
          </Box>
          <VStack spacing={0} alignItems="flex-start">
            <Text fontWeight="bold">{name}</Text>
            <Text fontSize="small">{id}</Text>
          </VStack>
        </HStack>
        <HStack spacing={4} alignItems="flex-start">
          <Text color="#919191" fontSize="small">
            {lastLoggedIn}
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
