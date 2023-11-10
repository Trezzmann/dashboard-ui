import { Flex } from "@chakra-ui/react";
import { MainLayout } from "../layouts/MainLayout";
import {
  DashboardAgents,
  DashboardFilter,
  DashboardLeaderboard,
  DashboardSales,
  DashboardTerminals,
} from "../components/dashboard";

export const Dashboard = () => {
  return (
    <MainLayout title="Dashboard">
      <Flex px={16} py={6} gap={4} wrap="wrap">
        <DashboardFilter />
        <DashboardAgents />
        <DashboardSales />
        <DashboardTerminals />
        <DashboardLeaderboard />
      </Flex>
    </MainLayout>
  );
};
