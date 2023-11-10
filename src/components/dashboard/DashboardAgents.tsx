import { Box, Flex } from "@chakra-ui/react";
import { LineChart } from "../../charts/LineChart";
import { DonutChart } from "../../charts/DonutChart";

export const DashboardAgents = () => {
  return (
    <Box bg="#fff" w="full" borderRadius="lg" border="1px solid #e5e5e5">
      <Flex p={6} flexWrap="wrap" gap={{ base: 12, lg: 0 }}>
        <Box
          w={{ base: "100%", lg: "65%" }}
          pr={12}
          borderRight={{ lg: "1px solid #cccccc" }}
        >
          <LineChart />
        </Box>
        <Flex
          w={{ base: "100%", lg: "35%" }}
          justify={"center"}
          align={"center"}
        >
          <DonutChart />
        </Flex>
      </Flex>
    </Box>
  );
};
