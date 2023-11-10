import { Flex } from "@chakra-ui/react";
import { MainLayout } from "../layouts/MainLayout";
import { AdminDetails, AdminList } from "../components/admin";
import AdminContextProvider from "../contexts/AdminContextProvider";

export const Admin = () => {
  return (
    <AdminContextProvider>
      <MainLayout title="Admins">
        <Flex px={16} py={6} gap={4}>
          <AdminList />
          <AdminDetails />
        </Flex>
      </MainLayout>
    </AdminContextProvider>
  );
};
