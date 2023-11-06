import {
    Box,
    Flex,
    HStack,
    Input,
    Select,
    Stack,
    Text,
} from "@chakra-ui/react";
import { BsCalendar4Event } from "react-icons/bs";
import { LineChart } from "../charts/LineChart";
import { LineChart2 } from "../charts/LineChart2";
import { DonutChart } from "../charts/DonutChart";
import { DonutChart2 } from "../charts/DonutChart2";

export const Dashboard = () => {
    return (
        <Flex px={16} py={6} gap={4} wrap="wrap">
            {/* filters  */}
            <Stack justify="space-between" direction="row" w="full">
                <HStack spacing={4}>
                    <Select placeholder="" colorScheme="green" bg="#fff">
                        <option value="option1">AGENT-0002</option>
                        <option value="option2">AGENT-0003</option>
                        <option value="option3">AGENT-0004</option>
                    </Select>
                    <Select placeholder="" bg="#fff">
                        <option value="option1">AGENT-0002</option>
                        <option value="option2">AGENT-0003</option>
                        <option value="option3">AGENT-0004</option>
                    </Select>
                </HStack>
                <Flex
                    maxW={"fit-content"}
                    align="center"
                    border="1px solid #dfdfdf"
                    borderRadius="lg"
                    pl="2"
                    bg="#fff"
                >
                    <Box color="gray.30" pr={3} fontSize="xl">
                        <BsCalendar4Event />
                    </Box>
                    <Input
                        placeholder="Start date"
                        htmlSize={10}
                        w="auto"
                        variant="unstyled"
                    />
                    <Text mr={6} ml={"-3"}>
                        To
                    </Text>
                    <Input
                        placeholder="End date"
                        variant="unstyled"
                        htmlSize={10}
                        w="auto"
                    />
                </Flex>
            </Stack>
            <Box
                bg="#fff"
                w="full"
                borderRadius="lg"
                border="1px solid #e5e5e5"
            >
                <Flex p={6}>
                    <Box w="65%" pr={12} borderRight="1px solid #cccccc">
                        <LineChart />
                    </Box>
                    <Flex w="35%" justify={"center"} align={"center"}>
                        <DonutChart />
                    </Flex>
                </Flex>
            </Box>
            <Box
                bg="#fff"
                w="full"
                borderRadius="lg"
                border="1px solid #e5e5e5"
            >
                <Flex p={6}>
                    <Box w="65%" pr={12} borderRight="1px solid #cccccc">
                        <LineChart2 />
                    </Box>
                    <Flex w="35%" justify={"center"} align={"center"}>
                        <DonutChart2 />
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
};
