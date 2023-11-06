import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

export const DonutChart2 = () => {
    const series = [2652480, 2320920, 1823580, 1605600, 3315800];

    const options = {
        chart: {
            width: 380,
            type: "donut",
        },
        colors: ["#3183EF", "#E8A729", "#F13708", "#CB1172", "#37A6AD"],
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270,
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: false,
                            label: "Total Sales",
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#262829",
                        },
                    },
                },
            },
        },
        labels: ["Water", "Electricity", "Airtime", "TV", "Other payments"],
        dataLabels: {
            enabled: true,
        },
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    } as ApexOptions;

    return (
        <>
            <ReactApexChart
                options={options}
                series={series}
                type="donut"
                width={280}
            />
            <VStack align={"flex-start"} fontSize={"sm"}>
                <VStack spacing={0} align="flex-start">
                    <HStack>
                        <Box w={4} h={2} bg="#3183EF" borderRadius="full" />
                        <Text color="#7e7e7e">Water</Text>
                    </HStack>
                    <Text fontWeight="bold" pl={6}>
                        26.7
                    </Text>
                </VStack>
                <VStack spacing={0} align="flex-start">
                    <HStack>
                        {" "}
                        <Box w={4} h={2} bg="#E8A729" borderRadius="full" />
                        <Text color="#7e7e7e">Electricity</Text>
                    </HStack>
                    <Text fontWeight="bold" pl={6}>
                        0
                    </Text>
                </VStack>
                <VStack spacing={0} align="flex-start">
                    <HStack>
                        <Box w={4} h={2} bg="#F13708" borderRadius="full" />
                        <Text color="#7e7e7e">Airtime</Text>
                    </HStack>
                    <Text fontWeight="bold" pl={6}>
                        43.3
                    </Text>
                </VStack>
                <VStack spacing={0} align="flex-start">
                    <HStack>
                        <Box w={4} h={2} bg="#CB1172" borderRadius="full" />
                        <Text color="#7e7e7e">TV</Text>
                    </HStack>
                    <Text fontWeight="bold" pl={6}>
                        43.3
                    </Text>
                </VStack>
                <VStack spacing={0} align="flex-start">
                    <HStack>
                        <Box w={4} h={2} bg="#37A6AD" borderRadius="full" />
                        <Text color="#7e7e7e">Other payments</Text>
                    </HStack>
                    <Text fontWeight="bold" pl={6}>
                        43.3
                    </Text>
                </VStack>
            </VStack>
        </>
    );
};
