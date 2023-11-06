import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { FaUserTie } from "react-icons/fa";

export const LineChart2 = () => {
    const series = [
        {
            name: "Sales",
            data: [0, 12, 18, 10, 20, 22, 28],
        },
        {
            name: "Shora",
            data: [5, 8, 12, 10, 18, 16, 22],
        },
        {
            name: "Agents",
            data: [3, 6, 12, 18, 10, 8, 18],
        },
    ];

    const options = {
        chart: {
            height: 350,
            type: "line",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#97DBB4", "#3A083E", "#CD8C8C"],

        stroke: {
            curve: "smooth",
            width: 3,
        },
        yaxis: {
            labels: {
                formatter: function (value: number) {
                    return value + " M";
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
        <>
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
                    <Text fontWeight="semibold">Sales - Summary</Text>
                </HStack>
                <HStack spacing={8} fontSize={"sm"}>
                    <VStack spacing={0} align="flex-end">
                        <HStack>
                            <Box w={4} h={2} bg="#72AA8D" borderRadius="full" />
                            <Text color="#7e7e7e">Sales</Text>
                        </HStack>
                        <Text>
                            <Text as="span" fontSize={"lg"} fontWeight="bold">
                                8.2M{" "}
                            </Text>
                            BIF
                        </Text>
                    </VStack>
                    <VStack spacing={0} align="flex-end">
                        <HStack>
                            <Box w={4} h={2} bg="#3A083E" borderRadius="full" />
                            <Text color="#7e7e7e">Shora</Text>
                        </HStack>
                        <Text>
                            <Text as="span" fontSize={"lg"} fontWeight="bold">
                                6.1M{" "}
                            </Text>
                            BIF
                        </Text>
                    </VStack>
                    <VStack spacing={0} align="flex-end">
                        <HStack>
                            <Box w={4} h={2} bg="#CD8C8C" borderRadius="full" />
                            <Text color="#7e7e7e">Agents</Text>
                        </HStack>
                        <Text>
                            <Text as="span" fontSize={"lg"} fontWeight="bold">
                                5.4M{" "}
                            </Text>
                            BIF
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
        </>
    );
};
