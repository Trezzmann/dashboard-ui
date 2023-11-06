import {
    Box,
    Center,
    CircularProgress,
    CircularProgressLabel,
    Flex,
    HStack,
    Input,
    Select,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { BsCalendar4Event, BsPatchCheckFill } from "react-icons/bs";
import { LineChart } from "../charts/LineChart";
import { LineChart2 } from "../charts/LineChart2";
import { DonutChart } from "../charts/DonutChart";
import { DonutChart2 } from "../charts/DonutChart2";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

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
                            <VStack
                                align={"flex-end"}
                                spacing={0}
                                color="#7e7e7e"
                            >
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
                        w="35%"
                        justify={"center"}
                        align={"center"}
                        position="relative"
                    >
                        <Box pos="absolute" top={0} right={0}>
                            <Select placeholder="" bg="#fff">
                                <option value="option1">AGENT-0002</option>
                                <option value="option2">AGENT-0003</option>
                                <option value="option3">AGENT-0004</option>
                            </Select>
                        </Box>
                        <DonutChart2 />
                    </Flex>
                </Flex>
            </Box>
            <Box
                bg="#fff"
                borderRadius="lg"
                border="1px solid #e5e5e5"
                w="30%"
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
                        <Text fontWeight="bold" fontSize={"2xl"} as="span">
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
            <Flex
                bg="#fff"
                borderRadius="lg"
                border="1px solid #e5e5e5"
                w="auto"
                flex={1}
                h="60vh"
                p={6}
            ></Flex>
        </Flex>
    );
};
