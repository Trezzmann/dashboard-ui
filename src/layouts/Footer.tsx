import { Flex, HStack, Text } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <Flex pt={5} pb={16} px={16} mt={5} borderTop="1px solid #e5e5e5">
            <HStack spacing={4}>
                <Text>© 2020 Shora</Text>
                <Text>|</Text>
                <Text>All rights reserved.</Text>
            </HStack>
        </Flex>
    );
};
