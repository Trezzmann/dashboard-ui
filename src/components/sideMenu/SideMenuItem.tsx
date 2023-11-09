import { Box, Text, VStack, Tooltip } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

interface SideMenuItemProps {
  id: number;
  pathName: string;
  icon: React.ReactElement;
  url: string;
  implemented: boolean;
}

export const SideMenuItem = (props: SideMenuItemProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === props.url;

  if (props.implemented)
    return (
      <NavLink to={props.url}>
        <VStack
          p={3}
          alignItems="center"
          spacing={1}
          color={isActive ? "primary.400" : "#767676"}
          transition="all ease .3s"
          _hover={{ color: "primary.400" }}
          cursor="pointer"
        >
          <Box fontSize={"2xl"}>{props.icon}</Box>
          <Text fontSize="small" fontWeight={isActive ? "semibold" : "normal"}>
            {props.pathName}
          </Text>
        </VStack>
      </NavLink>
    );

  return (
    <Tooltip label="Not implemented" placement="right" bg="blackAlpha.600">
      <VStack
        p={3}
        alignItems="center"
        spacing={1}
        color="#767676"
        transition="all ease .3s"
        cursor="not-allowed"
      >
        <Box fontSize={"2xl"}>{props.icon}</Box>
        <Text fontSize="small">{props.pathName}</Text>
      </VStack>
    </Tooltip>
  );
};
