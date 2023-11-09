import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { MdTune } from "react-icons/md";
import { adminsData } from "../../data/adminsData";
import { AdminItem } from "./AdminItem";

export const AdminList = () => {
  return (
    <Box
      maxH={"85vh"}
      overflowY="hidden"
      w="40%"
      bg="#fff"
      borderRadius={"md"}
      border="1px solid #e5e5e5"
      position="relative"
      pb={6}
    >
      <HStack
        borderBottom="1px solid #e5e5e5"
        py={3}
        px={6}
        position="sticky"
        top={0}
        bg="#fff"
        spacing={3}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            fontSize="2xl"
            color="gray.500"
          >
            <BiSearch />
          </InputLeftElement>
          <Input placeholder="Search" bg="#F3F3F3" variant="filled" />
        </InputGroup>
        <Button variant="ghost" fontSize="2xl" p={0}>
          <MdTune />
        </Button>
        <Button
          p={0}
          variant="solid"
          colorScheme="primary"
          fontSize="3xl"
          borderRadius="full"
        >
          <IoMdAdd />
        </Button>
      </HStack>
      <Box
        pb={20}
        h="100%"
        overflowY="auto"
        __css={{
          "&::-webkit-scrollbar": {
            w: "1",
          },
          "&::-webkit-scrollbar-track": {
            w: "1",
          },
          "&::-webkit-scrollbar-thumb": {
            visibility: "hidden",
            borderRadius: "full",
            bg: `#dcdcdc`,
          },
          "&:hover::-webkit-scrollbar-thumb": {
            visibility: "visible",
          },
        }}
      >
        {adminsData.map((admin, index) => (
          <AdminItem {...admin} key={index} />
        ))}
      </Box>
    </Box>
  );
};
