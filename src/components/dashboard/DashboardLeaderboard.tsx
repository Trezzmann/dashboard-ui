import {
  Center,
  Flex,
  HStack,
  Select,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

export const DashboardLeaderboard = () => {
  return (
    <Flex
      bg="#fff"
      borderRadius="lg"
      border="1px solid #e5e5e5"
      w="auto"
      flex={1}
      p={6}
      direction={"column"}
      gap={6}
    >
      <Flex justify={"space-between"} w="full" align={"center"}>
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
          <Text fontWeight="semibold">Leaderboard</Text>
        </HStack>
        <Select placeholder="" bg="#fff" w={"fit-content"} variant="filled">
          <option value="option1">Agents</option>
          <option value="option2">Shora</option>
          <option value="option3">Sales</option>
        </Select>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead bg="#F9F9F9">
            <Tr>
              <Th>Ranking</Th>
              <Th>Agent</Th>
              <Th>Transactions</Th>
              <Th>Completion Rate</Th>
              <Th isNumeric>Sales</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr _hover={{ bg: "#FBE4D4" }} transition="all ease 300ms">
              <Td py={2}>
                <HStack align={"center"}>
                  <Center
                    w={6}
                    h={6}
                    borderRadius={"full"}
                    bg={"gray.100"}
                    p={5}
                  >
                    80
                  </Center>
                  <Text color={"green.400"}>
                    <BiUpArrowAlt />
                    {/* <BiDownArrowAlt /> */}
                  </Text>
                </HStack>
              </Td>
              <Td py={2}>AGENT-0080</Td>
              <Td py={2}>92</Td>
              <Td py={2}>81%</Td>
              <Td py={2} isNumeric>
                <Text>
                  26,040{" "}
                  <Text fontSize={"sm"} color={"gray.500"} as="span">
                    BIF
                  </Text>
                </Text>
              </Td>
            </Tr>
            <Tr _hover={{ bg: "#FBE4D4" }} transition="all ease 300ms">
              <Td py={2}>
                <HStack align={"center"}>
                  <Center
                    w={6}
                    h={6}
                    borderRadius={"full"}
                    bg={"gray.100"}
                    p={5}
                  >
                    81
                  </Center>
                  <Text color={"red.400"}>
                    <BiDownArrowAlt />
                  </Text>
                </HStack>
              </Td>
              <Td py={2}>AGENT-0464</Td>
              <Td py={2}>92</Td>
              <Td py={2}>91%</Td>
              <Td py={2} isNumeric>
                <Text>
                  36,040{" "}
                  <Text fontSize={"sm"} color={"gray.500"} as="span">
                    BIF
                  </Text>
                </Text>
              </Td>
            </Tr>
            <Tr _hover={{ bg: "#FBE4D4" }} transition="all ease 300ms">
              <Td py={2}>
                <HStack align={"center"}>
                  <Center
                    w={6}
                    h={6}
                    borderRadius={"full"}
                    bg={"gray.100"}
                    p={5}
                  >
                    81
                  </Center>
                  <Text color={"red.400"}>
                    <BiDownArrowAlt />
                  </Text>
                </HStack>
              </Td>
              <Td py={2}>AGENT-0464</Td>
              <Td py={2}>92</Td>
              <Td py={2}>91%</Td>
              <Td py={2} isNumeric>
                <Text>
                  36,040{" "}
                  <Text fontSize={"sm"} color={"gray.500"} as="span">
                    BIF
                  </Text>
                </Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};
