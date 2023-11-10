import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import { FaCircleExclamation } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Flex w="full" h="100vh" justify="center" align="center">
      <VStack align="center" gap={8}>
        <Box fontSize="9xl">
          <FaCircleExclamation />
        </Box>
        <VStack>
          <Heading size="lg">404 - Page not found</Heading>
          <Text>The page you requested could not be found</Text>
          <NavLink to="/">
            <Button colorScheme="primary">Back to dashboard</Button>
          </NavLink>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default NotFound;
