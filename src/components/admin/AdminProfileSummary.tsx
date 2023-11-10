import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { FaCircleExclamation } from "react-icons/fa6";

export const AdminProfileSummary = () => {
  return (
    <Flex justifyContent="center" align="center" w="100%" h="100%">
      <VStack align="center">
        <Box fontSize="5xl">
          <FaCircleExclamation />
        </Box>
        <Heading size="md">
          There is nothing to show for the chosen admin
        </Heading>
      </VStack>
    </Flex>
  );
};
