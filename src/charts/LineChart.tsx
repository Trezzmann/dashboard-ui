import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { FaUserTie } from "react-icons/fa";

export const LineChart = () => {
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
                    <Text fontWeight="semibold">Agent - AGENT-002</Text>
                </HStack>
                <HStack spacing={8} fontSize={"sm"}>
                    <VStack spacing={0} align="flex-end">
                        <HStack>
                            <Box w={4} h={2} bg="#72AA8D" borderRadius="full" />
                            <Text color="#7e7e7e">Active</Text>
                        </HStack>
                        <Text fontSize={"lg"} fontWeight="bold">
                            160 hr
                        </Text>
                    </VStack>
                    <VStack spacing={0} align="flex-end">
                        <HStack>
                            <Box w={4} h={2} bg="#CBCDCC" borderRadius="full" />
                            <Text color="#7e7e7e">Deactivated</Text>
                        </HStack>
                        <Text fontSize={"lg"} fontWeight="bold">
                            0 hr
                        </Text>
                    </VStack>
                    <VStack spacing={0} align="flex-end">
                        <HStack>
                            <Box w={4} h={2} bg="#CD8C8C" borderRadius="full" />
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
        </>
    );
};
