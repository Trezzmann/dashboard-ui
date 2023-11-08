import {
  Avatar,
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Header = () => (
  <Flex
    bg="#fff"
    w="full"
    height="80px"
    px={16}
    py={2}
    borderBottom="1px solid #e5e5e5"
    alignItems="center"
    justifyContent="space-between"
    pos="sticky"
    top={0}
    zIndex="10"
  >
    <Heading size={"lg"}>Dashboard</Heading>
    <HStack pl={8} borderLeft="1px solid #e5e5e5" h="full" spacing={12}>
      <Button variant={"ghost"} borderRadius={"full"} px={2}>
        <Box fontSize="2xl" pos="relative">
          <IoNotificationsOutline />
          <Box
            h={"1.5"}
            w={"1.5"}
            bg="red.500"
            pos="absolute"
            top="-1.4px"
            right="-1.4px"
            borderRadius="full"
          ></Box>
        </Box>
      </Button>

      <HStack spacing={3}>
        <Text>
          Hello,{" "}
          <Text as="span" fontWeight="semibold" color="#500586">
            Jacob
          </Text>
        </Text>
        <HStack spacing={1}>
          <Avatar size={"sm"} />
          <Menu>
            <MenuButton>
              <Box fontSize="2xl">
                <MdKeyboardArrowDown />
              </Box>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Transactions</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </HStack>
  </Flex>
);
