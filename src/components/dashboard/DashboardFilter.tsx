import { HStack, Select, Stack } from "@chakra-ui/react";
import React from "react";
import { DateRangePicker } from "../DateRangePicker";

export const DashboardFilter = () => {
  return (
    <Stack justify="space-between" direction="row" w="full">
      <HStack spacing={3}>
        <Select placeholder="" variant="filled" bg="#fff" minW={"180px"}>
          <option value="option1">AGENT-0001</option>
          <option value="option2">AGENT-0003</option>
          <option value="option3">AGENT-0004</option>
        </Select>
        <Select placeholder="" variant="filled" bg="#fff">
          <option value="option1">Store: All</option>
        </Select>
      </HStack>
      <DateRangePicker />
    </Stack>
  );
};
