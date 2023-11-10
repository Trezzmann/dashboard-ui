import { Box, Flex, HStack, Select, Text, VStack } from "@chakra-ui/react";
import { LineChart2 } from "../../charts/LineChart2";
import { DonutChart2 } from "../../charts/DonutChart2";

export const DashboardSales = () => {
  return (
    <Box bg="#fff" w="full" borderRadius="lg" border="1px solid #e5e5e5">
      <Flex p={6} flexWrap="wrap" gap={{ base: 12, lg: 0 }}>
        <Box
          w={{ base: "100%", lg: "65%" }}
          pr={12}
          borderRight={{ lg: "1px solid #cccccc" }}
        >
          <LineChart2 />
          <Flex justify={"space-between"} align={"center"}>
            <Flex
              width={"50%"}
              justify={"flex-start"}
              wrap={"wrap"}
              gap="8px 60px"
              pl={"12"}
            >
              <HStack>
                <Box w={2} h={2} bg="#4DB671" />
                <Text color="#7e7e7e">All Sales</Text>
              </HStack>
              <HStack>
                <Box w={2} h={2} bg="#F4BF61" />
                <Text color="#7e7e7e">Provider Sales</Text>
              </HStack>
              <HStack>
                <Box w={2} h={2} bg="#530B95" />
                <Text color="#7e7e7e">Store Sales</Text>
              </HStack>
            </Flex>
            <VStack align={"flex-end"} spacing={0} color="#7e7e7e">
              <Text>
                <Text fontWeight={"bold"} as="span">
                  973
                </Text>
                (97%) of{" "}
                <Text fontWeight={"bold"} as="span">
                  1003
                </Text>
              </Text>
              <Text>Transaction completion rate</Text>
            </VStack>
          </Flex>
        </Box>
        <Flex
          w={{ base: "100%", lg: "35%" }}
          justify={"center"}
          align={"center"}
          position="relative"
        >
          <Box pos="absolute" top={0} right={0}>
            <Select placeholder="" bg="#fff" variant="filled">
              <option value="option1">AGENT-0002</option>
              <option value="option2">AGENT-0003</option>
              <option value="option3">AGENT-0004</option>
            </Select>
          </Box>
          <DonutChart2 />
        </Flex>
      </Flex>
    </Box>
  );
};
