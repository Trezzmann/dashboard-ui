import {
    Box,
    Center,
    Flex,
    HStack,
    Input,
    Select,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { BsCalendar4Event } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { DonutChart } from "../charts/DonutChart";

export const Dashboard = () => {
    const series = [
        {
            name: "Active",
            data: [10, 41, 35, 19, 49, 4, 10],
        },
        {
            name: "Deactivated",
            data: [5, 12, 25, 11, 32, 23, 48],
        },
        {
            name: "Inactive",
            data: [3, 32, 6, 12, 4, 32, 18],
        },
    ];

    const options = {
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#97DBB4", "#CBCDCC", "#CD8C8C"],

        stroke: {
            curve: "smooth",
            width: 3,
        },
        yaxis: {
            labels: {
                formatter: function (value: number) {
                    return value + " hr";
                },
            },
        },
        legend: {
            show: false,
        },

        grid: {
            row: {
                colors: ["#fcfcfc", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
            },
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
    } as ApexOptions;

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
                        <Flex justify="space-between" align={"center"}>
                            <HStack>
                                <Center
                                    w={10}
                                    h={10}
                                    borderRadius="full"
                                    bg="#F9F2EC"
                                    fontSize="xl"
                                    color="#E37E46"
                                >
                                    <FaUserTie />
                                </Center>
                                <Text fontWeight="semibold">
                                    Agent - AGENT-002
                                </Text>
                            </HStack>
                            <HStack spacing={8}>
                                <VStack spacing={0} align="flex-end">
                                    <HStack>
                                        <Box
                                            w={4}
                                            h={2}
                                            bg="#72AA8D"
                                            borderRadius="full"
                                        />
                                        <Text color="#7e7e7e">Active</Text>
                                    </HStack>
                                    <Text fontSize={"lg"} fontWeight="bold">
                                        160 hr
                                    </Text>
                                </VStack>
                                <VStack spacing={0} align="flex-end">
                                    <HStack>
                                        <Box
                                            w={4}
                                            h={2}
                                            bg="#CBCDCC"
                                            borderRadius="full"
                                        />
                                        <Text color="#7e7e7e">Deactivated</Text>
                                    </HStack>
                                    <Text fontSize={"lg"} fontWeight="bold">
                                        0 hr
                                    </Text>
                                </VStack>
                                <VStack spacing={0} align="flex-end">
                                    <HStack>
                                        <Box
                                            w={4}
                                            h={2}
                                            bg="#CD8C8C"
                                            borderRadius="full"
                                        />
                                        <Text color="#7e7e7e">Inactive</Text>
                                    </HStack>
                                    <Text fontSize={"lg"} fontWeight="bold">
                                        60 hr
                                    </Text>
                                </VStack>
                            </HStack>
                        </Flex>
                        <Box width={"full"} mt={6}>
                            <ReactApexChart
                                series={series}
                                s
                                options={options}
                                type="line"
                                height={350}
                            />
                        </Box>
                    </Box>

                    <Flex w="35%" justify={"center"} align={"center"}>
                        <DonutChart />
                        <VStack align={"flex-start"}>
                            <VStack spacing={0} align="flex-start">
                                <HStack>
                                    <Box
                                        w={4}
                                        h={2}
                                        bg="#72AA8D"
                                        borderRadius="full"
                                    />
                                    <Text color="#7e7e7e">Active</Text>
                                </HStack>
                                <Text fontWeight="bold" pl={6}>
                                    26.7
                                </Text>
                            </VStack>
                            <VStack spacing={0} align="flex-start">
                                <HStack>
                                    {" "}
                                    <Box
                                        w={4}
                                        h={2}
                                        bg="#CD8C8C"
                                        borderRadius="full"
                                    />
                                    <Text color="#7e7e7e">Deactivated</Text>
                                </HStack>
                                <Text fontWeight="bold" pl={6}>
                                    0
                                </Text>
                            </VStack>
                            <VStack spacing={0} align="flex-start">
                                <HStack>
                                    <Box
                                        w={4}
                                        h={2}
                                        bg="#CBCDCC"
                                        borderRadius="full"
                                    />
                                    <Text color="#7e7e7e">Inactive</Text>
                                </HStack>
                                <Text fontWeight="bold" pl={6}>
                                    43.3
                                </Text>
                            </VStack>
                        </VStack>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
};
