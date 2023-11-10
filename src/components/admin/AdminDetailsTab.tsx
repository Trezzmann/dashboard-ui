import { Box, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContextProvider";

export const AdminDetailsTab = () => {
  const { activeTab, toggleProfile, toggleSummary } = useContext(AdminContext);

  return (
    <HStack px={6} spacing={0} align="center" p={0}>
      <Box
        cursor="pointer"
        onClick={toggleSummary}
        px={8}
        fontWeight={activeTab === "summary" ? "bold" : "normal"}
        position="relative"
        _after={{
          content: `""`,
          position: "absolute",
          top: "41px",
          left: 0,
          height: "3px",
          width: "100%",
          background: `${activeTab === "summary" ? "#E0BE81" : "transparent"}`,
        }}
      >
        Summary
      </Box>
      <Box
        cursor="pointer"
        onClick={toggleProfile}
        px={8}
        fontWeight={activeTab === "profile" ? "bold" : "normal"}
        position="relative"
        _after={{
          content: `""`,
          position: "absolute",
          top: "41px",
          left: 0,
          height: "3px",
          width: "100%",
          background: `${activeTab === "profile" ? "#E0BE81" : "transparent"}`,
        }}
      >
        Profile
      </Box>
    </HStack>
  );
};
