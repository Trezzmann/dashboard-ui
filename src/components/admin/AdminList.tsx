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
import { AdminItem } from "./AdminItem";
import { useContext, useState } from "react";
import { AdminContext } from "../../contexts/AdminContextProvider";

export const AdminList = () => {
  const { adminsList, filter } = useContext(AdminContext);
  const [searchVal, setSearchVal] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    setTimeout(() => {
      filter(e.target.value);
    }, 800);
  };

  return (
    <Box
      maxH={"85vh"}
      overflowY="hidden"
      w={{ base: "100%", lg: "40%" }}
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
          <Input
            placeholder="Search"
            bg="#F3F3F3"
            variant="filled"
            value={searchVal}
            onChange={onChange}
          />
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
        {adminsList?.length ? (
          adminsList?.map((admin, index) => (
            <AdminItem {...admin} key={index} />
          ))
        ) : (
          <Box textAlign="center" py={12}>
            No admin found...
          </Box>
        )}
      </Box>
    </Box>
  );
};
