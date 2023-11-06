import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

export const DonutChart = () => {
    const series = [0, 12, 44];

    const options = {
        chart: {
            width: 380,
            type: "donut",
        },
        colors: ["#CD8C8C", "#CBCDCC", "#97DBB4"],
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
                            label: "Total active hours",
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#262829",
                        },
                    },
                },
            },
        },
        labels: ["Active", "Deactivated", "Inactive"],
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
        <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width={280}
        />
    );
};
