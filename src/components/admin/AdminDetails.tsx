import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { MdMailOutline, MdModeEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContextProvider";
import { AdminDetailsTab, AdminProfileInfo, AdminProfileSummary } from ".";

export const AdminDetails = () => {
  const { activeTab } = useContext(AdminContext);
  console.log(activeTab);

  return (
    <Box
      minH={"60vh"}
      maxH={"85vh"}
      w="60%"
      bg="#fff"
      borderRadius={"md"}
      border="1px solid #e5e5e5"
      pb={6}
    >
      <Flex
        borderBottom="1px solid #e5e5e5"
        justifyContent="space-between"
        pr={6}
        py={4}
      >
        <AdminDetailsTab />
        <HStack fontWeight="bold" p={0}>
          <Button
            size="sm"
            p={0}
            variant="ghost"
            bg="#F1F1F1"
            color="#3c3c3c"
            fontSize="lg"
            borderRadius="full"
          >
            <MdModeEdit />
          </Button>
          <Button
            size="sm"
            p={0}
            variant="ghost"
            bg="#F1F1F1"
            color="#3c3c3c"
            fontSize="lg"
            borderRadius="full"
          >
            <MdMailOutline />
          </Button>
          <Button
            size="sm"
            p={0}
            variant="ghost"
            bg="#F1F1F1"
            color="#3c3c3c"
            fontSize="lg"
            borderRadius="full"
          >
            <IoClose />
          </Button>
        </HStack>
      </Flex>
      {activeTab === "profile" ? <AdminProfileInfo /> : <AdminProfileSummary />}
    </Box>
  );
};
