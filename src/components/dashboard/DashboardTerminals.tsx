import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

export const DashboardTerminals = () => {
  return (
    <Box
      bg="#fff"
      borderRadius="lg"
      border="1px solid #e5e5e5"
      w={{ base: "100%", lg: "30%" }}
      p={6}
    >
      <VStack
        align={"flex-start"}
        spacing={0}
        pb={3}
        borderBottom="1px solid #dcdcdc"
      >
        <HStack>
          <Center
            w={10}
            h={10}
            borderRadius="full"
            bg="#F9F2EC"
            fontSize="xl"
            color="#E37E46"
          >
            <BsPatchCheckFill />
          </Center>
          <Text fontWeight="semibold">Terminals</Text>
        </HStack>
        <Text pl={"12"}>
          <Text fontWeight="bold" fontSize={"3xl"} as="span">
            8,032{" "}
          </Text>
          <Text color="#636363" as="span">
            Total terminals
          </Text>
        </Text>
      </VStack>
      <Flex align={"center"} gap={4} py={8} justify={"center"}>
        <CircularProgress value={30} size="110px" color="green.400">
          <CircularProgressLabel>
            <Text fontSize={"30px"} pl={"10"} color="green.400">
              <IoCheckmarkDoneSharp />
            </Text>
          </CircularProgressLabel>
        </CircularProgress>
        <VStack align={"flex-start"} spacing={0}>
          <Text>
            <Text fontWeight="bold" fontSize={"2xl"} as="span">
              7,630{" "}
            </Text>
            <Text color="#636363" as="span">
              (95%)
            </Text>
          </Text>
          <Text color="#636363" as="span">
            Activate terminals
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};
